#!/bin/bash

echo "Auto-starting development environment..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "Error: Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "Error: npm is not installed. Please install npm first."
    exit 1
fi

# Check if dependencies are installed
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
fi

# Create logs directory
mkdir -p logs

# Function to check if a service is already running
is_service_running() {
    local service_name=$1
    local port=$2
    
    if [ -n "$port" ]; then
        if lsof -Pi :$port -sTCP:LISTEN -t >/dev/null 2>&1; then
            return 0
        fi
    fi
    
    if pgrep -f "$service_name" >/dev/null 2>&1; then
        return 0
    fi
    
    return 1
}

# Function to start service if not running
start_if_not_running() {
    local name=$1
    local command=$2
    local port=$3
    
    if is_service_running "$name" "$port"; then
        echo "$name is already running"
    else
        echo "Starting $name..."
        eval "$command" > "logs/${name,,}.log" 2>&1 &
        echo "$name started (PID: $!)"
    fi
}

# Start services
echo "Starting development services..."

# Start Vue dev server
start_if_not_running "Vue Dev Server" "npm run dev" 5173

# Start Storybook
start_if_not_running "Storybook" "npm run storybook" 6006

# Start MCP servers
echo "Starting MCP servers..."

# Start Figma MCP server
if ! is_service_running "figma-server.js"; then
    echo "Starting Figma MCP server..."
    node MCP/figma-server.js > logs/figma-server.log 2>&1 &
    echo "Figma MCP server started (PID: $!)"
else
    echo "Figma MCP server is already running"
fi

# Start Design MCP server
if ! is_service_running "design-server.js"; then
    echo "Starting Design MCP server..."
    node MCP/design-server.js > logs/design-server.log 2>&1 &
    echo "Design MCP server started (PID: $!)"
else
    echo "Design MCP server is already running"
fi

# Start Code MCP server
if ! is_service_running "code-server.js"; then
    echo "Starting Code MCP server..."
    node MCP/code-server.js > logs/code-server.log 2>&1 &
    echo "Code MCP server started (PID: $!)"
else
    echo "Code MCP server is already running"
fi

echo ""
echo "Development environment started successfully!"
echo ""
echo "Services:"
echo "- Vue Dev Server: http://localhost:5173"
echo "- Storybook: http://localhost:6006"
echo "- MCP Servers: Running in background"
echo ""
echo "Logs: logs/ directory"
echo ""
echo "To stop all services: pkill -f 'vite\|storybook\|figma-server\|design-server\|code-server'"

# Keep script running and show logs
echo ""
echo "Press Ctrl+C to stop all services"
echo ""

# Function to cleanup on exit
cleanup() {
    echo ""
    echo "Stopping all services..."
    pkill -f "vite\|storybook\|figma-server\|design-server\|code-server" 2>/dev/null
    echo "All services stopped"
    exit 0
}

# Set trap to cleanup on script exit
trap cleanup SIGINT SIGTERM

# Wait and show logs
while true; do
    sleep 10
    echo "Services are running... (Press Ctrl+C to stop)"
done 
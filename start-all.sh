#!/bin/bash

echo "Starting all servers and services..."

# Function to check if a port is in use
check_port() {
    if lsof -Pi :$1 -sTCP:LISTEN -t >/dev/null ; then
        echo "Port $1 is already in use"
        return 1
    else
        return 0
    fi
}

# Function to start a service
start_service() {
    local name=$1
    local command=$2
    local port=$3
    
    echo "Starting $name..."
    
    if [ -n "$port" ]; then
        if check_port $port; then
            eval "$command" &
            echo "$name started on port $port (PID: $!)"
        else
            echo "$name is already running on port $port"
        fi
    else
        eval "$command" &
        echo "$name started (PID: $!)"
    fi
}

# Create logs directory if it doesn't exist
mkdir -p logs

# Start Vue development server
start_service "Vue Dev Server" "npm run dev" 5173

# Start Storybook
start_service "Storybook" "npm run storybook" 6006

# Start MCP servers
echo "Starting MCP servers..."

# Start Figma MCP server
node MCP/figma-server.js > logs/figma-server.log 2>&1 &
FIGMA_PID=$!
echo "Figma MCP server started (PID: $FIGMA_PID)"

# Start Design MCP server
node MCP/design-server.js > logs/design-server.log 2>&1 &
DESIGN_PID=$!
echo "Design MCP server started (PID: $DESIGN_PID)"

# Start Code MCP server
node MCP/code-server.js > logs/code-server.log 2>&1 &
CODE_PID=$!
echo "Code MCP server started (PID: $CODE_PID)"

# Save PIDs to file for later cleanup
echo $FIGMA_PID > logs/figma-server.pid
echo $DESIGN_PID > logs/design-server.pid
echo $CODE_PID > logs/code-server.pid

echo ""
echo "All services started successfully!"
echo ""
echo "Services running:"
echo "- Vue Dev Server: http://localhost:5173"
echo "- Storybook: http://localhost:6006"
echo "- Figma MCP Server: PID $FIGMA_PID"
echo "- Design MCP Server: PID $DESIGN_PID"
echo "- Code MCP Server: PID $CODE_PID"
echo ""
echo "Logs are available in the logs/ directory"
echo ""
echo "To stop all services, run: ./stop-all.sh"

# Wait for user input to stop
echo ""
read -p "Press Enter to stop all services..."

# Stop all services
echo "Stopping all services..."

# Kill MCP servers
if [ -f logs/figma-server.pid ]; then
    kill $(cat logs/figma-server.pid) 2>/dev/null
    rm logs/figma-server.pid
fi

if [ -f logs/design-server.pid ]; then
    kill $(cat logs/design-server.pid) 2>/dev/null
    rm logs/design-server.pid
fi

if [ -f logs/code-server.pid ]; then
    kill $(cat logs/code-server.pid) 2>/dev/null
    rm logs/code-server.pid
fi

# Kill all node processes (Vue and Storybook)
pkill -f "vite\|storybook" 2>/dev/null

echo "All services stopped" 
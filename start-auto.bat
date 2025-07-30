@echo off
echo Auto-starting development environment...

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo Error: Node.js is not installed. Please install Node.js first.
    pause
    exit /b 1
)

REM Check if npm is installed
npm --version >nul 2>&1
if errorlevel 1 (
    echo Error: npm is not installed. Please install npm first.
    pause
    exit /b 1
)

REM Check if dependencies are installed
if not exist node_modules (
    echo Installing dependencies...
    npm install
)

REM Create logs directory
if not exist logs mkdir logs

echo Starting development services...

REM Start Vue dev server
echo Starting Vue Dev Server...
start "Vue Dev Server" cmd /k "npm run dev"

REM Start Storybook
echo Starting Storybook...
start "Storybook" cmd /k "npm run storybook"

REM Start MCP servers
echo Starting MCP servers...

REM Start Figma MCP server
echo Starting Figma MCP server...
start "Figma MCP Server" cmd /k "node MCP/figma-server.js > logs/figma-server.log 2>&1"

REM Start Design MCP server
echo Starting Design MCP server...
start "Design MCP Server" cmd /k "node MCP/design-server.js > logs/design-server.log 2>&1"

REM Start Code MCP server
echo Starting Code MCP server...
start "Code MCP Server" cmd /k "node MCP/code-server.js > logs/code-server.log 2>&1"

echo.
echo Development environment started successfully!
echo.
echo Services:
echo - Vue Dev Server: http://localhost:5173
echo - Storybook: http://localhost:6006
echo - MCP Servers: Running in separate windows
echo.
echo Logs: logs/ directory
echo.
echo All services are now running in separate windows.
echo Close the windows to stop individual services.
echo.
pause 
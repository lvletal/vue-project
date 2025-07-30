@echo off
echo Starting all servers and services...

REM Create logs directory if it doesn't exist
if not exist logs mkdir logs

REM Start Vue development server
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
echo All services started successfully!
echo.
echo Services running:
echo - Vue Dev Server: http://localhost:5173
echo - Storybook: http://localhost:6006
echo - Figma MCP Server: Running in separate window
echo - Design MCP Server: Running in separate window
echo - Code MCP Server: Running in separate window
echo.
echo Logs are available in the logs/ directory
echo.
echo To stop all services, close the command windows or run: stop-all.bat

pause 
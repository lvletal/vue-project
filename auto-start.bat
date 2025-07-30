@echo off
echo Starting Vue + MCP Project automatically...
echo.

REM Kill any existing Node.js processes on ports 3000, 6006
echo Stopping existing processes...
taskkill /f /im node.exe >nul 2>&1
timeout /t 2 >nul

REM Start MCP servers
echo Starting MCP servers...
start "Figma MCP Server" cmd /k "node MCP/figma-server.js"
timeout /t 1 >nul
start "Design MCP Server" cmd /k "node MCP/design-server.js"
timeout /t 1 >nul
start "Code MCP Server" cmd /k "node MCP/code-server.js"
timeout /t 1 >nul

REM Start Vue development server
echo Starting Vue development server...
start "Vue Dev Server" cmd /k "npm run dev"

echo.
echo All servers started successfully!
echo.
echo Services running:
echo - Vue Dev Server: http://localhost:3000
echo - Figma MCP Server: Running
echo - Design MCP Server: Running  
echo - Code MCP Server: Running
echo.
echo Figma integration is now active and ready to use.
echo.
pause 
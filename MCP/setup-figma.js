#!/usr/bin/env node

import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';
import fs from 'fs/promises';
import path from 'path';

async function setupFigma() {
  console.log('Setting up Figma MCP integration...');

  try {
    // Create MCP client
    const transport = new StdioClientTransport({
      command: 'node',
      args: ['MCP/figma-server.js'],
    });

    const client = new Client({
      name: 'figma-setup-client',
      version: '1.0.0',
    });

    await client.connect(transport);

    // Test connection
    console.log('Testing MCP connection...');
    const tools = await client.listTools();
    console.log('Available tools:', tools.tools.map(t => t.name));

    // Create configuration file
    const config = {
      figma: {
        accessToken: process.env.FIGMA_ACCESS_TOKEN || '',
        defaultFileKey: process.env.FIGMA_FILE_KEY || '',
      },
      mcp: {
        servers: {
          figma: {
            command: 'node',
            args: ['MCP/figma-server.js'],
          },
          design: {
            command: 'node',
            args: ['MCP/design-server.js'],
          },
          code: {
            command: 'node',
            args: ['MCP/code-server.js'],
          },
        },
      },
    };

    await fs.writeFile('mcp-config.json', JSON.stringify(config, null, 2));
    console.log('MCP configuration saved to mcp-config.json');

    // Create environment file template
    const envTemplate = `# Figma API Configuration
FIGMA_ACCESS_TOKEN=your_figma_access_token_here
FIGMA_FILE_KEY=your_figma_file_key_here

# MCP Server Configuration
MCP_FIGMA_SERVER_PATH=MCP/figma-server.js
MCP_DESIGN_SERVER_PATH=MCP/design-server.js
MCP_CODE_SERVER_PATH=MCP/code-server.js
`;

    await fs.writeFile('.env.template', envTemplate);
    console.log('Environment template saved to .env.template');

    // Create startup scripts
    const startupScript = `#!/bin/bash
# Start all MCP servers
echo "Starting MCP servers..."

# Start Figma server
node MCP/figma-server.js &
FIGMA_PID=$!

# Start Design server
node MCP/design-server.js &
DESIGN_PID=$!

# Start Code server
node MCP/code-server.js &
CODE_PID=$!

echo "MCP servers started with PIDs: $FIGMA_PID, $DESIGN_PID, $CODE_PID"

# Wait for all processes
wait
`;

    await fs.writeFile('start-mcp-servers.sh', startupScript);
    await fs.chmod('start-mcp-servers.sh', 0o755);
    console.log('Startup script created: start-mcp-servers.sh');

    // Create Windows batch file
    const batchScript = `@echo off
echo Starting MCP servers...

start /B node MCP/figma-server.js
start /B node MCP/design-server.js
start /B node MCP/code-server.js

echo MCP servers started in background
pause
`;

    await fs.writeFile('start-mcp-servers.bat', batchScript);
    console.log('Windows batch file created: start-mcp-servers.bat');

    console.log('Figma MCP setup completed successfully!');
    console.log('');
    console.log('Next steps:');
    console.log('1. Copy .env.template to .env and add your Figma credentials');
    console.log('2. Run "npm install" to ensure all dependencies are installed');
    console.log('3. Start the MCP servers using the provided scripts');
    console.log('4. Test the integration in your Vue application');

  } catch (error) {
    console.error('Error setting up Figma MCP:', error);
    process.exit(1);
  }
}

// Run setup if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  setupFigma();
}

export { setupFigma }; 
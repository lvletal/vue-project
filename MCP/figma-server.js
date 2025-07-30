#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { CallToolRequestSchema, ListToolsRequestSchema } from '@modelcontextprotocol/sdk/types.js';

const server = new Server(
  {
    name: 'figma-server',
    version: '1.0.0',
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// Figma API integration
let figmaAccessToken = null;
let figmaFileKey = null;

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: 'get_figma_file',
        description: 'Get Figma file information and design tokens',
        inputSchema: {
          type: 'object',
          properties: {
            fileKey: {
              type: 'string',
              description: 'Figma file key (from URL)',
            },
            accessToken: {
              type: 'string',
              description: 'Figma access token',
            },
          },
          required: ['fileKey', 'accessToken'],
        },
      },
      {
        name: 'extract_design_tokens',
        description: 'Extract design tokens from Figma file',
        inputSchema: {
          type: 'object',
          properties: {
            nodeId: {
              type: 'string',
              description: 'Node ID to extract tokens from',
            },
          },
          required: ['nodeId'],
        },
      },
      {
        name: 'set_figma_credentials',
        description: 'Set Figma access token and file key',
        inputSchema: {
          type: 'object',
          properties: {
            accessToken: {
              type: 'string',
              description: 'Figma access token',
            },
            fileKey: {
              type: 'string',
              description: 'Figma file key',
            },
          },
          required: ['accessToken', 'fileKey'],
        },
      },
    ],
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  switch (name) {
    case 'set_figma_credentials':
      figmaAccessToken = args.accessToken;
      figmaFileKey = args.fileKey;
      return {
        content: [
          {
            type: 'text',
            text: `Figma credentials set successfully. File Key: ${figmaFileKey}`,
          },
        ],
      };

    case 'get_figma_file':
      try {
        const response = await fetch(`https://api.figma.com/v1/files/${args.fileKey}`, {
          headers: {
            'X-Figma-Token': args.accessToken,
          },
        });

        if (!response.ok) {
          throw new Error(`Figma API error: ${response.status}`);
        }

        const data = await response.json();
        return {
          content: [
            {
              type: 'text',
              text: `Figma file loaded successfully: ${data.name}`,
            },
            {
              type: 'text',
              text: `Document structure: ${JSON.stringify(data.document, null, 2)}`,
            },
          ],
        };
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: `Error loading Figma file: ${error.message}`,
            },
          ],
        };
      }

    case 'extract_design_tokens':
      try {
        if (!figmaAccessToken || !figmaFileKey) {
          throw new Error('Figma credentials not set. Use set_figma_credentials first.');
        }

        const response = await fetch(`https://api.figma.com/v1/files/${figmaFileKey}/nodes?ids=${args.nodeId}`, {
          headers: {
            'X-Figma-Token': figmaAccessToken,
          },
        });

        if (!response.ok) {
          throw new Error(`Figma API error: ${response.status}`);
        }

        const data = await response.json();
        const node = data.nodes[args.nodeId];

        // Extract design tokens from the node
        const tokens = extractTokensFromNode(node);
        
        return {
          content: [
            {
              type: 'text',
              text: `Design tokens extracted from node ${args.nodeId}:`,
            },
            {
              type: 'text',
              text: JSON.stringify(tokens, null, 2),
            },
          ],
        };
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: `Error extracting design tokens: ${error.message}`,
            },
          ],
        };
      }

    default:
      throw new Error(`Unknown tool: ${name}`);
  }
});

function extractTokensFromNode(node) {
  const tokens = {
    colors: {},
    typography: {},
    spacing: {},
    shadows: {},
    layout: {},
    components: {}
  };

  if (!node) return tokens;

  // Extract colors with more detail
  if (node.fills) {
    node.fills.forEach((fill, index) => {
      if (fill.type === 'SOLID' && fill.color) {
        const colorName = `color-${index + 1}`;
        const r = Math.round(fill.color.r * 255);
        const g = Math.round(fill.color.g * 255);
        const b = Math.round(fill.color.b * 255);
        const a = fill.color.a || 1;
        
        tokens.colors[colorName] = {
          r, g, b, a,
          hex: `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`,
          rgba: `rgba(${r}, ${g}, ${b}, ${a})`
        };
      } else if (fill.type === 'GRADIENT_LINEAR') {
        tokens.colors[`gradient-${index + 1}`] = {
          type: 'gradient',
          gradientStops: fill.gradientStops,
          gradientTransform: fill.gradientTransform
        };
      }
    });
  }

  // Extract typography with more detail
  if (node.style) {
    tokens.typography = {
      fontSize: node.style.fontSize,
      fontFamily: node.style.fontFamily,
      fontWeight: node.style.fontWeight,
      lineHeight: node.style.lineHeightPx,
      letterSpacing: node.style.letterSpacing,
      textAlignHorizontal: node.style.textAlignHorizontal,
      textAlignVertical: node.style.textAlignVertical
    };
  }

  // Extract spacing and layout with more detail
  if (node.absoluteBoundingBox) {
    tokens.spacing = {
      width: Math.round(node.absoluteBoundingBox.width),
      height: Math.round(node.absoluteBoundingBox.height),
      x: Math.round(node.absoluteBoundingBox.x),
      y: Math.round(node.absoluteBoundingBox.y)
    };
    
    tokens.layout = {
      padding: {
        top: node.paddingTop || 0,
        right: node.paddingRight || 0,
        bottom: node.paddingBottom || 0,
        left: node.paddingLeft || 0
      },
      margin: {
        top: node.marginTop || 0,
        right: node.marginRight || 0,
        bottom: node.marginBottom || 0,
        left: node.marginLeft || 0
      },
      gap: node.itemSpacing || 0,
      cornerRadius: node.cornerRadius || 0
    };
  }

  // Extract shadows
  if (node.effects) {
    node.effects.forEach((effect, index) => {
      if (effect.type === 'DROP_SHADOW') {
        tokens.shadows[`shadow-${index + 1}`] = {
          type: 'drop-shadow',
          color: effect.color,
          offset: effect.offset,
          radius: effect.radius,
          visible: effect.visible,
          blendMode: effect.blendMode
        };
      }
    });
  }

  // Extract component-specific information
  if (node.children) {
    tokens.components = {
      childCount: node.children.length,
      children: node.children.map(child => ({
        name: child.name,
        type: child.type,
        width: child.absoluteBoundingBox?.width,
        height: child.absoluteBoundingBox?.height
      }))
    };
  }

  // Extract constraints and layout information
  if (node.constraints) {
    tokens.layout.constraints = {
      horizontal: node.constraints.horizontal,
      vertical: node.constraints.vertical
    };
  }

  // Extract auto-layout information
  if (node.layoutMode) {
    tokens.layout.autoLayout = {
      mode: node.layoutMode,
      primaryAxisSizingMode: node.primaryAxisSizingMode,
      counterAxisSizingMode: node.counterAxisSizingMode,
      primaryAxisAlignItems: node.primaryAxisAlignItems,
      counterAxisAlignItems: node.counterAxisAlignItems,
      paddingLeft: node.paddingLeft,
      paddingRight: node.paddingRight,
      paddingTop: node.paddingTop,
      paddingBottom: node.paddingBottom,
      itemSpacing: node.itemSpacing
    };
  }

  return tokens;
}

const transport = new StdioServerTransport();
server.connect(transport);

console.error('Figma MCP server started'); 
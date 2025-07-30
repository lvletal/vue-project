#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { CallToolRequestSchema, ListToolsRequestSchema } from '@modelcontextprotocol/sdk/types.js';

const server = new Server(
  {
    name: 'design-server',
    version: '1.0.0',
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// Design token storage
let designTokens = {
  colors: {},
  typography: {},
  spacing: {},
  shadows: {},
  breakpoints: {},
};

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: 'add_color_token',
        description: 'Add a new color token to the design system',
        inputSchema: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              description: 'Name of the color token',
            },
            value: {
              type: 'string',
              description: 'Color value (hex, rgb, hsl)',
            },
            category: {
              type: 'string',
              description: 'Category of the color (primary, secondary, neutral, etc.)',
            },
          },
          required: ['name', 'value'],
        },
      },
      {
        name: 'add_typography_token',
        description: 'Add a new typography token to the design system',
        inputSchema: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              description: 'Name of the typography token',
            },
            fontSize: {
              type: 'string',
              description: 'Font size (e.g., "16px", "1rem")',
            },
            fontWeight: {
              type: 'string',
              description: 'Font weight (e.g., "400", "bold")',
            },
            lineHeight: {
              type: 'string',
              description: 'Line height (e.g., "1.5", "24px")',
            },
            fontFamily: {
              type: 'string',
              description: 'Font family',
            },
          },
          required: ['name', 'fontSize'],
        },
      },
      {
        name: 'add_spacing_token',
        description: 'Add a new spacing token to the design system',
        inputSchema: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              description: 'Name of the spacing token',
            },
            value: {
              type: 'string',
              description: 'Spacing value (e.g., "8px", "1rem")',
            },
          },
          required: ['name', 'value'],
        },
      },
      {
        name: 'get_design_tokens',
        description: 'Get all design tokens',
        inputSchema: {
          type: 'object',
          properties: {
            category: {
              type: 'string',
              description: 'Optional category filter',
            },
          },
        },
      },
      {
        name: 'export_tokens',
        description: 'Export design tokens to various formats',
        inputSchema: {
          type: 'object',
          properties: {
            format: {
              type: 'string',
              description: 'Export format (json, css, scss, tailwind)',
            },
            filename: {
              type: 'string',
              description: 'Output filename',
            },
          },
          required: ['format'],
        },
      },
      {
        name: 'validate_tokens',
        description: 'Validate design tokens for consistency',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },
    ],
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  switch (name) {
    case 'add_color_token':
      designTokens.colors[args.name] = {
        value: args.value,
        category: args.category || 'general',
        type: 'color',
      };
      return {
        content: [
          {
            type: 'text',
            text: `Color token "${args.name}" added successfully with value "${args.value}"`,
          },
        ],
      };

    case 'add_typography_token':
      designTokens.typography[args.name] = {
        fontSize: args.fontSize,
        fontWeight: args.fontWeight || '400',
        lineHeight: args.lineHeight || '1.5',
        fontFamily: args.fontFamily || 'inherit',
        type: 'typography',
      };
      return {
        content: [
          {
            type: 'text',
            text: `Typography token "${args.name}" added successfully`,
          },
        ],
      };

    case 'add_spacing_token':
      designTokens.spacing[args.name] = {
        value: args.value,
        type: 'spacing',
      };
      return {
        content: [
          {
            type: 'text',
            text: `Spacing token "${args.name}" added successfully with value "${args.value}"`,
          },
        ],
      };

    case 'get_design_tokens':
      if (args.category) {
        const categoryTokens = designTokens[args.category] || {};
        return {
          content: [
            {
              type: 'text',
              text: `Design tokens for category "${args.category}":`,
            },
            {
              type: 'text',
              text: JSON.stringify(categoryTokens, null, 2),
            },
          ],
        };
      }
      return {
        content: [
          {
            type: 'text',
            text: 'All design tokens:',
          },
          {
            type: 'text',
            text: JSON.stringify(designTokens, null, 2),
          },
        ],
      };

    case 'export_tokens':
      let exportedContent = '';
      
      switch (args.format.toLowerCase()) {
        case 'json':
          exportedContent = JSON.stringify(designTokens, null, 2);
          break;
        case 'css':
          exportedContent = generateCSSTokens(designTokens);
          break;
        case 'scss':
          exportedContent = generateSCSSTokens(designTokens);
          break;
        case 'tailwind':
          exportedContent = generateTailwindTokens(designTokens);
          break;
        default:
          throw new Error(`Unsupported format: ${args.format}`);
      }

      return {
        content: [
          {
            type: 'text',
            text: `Design tokens exported to ${args.format.toUpperCase()} format:`,
          },
          {
            type: 'text',
            text: exportedContent,
          },
        ],
      };

    case 'validate_tokens':
      const validationResults = validateDesignTokens(designTokens);
      return {
        content: [
          {
            type: 'text',
            text: 'Design token validation results:',
          },
          {
            type: 'text',
            text: JSON.stringify(validationResults, null, 2),
          },
        ],
      };

    default:
      throw new Error(`Unknown tool: ${name}`);
  }
});

function generateCSSTokens(tokens) {
  let css = ':root {\n';
  
  // Colors
  Object.entries(tokens.colors).forEach(([name, token]) => {
    css += `  --color-${name}: ${token.value};\n`;
  });
  
  // Typography
  Object.entries(tokens.typography).forEach(([name, token]) => {
    css += `  --font-${name}-size: ${token.fontSize};\n`;
    css += `  --font-${name}-weight: ${token.fontWeight};\n`;
    css += `  --font-${name}-line-height: ${token.lineHeight};\n`;
    css += `  --font-${name}-family: ${token.fontFamily};\n`;
  });
  
  // Spacing
  Object.entries(tokens.spacing).forEach(([name, token]) => {
    css += `  --spacing-${name}: ${token.value};\n`;
  });
  
  css += '}';
  return css;
}

function generateSCSSTokens(tokens) {
  let scss = '';
  
  // Colors
  scss += '$colors: (\n';
  Object.entries(tokens.colors).forEach(([name, token]) => {
    scss += `  '${name}': ${token.value},\n`;
  });
  scss += ');\n\n';
  
  // Typography
  scss += '$typography: (\n';
  Object.entries(tokens.typography).forEach(([name, token]) => {
    scss += `  '${name}': (\n`;
    scss += `    'font-size': ${token.fontSize},\n`;
    scss += `    'font-weight': ${token.fontWeight},\n`;
    scss += `    'line-height': ${token.lineHeight},\n`;
    scss += `    'font-family': ${token.fontFamily},\n`;
    scss += `  ),\n`;
  });
  scss += ');\n\n';
  
  // Spacing
  scss += '$spacing: (\n';
  Object.entries(tokens.spacing).forEach(([name, token]) => {
    scss += `  '${name}': ${token.value},\n`;
  });
  scss += ');\n';
  
  return scss;
}

function generateTailwindTokens(tokens) {
  let config = 'module.exports = {\n';
  config += '  theme: {\n';
  config += '    extend: {\n';
  
  // Colors
  config += '      colors: {\n';
  Object.entries(tokens.colors).forEach(([name, token]) => {
    config += `        '${name}': '${token.value}',\n`;
  });
  config += '      },\n';
  
  // Spacing
  config += '      spacing: {\n';
  Object.entries(tokens.spacing).forEach(([name, token]) => {
    config += `        '${name}': '${token.value}',\n`;
  });
  config += '      },\n';
  
  // Typography
  config += '      fontSize: {\n';
  Object.entries(tokens.typography).forEach(([name, token]) => {
    config += `        '${name}': ['${token.fontSize}', {\n`;
    config += `          lineHeight: '${token.lineHeight}',\n`;
    config += `          fontWeight: '${token.fontWeight}',\n`;
    config += `        }],\n`;
  });
  config += '      },\n';
  
  config += '    },\n';
  config += '  },\n';
  config += '};\n';
  
  return config;
}

function validateDesignTokens(tokens) {
  const results = {
    valid: true,
    errors: [],
    warnings: [],
  };

  // Validate colors
  Object.entries(tokens.colors).forEach(([name, token]) => {
    if (!isValidColor(token.value)) {
      results.errors.push(`Invalid color value for "${name}": ${token.value}`);
      results.valid = false;
    }
  });

  // Validate typography
  Object.entries(tokens.typography).forEach(([name, token]) => {
    if (!isValidFontSize(token.fontSize)) {
      results.warnings.push(`Potentially invalid font size for "${name}": ${token.fontSize}`);
    }
  });

  // Validate spacing
  Object.entries(tokens.spacing).forEach(([name, token]) => {
    if (!isValidSpacing(token.value)) {
      results.warnings.push(`Potentially invalid spacing value for "${name}": ${token.value}`);
    }
  });

  return results;
}

function isValidColor(value) {
  const colorRegex = /^(#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})|rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)|rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*[\d.]+\s*\)|hsl\(\s*\d+\s*,\s*\d+%\s*,\s*\d+%\s*\)|hsla\(\s*\d+\s*,\s*\d+%\s*,\s*\d+%\s*,\s*[\d.]+\s*\))$/;
  return colorRegex.test(value);
}

function isValidFontSize(value) {
  const fontSizeRegex = /^(\d+(\.\d+)?(px|rem|em|%|vw|vh)|smaller|larger|inherit|initial|unset)$/;
  return fontSizeRegex.test(value);
}

function isValidSpacing(value) {
  const spacingRegex = /^(\d+(\.\d+)?(px|rem|em|%|vw|vh)|0|auto|inherit|initial|unset)$/;
  return spacingRegex.test(value);
}

const transport = new StdioServerTransport();
server.connect(transport);

console.error('Design MCP server started'); 
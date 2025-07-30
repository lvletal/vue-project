#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { CallToolRequestSchema, ListToolsRequestSchema } from '@modelcontextprotocol/sdk/types.js';
import fs from 'fs/promises';
import path from 'path';

const server = new Server(
  {
    name: 'code-server',
    version: '1.0.0',
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: 'read_file',
        description: 'Read a file from the filesystem',
        inputSchema: {
          type: 'object',
          properties: {
            filepath: {
              type: 'string',
              description: 'Path to the file to read',
            },
          },
          required: ['filepath'],
        },
      },
      {
        name: 'write_file',
        description: 'Write content to a file',
        inputSchema: {
          type: 'object',
          properties: {
            filepath: {
              type: 'string',
              description: 'Path to the file to write',
            },
            content: {
              type: 'string',
              description: 'Content to write to the file',
            },
          },
          required: ['filepath', 'content'],
        },
      },
      {
        name: 'list_directory',
        description: 'List contents of a directory',
        inputSchema: {
          type: 'object',
          properties: {
            dirpath: {
              type: 'string',
              description: 'Path to the directory to list',
            },
          },
          required: ['dirpath'],
        },
      },
      {
        name: 'create_directory',
        description: 'Create a new directory',
        inputSchema: {
          type: 'object',
          properties: {
            dirpath: {
              type: 'string',
              description: 'Path to the directory to create',
            },
          },
          required: ['dirpath'],
        },
      },
      {
        name: 'delete_file',
        description: 'Delete a file',
        inputSchema: {
          type: 'object',
          properties: {
            filepath: {
              type: 'string',
              description: 'Path to the file to delete',
            },
          },
          required: ['filepath'],
        },
      },
      {
        name: 'search_files',
        description: 'Search for files by pattern',
        inputSchema: {
          type: 'object',
          properties: {
            pattern: {
              type: 'string',
              description: 'Search pattern (glob)',
            },
            dirpath: {
              type: 'string',
              description: 'Directory to search in (optional)',
            },
          },
          required: ['pattern'],
        },
      },
      {
        name: 'analyze_code',
        description: 'Analyze code structure and dependencies',
        inputSchema: {
          type: 'object',
          properties: {
            filepath: {
              type: 'string',
              description: 'Path to the file to analyze',
            },
          },
          required: ['filepath'],
        },
      },
      {
        name: 'format_code',
        description: 'Format code according to style guidelines',
        inputSchema: {
          type: 'object',
          properties: {
            filepath: {
              type: 'string',
              description: 'Path to the file to format',
            },
            language: {
              type: 'string',
              description: 'Programming language for formatting',
            },
          },
          required: ['filepath', 'language'],
        },
      },
    ],
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  switch (name) {
    case 'read_file':
      try {
        const content = await fs.readFile(args.filepath, 'utf-8');
        return {
          content: [
            {
              type: 'text',
              text: `File content of ${args.filepath}:`,
            },
            {
              type: 'text',
              text: content,
            },
          ],
        };
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: `Error reading file ${args.filepath}: ${error.message}`,
            },
          ],
        };
      }

    case 'write_file':
      try {
        await fs.writeFile(args.filepath, args.content, 'utf-8');
        return {
          content: [
            {
              type: 'text',
              text: `Successfully wrote content to ${args.filepath}`,
            },
          ],
        };
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: `Error writing file ${args.filepath}: ${error.message}`,
            },
          ],
        };
      }

    case 'list_directory':
      try {
        const entries = await fs.readdir(args.dirpath, { withFileTypes: true });
        const files = entries
          .filter(entry => entry.isFile())
          .map(entry => `📄 ${entry.name}`);
        const dirs = entries
          .filter(entry => entry.isDirectory())
          .map(entry => `📁 ${entry.name}`);
        
        const result = [...dirs, ...files].join('\n');
        return {
          content: [
            {
              type: 'text',
              text: `Contents of ${args.dirpath}:\n${result}`,
            },
          ],
        };
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: `Error listing directory ${args.dirpath}: ${error.message}`,
            },
          ],
        };
      }

    case 'create_directory':
      try {
        await fs.mkdir(args.dirpath, { recursive: true });
        return {
          content: [
            {
              type: 'text',
              text: `Successfully created directory ${args.dirpath}`,
            },
          ],
        };
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: `Error creating directory ${args.dirpath}: ${error.message}`,
            },
          ],
        };
      }

    case 'delete_file':
      try {
        await fs.unlink(args.filepath);
        return {
          content: [
            {
              type: 'text',
              text: `Successfully deleted file ${args.filepath}`,
            },
          ],
        };
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: `Error deleting file ${args.filepath}: ${error.message}`,
            },
          ],
        };
      }

    case 'search_files':
      try {
        const searchDir = args.dirpath || '.';
        const pattern = args.pattern;
        
        // Simple glob-like search implementation
        const entries = await fs.readdir(searchDir, { withFileTypes: true, recursive: true });
        const matchingFiles = entries
          .filter(entry => entry.isFile())
          .filter(entry => {
            const relativePath = path.relative(searchDir, entry.path);
            return relativePath.includes(pattern.replace('*', ''));
          })
          .map(entry => path.relative(searchDir, entry.path));
        
        return {
          content: [
            {
              type: 'text',
              text: `Files matching pattern "${pattern}" in ${searchDir}:\n${matchingFiles.join('\n')}`,
            },
          ],
        };
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: `Error searching files: ${error.message}`,
            },
          ],
        };
      }

    case 'analyze_code':
      try {
        const content = await fs.readFile(args.filepath, 'utf-8');
        const analysis = analyzeCodeStructure(content, args.filepath);
        
        return {
          content: [
            {
              type: 'text',
              text: `Code analysis for ${args.filepath}:`,
            },
            {
              type: 'text',
              text: JSON.stringify(analysis, null, 2),
            },
          ],
        };
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: `Error analyzing code: ${error.message}`,
            },
          ],
        };
      }

    case 'format_code':
      try {
        const content = await fs.readFile(args.filepath, 'utf-8');
        const formatted = formatCode(content, args.language);
        await fs.writeFile(args.filepath, formatted, 'utf-8');
        
        return {
          content: [
            {
              type: 'text',
              text: `Successfully formatted ${args.filepath} as ${args.language}`,
            },
          ],
        };
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: `Error formatting code: ${error.message}`,
            },
          ],
        };
      }

    default:
      throw new Error(`Unknown tool: ${name}`);
  }
});

function analyzeCodeStructure(content, filepath) {
  const ext = path.extname(filepath).toLowerCase();
  const analysis = {
    fileType: ext,
    lines: content.split('\n').length,
    characters: content.length,
    imports: [],
    functions: [],
    classes: [],
    variables: [],
  };

  const lines = content.split('\n');

  lines.forEach((line, index) => {
    const trimmedLine = line.trim();
    
    // Detect imports
    if (trimmedLine.startsWith('import ') || trimmedLine.startsWith('from ')) {
      analysis.imports.push({ line: index + 1, content: trimmedLine });
    }
    
    // Detect functions
    if (trimmedLine.includes('function ') || trimmedLine.includes('=>')) {
      analysis.functions.push({ line: index + 1, content: trimmedLine });
    }
    
    // Detect classes
    if (trimmedLine.includes('class ')) {
      analysis.classes.push({ line: index + 1, content: trimmedLine });
    }
    
    // Detect variable declarations
    if (trimmedLine.includes('const ') || trimmedLine.includes('let ') || trimmedLine.includes('var ')) {
      analysis.variables.push({ line: index + 1, content: trimmedLine });
    }
  });

  return analysis;
}

function formatCode(content, language) {
  // Simple formatting based on language
  switch (language.toLowerCase()) {
    case 'javascript':
    case 'js':
      return formatJavaScript(content);
    case 'typescript':
    case 'ts':
      return formatTypeScript(content);
    case 'vue':
      return formatVue(content);
    case 'css':
      return formatCSS(content);
    case 'html':
      return formatHTML(content);
    default:
      return content; // Return as-is for unsupported languages
  }
}

function formatJavaScript(content) {
  // Basic JavaScript formatting
  return content
    .replace(/\s*{\s*/g, ' {\n  ')
    .replace(/\s*}\s*/g, '\n}\n')
    .replace(/;\s*/g, ';\n  ')
    .replace(/\n\s*\n/g, '\n\n');
}

function formatTypeScript(content) {
  // TypeScript formatting (similar to JavaScript)
  return formatJavaScript(content);
}

function formatVue(content) {
  // Basic Vue formatting
  return content
    .replace(/<template>/g, '<template>\n  ')
    .replace(/<\/template>/g, '\n</template>')
    .replace(/<script>/g, '<script>\n  ')
    .replace(/<\/script>/g, '\n</script>')
    .replace(/<style>/g, '<style>\n  ')
    .replace(/<\/style>/g, '\n</style>');
}

function formatCSS(content) {
  // Basic CSS formatting
  return content
    .replace(/\s*{\s*/g, ' {\n  ')
    .replace(/\s*}\s*/g, '\n}\n')
    .replace(/;\s*/g, ';\n  ')
    .replace(/\n\s*\n/g, '\n\n');
}

function formatHTML(content) {
  // Basic HTML formatting
  return content
    .replace(/>\s*</g, '>\n<')
    .replace(/\n\s*\n/g, '\n\n');
}

const transport = new StdioServerTransport();
server.connect(transport);

console.error('Code MCP server started'); 
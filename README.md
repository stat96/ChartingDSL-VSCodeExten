# ChartingDSL VS Code Extension

This extension provides syntax highlighting, code completion, and chart preview for ChartingDSL `.dsl` files in Visual Studio Code.

## Features
- Syntax highlighting for ChartingDSL keywords and structure
- Code completion for chart types, overlays, and style options
- Command to preview charts directly from DSL files
- Error diagnostics for invalid DSL syntax
- Support for multi-chart files and advanced chart types

## Installation
1. Open Visual Studio Code.
2. Open the folder `C:\PLProjects\CharingDSLVSCodeExtension`.
3. Run `npm install` in the extension folder to install dependencies.
4. Press `F5` to launch the extension in a new Extension Development Host window.
5. To install the extension permanently, run:
   ```bash
   vsce package
   code --install-extension <generated-vsix-file>
   ```

## Usage
- Open any `.dsl` file containing ChartingDSL code.
- Syntax highlighting and code completion will be enabled automatically.
- Use the command palette (`Ctrl+Shift+P`) and select `ChartingDSL: Preview Chart` to render the chart defined in the DSL file.
- Errors in DSL syntax will be shown in the Problems panel.

## Extension Development
- The extension is written in TypeScript using the VS Code Extension API.
- To add new chart types or overlays, update the language grammar and completion provider in `src/`.
- For chart preview, integrate with the ChartingDSL Python backend or use a webview for rendering.

## Troubleshooting
- Ensure all dependencies are installed with `npm install`.
- If preview does not work, check the Problems panel for errors.
- For advanced chart rendering, ensure the backend is accessible and configured.

## References
- [VS Code Extension API](https://code.visualstudio.com/api)
- [ChartingDSL Documentation](../ChartingDSL/README.md)

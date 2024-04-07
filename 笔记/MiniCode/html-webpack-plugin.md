```js
const { Compilation, Compiler } = require("webpack");
// MyHtmlWebpackPlugin.js
const fs = require("fs");
const path = require("path");

class HtmlWebpackPlugin {
	constructor(options) {
		this.options = options || {};
	}

	apply(compiler) {
		compiler.hooks.emit.tapAsync(
			"HtmlWebpackPlugin",
			(compilation, callback) => {
				const html = this.generateHtml(compilation);
				const outputPath = path.join(
					compilation.options.output.path,
					"index.html"
				);

				compilation.assets["index.html"] = {
					source: () => html,
					size: () => html.length,
				};

				fs.writeFile(outputPath, html, callback);
			}
		);
	}

	generateHtml(compilation) {
		const assets = compilation.getAssets().map((asset) => asset.name);
    const cssAssets = assets.filter((asset) => asset.endsWith('.css'));
    const jsAssets = assets.filter((asset) => asset.endsWith('.js'));
		const title = this.options.title || "My App";

		console.log("assets", assets)

		return `
		<!DOCTYPE html>
		<html>
			<head>
				<meta charset="UTF-8">
				<title>${title}</title>
				${cssAssets.map((asset) => `<link rel="stylesheet" href="${asset}">`).join('\n')}
			</head>
			<body>
				${jsAssets.map((asset) => `<script src="${asset}"></script>`).join('\n')}
			</body>
		</html>
    `;
	}
}

module.exports = HtmlWebpackPlugin;
```

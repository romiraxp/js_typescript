//touch eslint.config.js;
// If your project does not specify "type":"module" in its package.json file, then eslint.config.js must be in CommonJS format, such as:

// eslint.config.js MODULE CONFIG
/*import { defineConfig } from "eslint/config";

export default defineConfig([
	{
		rules: {
			semi: "error",
			"prefer-const": "error",
		},
	},

	{
		ignores: [
			"tests/*",
			"dist/*",
			"coverage/*"
			],
		rules: {
			"no-console": "error",
		},
	},
]);*/

// eslint.config.js COMMONJS CONFIG
const { defineConfig } = require("eslint/config");

module.exports = defineConfig([
	{
      	ignores: [
			"dist/*",
			"coverage/"
		], // acts as global ignores, due to the absence of other properties
		rules: {
			semi: "error",
			"prefer-const": "error",
		},
	},
]);


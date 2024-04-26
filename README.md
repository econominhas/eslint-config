<div align="center">

<img src="https://avatars.githubusercontent.com/u/120692541?s=200&v=4" width="200" height="200">

# Econominhas - Style Guide

[![Style Guide: Econominhas](https://img.shields.io/badge/style%20guide-ECONOMINHAS-4B00FA?style=for-the-badge)](https://github.com/econominhas/eslint-config)
[![npm](https://img.shields.io/npm/v/@econominhas/eslint-config.svg?style=for-the-badge&color=CC3534)](https://www.npmjs.com/package/@econominhas/eslint-config)
[![Downloads](https://img.shields.io/npm/dw/@econominhas/eslint-config.svg?style=for-the-badge)](https://www.npmjs.com/package/@econominhas/eslint-config)

</div>

In this package, you can find the **Econominhas Style Guide**. We try to keep a clean and consistent code style, with modern features and using best practices.

## Badges

[![plastic](https://img.shields.io/badge/style%20guide-Econominhas-4B00FA?style=plastic)](https://github.com/econominhas/eslint-config)

```md
[![Style Guide: Econominhas](https://img.shields.io/badge/style%20guide-Econominhas-4B00FA?style=plastic)](https://github.com/econominhas/eslint-config)
```

[![flat](https://img.shields.io/badge/style%20guide-Econominhas-4B00FA?style=flat)](https://github.com/econominhas/eslint-config)

```md
[![Style Guide: Econominhas](https://img.shields.io/badge/style%20guide-Econominhas-4B00FA?style=flat)](https://github.com/econominhas/eslint-config)
```

[![square](https://img.shields.io/badge/style%20guide-Econominhas-4B00FA?style=square)](https://github.com/econominhas/eslint-config)

```md
[![Style Guide: Econominhas](https://img.shields.io/badge/style%20guide-Econominhas-4B00FA?style=square)](https://github.com/econominhas/eslint-config)
```

[![for-the-badge](https://img.shields.io/badge/style%20guide-Econominhas-4B00FA?style=for-the-badge)](https://github.com/econominhas/eslint-config)

```md
[![Style Guide: Econominhas](https://img.shields.io/badge/style%20guide-Econominhas-4B00FA?style=for-the-badge)](https://github.com/econominhas/eslint-config)
```

## Why use this config?

- Best practices focused in modern features and principles (SOLID, DRY, KISS, Clean Code)
- Constant maintenance
- More complete: Includes more features than other configs, like AirBnB
- Ready-to-go: You don't need any extra config
- Bye bye prettier: You don't need to be using the prettier extension for VSCode

## Install

This config needs prettier and eslint to work, as it is only a config and not the real package.

```sh
pnpm add -D @econominhas/eslint-config eslint prettier
```

**Obs:** If you are using **VSCode**, you may need/want to do some [extra steps](#extra---vscode-tips--tricks).

## Basic Usage

1 - Create a `.eslintrc.js` file in the root of your project

2 - Put the following content inside the file:

```js
module.exports = {
	root: true,
	extends: "@econominhas",
};
```

3 - Restart VSCode, and it's done!

## Modules

**Alert:** After any change at `.eslintrc.js` file, you should restart VSCode to ensure that it's working properly. This is a limitation of ESLint/VSCode, not our config.

**Alert:** The **common module** must **ALWAYS** be extend, and must **ALWAYS** be the fist one.

This repository contains the best practices divided by libs, frameworks and tools. The currently existent modules are:

<!--  -->
<!--  -->
<!--  -->

<details>

<summary><strong>Common</strong></summary>

The common module is the default rules used by every javascript project. It doesn't contains any special config for frameworks, backend, frontend or npm package. **You must import this module if you want to use any of the other modules of this package.**

#### Usage

Create an `.eslintrc.js` file in the root folder of your package and add this content to it:

```js
module.exports = {
	root: true,
	extends: "@econominhas",
};
```

</details>

<!--  -->
<!--  -->
<!--  -->

<details>

<summary><strong>Jest</strong></summary>

Specific configs to projects that uses Jest.

#### Usage

Create an `.eslintrc.js` file in the root folder of your package and add this content to it:

```js
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-require-imports */

module.exports = {
	root: true,
	extends: [
		"@econominhas", // The common module always should be extended!
		"@econominhas/eslint-config/jest",
	],
	settings: {
		jest: {
			version: require("jest/package.json").version,
		},
	},
};
```

</details>

<!--  -->
<!--  -->
<!--  -->

<details>

<summary><strong>TypeScript</strong></summary>

Specific configs for typescript projects.

#### Usage

Create an `.eslintrc.js` file in the root folder of your package and add this content to it:

```js
module.exports = {
	root: true,
	extends: [
		"@econominhas", // The common module always should be extended!
		"@econominhas/eslint-config/typescript",
	],
};
```

#### Using another `tsconfig` for linting

By default, this module uses `tsconfig.json` file for configuring the typescript for the project, but you can use another file specifically for linting.

To use another file, simply add this to your `.eslintrc.js` file:

```js
/// .eslintrc.js
module.exports = {
	// ...
	parserOptions: {
		project: "tsconfig.lint.json", // <<< Name of the tsconfig file here (Must be in the root folder of the project)
	},
	// ...
};
```

</details>

## Combining Modules

You can safely combine some modules, like this:

```js
module.exports = {
	root: true,
	extends: [
		"@econominhas", // The common module always should be extended!
		"@econominhas/eslint-config/typescript",
		"@econominhas/eslint-config/jest",
	],
};
```

## Extra - VSCode Tips & Tricks

### See the errors and warnings

<img src="https://dbaeumer.gallerycdn.vsassets.io/extensions/dbaeumer/vscode-eslint/3.0.5/1712051003124/Microsoft.VisualStudio.Services.Icons.Default" width="50" height="50">

- Go to the VSCode Extensions Store
- Search for `dbaeumer.vscode-eslint` and install it

### Auto fix (most of) errors and warnings

**Obs:** You need to have the ESLint extension installed.

Add this to the project's `.vscode/settings.json` file:

```json
{
	// Make ESLint fix all the things that he can on save (like prettier formatting)
	"editor.codeActionsOnSave": {
		"source.fixAll.eslint": "always"
	},

	// Remove formatter to avoid conflicts
	"[javascript]": {
		"editor.defaultFormatter": null
	},
	"[typescript]": {
		"editor.defaultFormatter": null
	},
	"[javascriptreact]": {
		"editor.defaultFormatter": null
	},
	"[typescriptreact]": {
		"editor.defaultFormatter": null
	}
}
```

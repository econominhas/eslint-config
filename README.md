<div align="center">

> Img

# Econominhas - Style Guide

[![Style Guide: Econominhas](https://img.shields.io/badge/style%20guide-ECONOMINHAS-01d2ce?style=for-the-badge)](https://github.com/econominhas/eslint-config)
[![npm](https://img.shields.io/npm/v/@econominhas/eslint-config.svg?style=for-the-badge&color=CC3534)](https://www.npmjs.com/package/@econominhas/eslint-config)
[![Downloads](https://img.shields.io/npm/dw/@econominhas/eslint-config.svg?style=for-the-badge)](https://www.npmjs.com/package/@econominhas/eslint-config)

</div>

In this package, you can find the **Econominhas Style Guide**. We try to keep a clean and consistent code style, with modern features and using best practices.

## Badges

[![plastic](https://img.shields.io/badge/style%20guide-Econominhas-01d2ce?style=plastic)](https://github.com/econominhas/eslint-config)

```md
[![Style Guide: Econominhas](https://img.shields.io/badge/style%20guide-Econominhas-01d2ce?style=plastic)](https://github.com/econominhas/eslint-config)
```

[![flat](https://img.shields.io/badge/style%20guide-Econominhas-01d2ce?style=flat)](https://github.com/econominhas/eslint-config)

```md
[![Style Guide: Econominhas](https://img.shields.io/badge/style%20guide-Econominhas-01d2ce?style=flat)](https://github.com/econominhas/eslint-config)
```

[![square](https://img.shields.io/badge/style%20guide-Econominhas-01d2ce?style=square)](https://github.com/econominhas/eslint-config)

```md
[![Style Guide: Econominhas](https://img.shields.io/badge/style%20guide-Econominhas-01d2ce?style=square)](https://github.com/econominhas/eslint-config)
```

[![for-the-badge](https://img.shields.io/badge/style%20guide-TECHMMUNITY-01d2ce?style=for-the-badge)](https://github.com/econominhas/eslint-config)

```md
[![Style Guide: Econominhas](https://img.shields.io/badge/style%20guide-TECHMMUNITY-01d2ce?style=for-the-badge)](https://github.com/econominhas/eslint-config)
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
yarn add -D @econominhas/eslint-config eslint prettier
```

**Obs:** If you are using **VSCode**, you may need/want to do some [extra steps](#extra---vscode-tips--tricks).

## Basic Usage

1 - Create a `.eslintrc.json` file in the root of your project

2 - Put the following content inside the file:

```json
{
	"root": true,
	"extends": "@econominhas"
}
```

3 - Restart VSCode, and it's done!

## Modules

**Alert:** After any change at `.eslintrc.json` file, you should restart VSCode to ensure that it's working properly. This is a limitation of ESLint/VSCode, not our config.

**Alert:** The **common module** must **ALWAYS** be extend, and must **ALWAYS** be the fist one.

This repository contains the best practices divided by libs, frameworks and tools. The currently existent modules are:

<!--  -->
<!--  -->
<!--  -->

<details>

<summary><strong>Common</strong></summary>

The common module is the default rules used by every javascript project. It doesn't contains any special config for frameworks, backend, frontend or npm package. **You must import this module if you want to use any of the other modules of this package.**

#### Usage

Create an `.eslintrc.json` file in the root folder of your package and add this content to it:

```json
{
	"root": true,
	"extends": "@econominhas"
}
```

</details>

<!--  -->
<!--  -->
<!--  -->

<details>

<summary><strong>Jest</strong></summary>

Specific configs to projects that uses Jest.

#### Usage

Create an `.eslintrc.json` file in the root folder of your package and add this content to it:

```json
{
	"root": true,
	"extends": [
		"@econominhas", // The common module always should be extended!
		"@econominhas/eslint-config/jest"
	]
}
```

</details>

<!--  -->
<!--  -->
<!--  -->

<details>

<summary><strong>TypeScript</strong></summary>

Specific configs for typescript projects.

#### Usage

Create an `.eslintrc.json` file in the root folder of your package and add this content to it:

```json
{
	"root": true,
	"extends": [
		"@econominhas", // The common module always should be extended!
		"@econominhas/eslint-config/typescript"
	]
}
```

</details>

## Combining Modules

You can safely combine some modules, like this:

```json
{
	"root": true,
	"extends": [
		"@econominhas", // The common module always should be extended!
		"@econominhas/eslint-config/typescript",
		"@econominhas/eslint-config/jest"
	]
}
```

## Warnings

### Problems with Prettier

If you are using the VSCode Prettier Extension, you need to disable it, because this package already configs the prettier and uses it under the hood. You can also **delete any prettier configuration files** from your project.

To disable Prettier, you just need to add this to the project's `.vscode/settings.json` file:

```json
{
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

## Extra - VSCode Tips & Tricks

### See the errors and warnings

- Use `Ctrl + Shift + X`
- Search for `dbaeumer.vscode-eslint`
- Install the extension

### Auto fix issues

Add this to the project's `.vscode/settings.json` file:

```json
// Make ESLint fix all the things that he can on save (like prettier formatting)
"editor.codeActionsOnSave": {
	"source.fixAll.eslint": true
},
```

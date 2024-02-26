/* eslint-disable no-magic-numbers */

/*
 * @rushstack/eslint-patch is used to include plugins as dev
 * dependencies instead of imposing them as peer dependencies
 *
 * https://www.npmjs.com/package/@rushstack/eslint-patch
 */
require("@rushstack/eslint-patch/modern-module-resolution");
require("@rushstack/eslint-patch/custom-config-package-names");

module.exports = {
	plugins: ["import", "sonarjs", "filenames", "prettier"],
	extends: ["eslint:recommended", "plugin:prettier/recommended", "prettier"],
	settings: {
		"import/resolver": {
			[require.resolve("eslint-import-resolver-node")]: {
				extensions: [".js", ".jsx", ".ts", ".tsx"],
			},
		},
	},
	parser: "@babel/eslint-parser",
	parserOptions: {
		requireConfigFile: false,
		sourceType: "module",
		allowImportExportEverywhere: true,
	},
	overrides: [
		{
			files: ["**/migrations/*.{js,ts}"],
			rules: {
				/**
				 * Plugin - Filename
				 *
				 * https://github.com/selaux/eslint-plugin-filenames#rules
				 */
				"filenames/match-regex": "off",
			},
		},
		{
			files: ["**/*.spec.{js,ts}", "**/*.test.{js,ts}"],
			rules: {
				"no-magic-numbers": "off",
			},
		},
		{
			files: ["**/*.js"],
			rules: {
				"import/no-commonjs": "off",
			},
		},
	],
	env: {
		browser: true,
		es2024: true,
		node: true,
	},
	rules: {
		/**
		 * Possible Problems
		 *
		 * https://eslint.org/docs/latest/rules/#possible-problems
		 */
		"no-await-in-loop": "error",
		"no-constant-binary-expression": "error",
		"no-constructor-return": "error",
		"no-duplicate-imports": "error",
		"no-new-native-nonconstructor": "error",
		"no-promise-executor-return": "error",
		"no-self-compare": "error",
		"no-template-curly-in-string": "warn",
		"no-unmodified-loop-condition": "warn",
		"no-unreachable-loop": "error",
		"no-unused-private-class-members": "error",
		"no-use-before-define": "error",
		"require-atomic-updates": "error",
		/**
		 * Suggestions
		 *
		 * https://eslint.org/docs/latest/rules/#suggestions
		 */
		"arrow-body-style": "error",
		"block-scoped-var": "error",
		"camelcase": [
			"error",
			{
				properties: "always",
				ignoreDestructuring: true,
				ignoreImports: true,
			},
		],
		"capitalized-comments": "error",
		"complexity": ["error", 10],
		"curly": ["error", "all"],
		"default-case": "error",
		"default-case-last": "error",
		"default-param-last": "error",
		"dot-notation": "error",
		"eqeqeq": "error",
		"func-style": [
			"error",
			"declaration",
			{
				allowArrowFunctions: true,
			},
		],
		"grouped-accessor-pairs": ["error", "setBeforeGet"],
		"logical-assignment-operators": "error",
		"max-lines": [
			"error",
			{
				max: 1000,
				skipBlankLines: true,
				skipComments: true,
			},
		],
		"max-depth": ["error", 5],
		"max-nested-callbacks": ["error", 3],
		"max-params": ["error", 5],
		"multiline-comment-style": ["error", "starred-block"],
		"new-cap": "error",
		"no-bitwise": "error",
		"no-caller": "error",
		"no-case-declarations": "error",
		"no-console": "error",
		"no-eq-null": "error",
		"no-eval": "error",
		"no-extend-native": "error",
		"no-extra-bind": "error",
		"no-implied-eval": "error",
		"no-invalid-this": "error",
		"no-iterator": "error",
		"no-labels": "error",
		"no-lone-blocks": "error",
		"no-magic-numbers": [
			"warn",
			{
				ignore: [0, 1],
			},
		],
		"no-multi-assign": "error",
		"no-negated-condition": "warn",
		"no-new-func": "error",
		"no-new-wrappers": "error",
		"no-proto": "error",
		"no-object-constructor": "error",
		"no-return-assign": "error",
		"no-sequences": "error",
		"no-shadow": "error",
		"no-throw-literal": "error",
		"no-unneeded-ternary": "error",
		"no-unused-expressions": "error",
		"no-useless-computed-key": "error",
		"no-useless-concat": "error",
		"no-useless-constructor": "error",
		"no-useless-rename": "error",
		"no-var": "error",
		"object-shorthand": "error",
		"one-var": ["error", "never"],
		"prefer-arrow-callback": "error",
		"prefer-const": "error",
		"prefer-destructuring": "error",
		"prefer-regex-literals": "error",
		"prefer-rest-params": "error",
		"prefer-spread": "error",
		"prefer-template": "error",
		"radix": ["error", "as-needed"],
		"require-await": "error",
		"sort-imports": "error",
		"symbol-description": "error",
		"yoda": "error",
		/**
		 * Plugin - Prettier
		 *
		 * https://github.com/prettier/eslint-plugin-prettier
		 * https://prettier.io/docs/en/configuration.html
		 */
		"prettier/prettier": [
			"error",
			{
				trailingComma: "all",
				tabWidth: 2,
				useTabs: true,
				singleQuote: false,
				arrowParens: "avoid",
				semi: true,
				bracketSpacing: true,
				endOfLine: "lf",
				quoteProps: "consistent",
				overrides: [
					{
						files: ["*.yml", "*.yaml"],
						options: {
							useTabs: false,
						},
					},
				],
			},
		],
		/**
		 * Plugin - Import
		 *
		 * https://www.npmjs.com/package/eslint-plugin-import
		 */
		// Helpful warnings - https://www.npmjs.com/package/eslint-plugin-import#helpful-warnings
		"import/export": "error",
		"import/no-deprecated": "error",
		"import/no-empty-named-blocks": "error",
		"import/no-mutable-exports": "error",
		"import/no-named-as-default-member": "error",
		// Module systems - https://www.npmjs.com/package/eslint-plugin-import#module-systems
		"import/no-amd": "error",
		"import/no-commonjs": "error",
		// Static analysis - https://www.npmjs.com/package/eslint-plugin-import#static-analysis
		"import/named": "error",
		"import/no-cycle": "error",
		"import/no-dynamic-require": "error",
		"import/no-self-import": "error",
		"import/no-unresolved": "error",
		"import/no-useless-path-segments": "error",
		"import/no-webpack-loader-syntax": "error",
		// Style guide - https://www.npmjs.com/package/eslint-plugin-import#style-guide
		"import/consistent-type-specifier-style": ["error", "prefer-inline"],
		"import/first": "error",
		"import/newline-after-import": "error",
		"import/no-duplicates": ["error", { "prefer-inline": true }],
		"import/order": [
			"error",
			{
				groups: [
					"builtin",
					"external",
					"internal",
					"parent",
					"sibling",
					"index",
					"object",
					"type",
				],
			},
		],
		/**
		 * Plugin - SonarJs
		 *
		 * https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules
		 * https://www.npmjs.com/package/eslint-plugin-sonarjs
		 */
		"sonarjs/cognitive-complexity": ["error", 15],
		"sonarjs/no-all-duplicated-branches": "error",
		"sonarjs/no-collapsible-if": "error",
		"sonarjs/no-collection-size-mischeck": "error",
		"sonarjs/no-duplicate-string": ["error", { threshold: 5 }],
		"sonarjs/no-duplicated-branches": "error",
		"sonarjs/no-element-overwrite": "error",
		"sonarjs/no-empty-collection": "error",
		"sonarjs/no-extra-arguments": "error",
		"sonarjs/no-gratuitous-expressions": "error",
		"sonarjs/no-identical-conditions": "error",
		"sonarjs/no-identical-functions": "error",
		"sonarjs/no-ignored-return": "error",
		"sonarjs/no-inverted-boolean-check": "error",
		"sonarjs/no-nested-switch": "error",
		"sonarjs/no-one-iteration-loop": "error",
		"sonarjs/no-redundant-boolean": "error",
		"sonarjs/no-redundant-jump": "error",
		"sonarjs/no-same-line-conditional": "error",
		"sonarjs/no-unused-collection": "error",
		"sonarjs/no-use-of-empty-return-value": "error",
		"sonarjs/no-useless-catch": "error",
		"sonarjs/non-existent-operator": "error",
		"sonarjs/prefer-immediate-return": "error",
		"sonarjs/prefer-object-literal": "error",
		"sonarjs/prefer-single-boolean-return": "error",
		"sonarjs/prefer-while": "error",
		/**
		 * Plugin - Filename
		 *
		 * https://github.com/selaux/eslint-plugin-filenames#rules
		 */
		"filenames/match-regex": ["error", "^[a-z0-9-]+$", true],
	},
};

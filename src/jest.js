module.exports = {
	plugins: ["jest-formatting", "jest"],
	extends: ["plugin:jest/recommended", "plugin:jest/style"],
	env: {
		jest: true,
	},
	overrides: [
		{
			files: ["**/*.{spec,test}.{ts,js}"],
			rules: {
				/**
				 * Plugin - Jest
				 *
				 * https://github.com/jest-community/eslint-plugin-jest/tree/main/docs/rules
				 */
				"jest/consistent-test-it": ["error", { fn: "it" }],
				"jest/max-nested-describe": ["error", { max: 2 }],
				"jest/no-conditional-in-test": "error",
				"jest/no-confusing-set-timeout": "error",
				"jest/no-duplicate-hooks": "error",
				"jest/no-restricted-jest-methods": [
					"error",
					{ spyOn: "Don't use spies, inject the dependency and use a mock" },
				],
				"jest/no-test-return-statement": "error",
				"jest/prefer-comparison-matcher": "error",
				"jest/prefer-each": "error",
				"jest/prefer-equality-matcher": "error",
				"jest/prefer-expect-resolves": "error",
				"jest/prefer-hooks-in-order": "error",
				"jest/prefer-hooks-on-top": "error",
				"jest/prefer-lowercase-title": ["error", { ignore: ["describe"] }],
				"jest/prefer-mock-promise-shorthand": "error",
				"jest/prefer-strict-equal": "error",
				"jest/prefer-todo": "error",
				"jest/require-hook": "error",
				"jest/require-to-throw-message": "error",
				"jest/require-top-level-describe": [
					"error",
					{
						maxNumberOfTopLevelDescribes: 2,
					},
				],
				/**
				 * Plugin - Jest Formatting
				 *
				 * https://github.com/dangreenisrael/eslint-plugin-jest-formatting/tree/master/docs/rules
				 */
				"jest-formatting/padding-around-all": "error",
			},
		},
	],
};

/**

 * @type {import("@types/eslint").Linter.BaseConfig}
 */
module.exports = {
    extends: [
        '@remix-run/eslint-config',
        'plugin:hydrogen/recommended',
        'plugin:hydrogen/typescript',
    ],
    plugins: ['hydrogen'],
    parserOptions: {
        project: './tsconfig.json',
    },
    parser: '@typescript-eslint/parser',
    rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/naming-convention': 'off',
        'no-useless-escape': 'off',
        '@typescript-eslint/no-non-null-asserted-optional-chain': "error",
        'no-case-declarations': 'off',
        "no-non-null-assertion": "off",
        "@typescript-eslint/consistent-type-imports": "error",
        "@typescript-eslint/no-unused-expressions": "off",
        "no-unused-expressions": "off",
        "semi": "off",
        "no-console": "off",
        "prettier/prettier": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "@typescript-eslint/no-namespace": "off",
        "hydrogen/prefer-image-component": "off",
        "jsx-a11y/alt-text": "off",
        "jsx-a11y/no-noninteractive-element-interactions": "off",
    },
};
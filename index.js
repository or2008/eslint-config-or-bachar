module.exports = {
    globals: {
        MyGlobal: true
    },

    rules: {
        "comma-spacing": [2, { "before": false, "after": true }],
        "no-eval": 2,
        "no-multiple-empty-lines": [2, { "max": 2 }],
        "quotes": [2, "single"],
        "yoda": 2,
        "no-console": 1,
        "no-var": 2,
        "no-extra-parens": 2,
        "curly": [2, "multi-or-nest", "consistent"],
        "no-empty-function": [2, { "allow": ["arrowFunctions"] }],
        "func-style": [2, "declaration", { "allowArrowFunctions": true }],
        "arrow-body-style": [0, "as-needed"],
        "arrow-parens": [2, "as-needed"],
        "no-unused-vars": 2,
        "no-use-before-define": [2, { "functions": false, "classes": false }],
        "@typescript-eslint/no-use-before-define": [2, { "functions": false, "classes": false }],
        'no-console': ['warn', { allow: ['warn', 'error'] }],
        'eqeqeq': ['warn', 'always'],
        'prefer-const': ['error', { destructuring: 'all', ignoreReadBeforeAssign: true }],
        '@typescript-eslint/indent': ['error', 4, { VariableDeclarator: 4, SwitchCase: 1 }],
        '@typescript-eslint/no-unused-vars': 0,
        '@typescript-eslint/interface-name-prefix': 0,
        '@typescript-eslint/explicit-member-accessibility': 0,
        '@typescript-eslint/no-triple-slash-reference': 0,
        '@typescript-eslint/no-this-alias': 0,
        '@typescript-eslint/triple-slash-reference': ['error', { path: 'always', types: 'never', lib: 'never' }]
    }
};

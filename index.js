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
        "semi": 2,
        "no-var": 2,
        "no-extra-parens": 2,
        "curly": [2, "multi-or-nest", "consistent"],
        "no-empty-function": [2, {"allow": [ "arrowFunctions"]}],
        "func-style": [2,"declaration", { "allowArrowFunctions": true }],
        "arrow-body-style": [0, "as-needed"],
        "arrow-parens": [2, "as-needed"],
        "no-unused-vars": 2,
        "no-use-before-define": [2, { "functions": false }],
        "@typescript-eslint/no-use-before-define": [2, { "functions": false }]
    }

};

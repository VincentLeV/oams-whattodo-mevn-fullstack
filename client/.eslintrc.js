module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        "plugin:vue/vue3-essential",
        "@vue/airbnb",
    ],
    parserOptions: {
        parser: "babel-eslint",
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        indent: ["error", 4],
        "vue/no-multiple-template-root": "off",
        "vue/require-default-prop": 0,
        quotes: ["error", "double"],
        semi: ["error", "never"],
        "import/prefer-default-export": "off",
        "comma-dangle": 0,
        "no-trailing-spaces": 0,
        "linebreak-style": "off",
        "no-underscore-dangle": 0,
        "no-param-reassign": 0,
        "no-alert": 0
    },
}

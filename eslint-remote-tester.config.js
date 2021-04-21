const { getRepositories, getPathIgnorePattern } = require("eslint-remote-tester-repositories");

/** @type {import('eslint-remote-tester/dist/config/types').Config} */
module.exports = {
  repositories: [
    "AriPerkkio/eslint-remote-tester-integration-test-target",
    getRepositories({ randomize: true }).slice(0, 2),
  ],
  pathIgnorePattern: getPathIgnorePattern(),
  extensions: [".js"],
  rulesUnderTesting: ["local-rules/no-foo"],
  compare: true,
  CI: false,
  eslintrc: {
    root: true,
    plugins: ["eslint-plugin-local-rules"],
    rules: {
      "local-rules/no-foo": "error",
    },
  },
};

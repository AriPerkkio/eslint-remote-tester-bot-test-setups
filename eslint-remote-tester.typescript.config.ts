import type { Config } from "eslint-remote-tester";

import {
  getRepositories,
  getPathIgnorePattern,
} from "eslint-remote-tester-repositories";

const config: Config = {
  repositories: [
    "AriPerkkio/eslint-remote-tester-integration-test-target",
    ...getRepositories({ randomize: true }).slice(0, 2),
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

export default config;

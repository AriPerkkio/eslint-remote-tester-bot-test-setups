import type { Config } from "eslint-remote-tester";
import { FlatCompat } from "@eslint/eslintrc";

import {
  getRepositories,
  getPathIgnorePattern,
} from "eslint-remote-tester-repositories";

console.log("Typescript config loaded");
const compat = new FlatCompat({ baseDirectory: process.cwd() });

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
  eslintConfig: [
    ...compat.plugins("eslint-plugin-local-rules"),
    { rules: { "local-rules/no-foo": "error" } },
  ],
};

export default config;

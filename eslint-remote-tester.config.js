import { FlatCompat } from "@eslint/eslintrc";
import {
  getRepositories,
  getPathIgnorePattern,
} from "eslint-remote-tester-repositories";

const compat = new FlatCompat({ baseDirectory: process.cwd() });

/** @type {import('eslint-remote-tester').Config} */
const config = {
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

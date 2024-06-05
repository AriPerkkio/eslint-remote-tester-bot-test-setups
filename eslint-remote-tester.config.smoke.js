import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({ baseDirectory: process.cwd() });
console.log("Smoke test config");

/** @type {import('eslint-remote-tester').Config} */
const config = {
  repositories: ["AriPerkkio/eslint-remote-tester-integration-test-target"],
  extensions: [".js"],
  rulesUnderTesting: ["local-rules/no-foo"],
  eslintConfig: [
    ...compat.plugins("eslint-plugin-local-rules"),
    { rules: { "local-rules/no-foo": "error" } },
  ],
  onComplete: async function onComplete(
    results,
    comparisonResults,
    repositoryCount
  ) {
    console.log("Smoke test onComplete");
    console.log(`${results.length} results`);
    console.log(`${Boolean(comparisonResults)} comparisonResults`);
    console.log(`${repositoryCount} repositoryCount`);

    console.log("Sleeping 5s");
    await new Promise((r) => setTimeout(r, 5000));
    console.log("Done");
  },
};

export default config;

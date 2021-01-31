/** @type {import('eslint-remote-tester/dist/config/types').Config} */
module.exports = {
    repositories: ['AriPerkkio/eslint-remote-tester-integration-test-target'],
    extensions: ['.js'],
    rulesUnderTesting: ['local-rules/no-foo'],
    compare: true,
    CI: false,
    eslintrc: {
        root: true,
        plugins: ['eslint-plugin-local-rules'],
        rules: {
            'local-rules/no-foo': 'error',
        },
    },
};

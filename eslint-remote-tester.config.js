module.exports = {
    repositories: ['AriPerkkio/eslint-remote-tester-integration-test-target'],
    extensions: ['.js'],
    rulesUnderTesting: ['local-rules/no-foo'],
    compare: true,
    eslintrc: {
        root: true,
        plugins: ['eslint-plugin-local-rules'],
        rules: {
            'local-rules/no-foo': 'error',
        },
    },
    CI: false,
};

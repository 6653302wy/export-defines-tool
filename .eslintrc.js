module.exports = {
    extends: ['@shm-open/eslint-config-bundle'],
    plugins: ['react-hooks'],
    rules: {
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
    },
};

module.exports = function (config) {
  config.set({
    mutator: 'typescript',
    packageManager: 'npm',
    reporters: ['clear-text', 'progress'],
    testRunner: 'jest',
    coverageAnalysis: 'off',
    mutate: ['src/**/*.ts'],
  });
};

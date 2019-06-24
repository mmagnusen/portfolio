module.exports = {
    verbose: true,
    coverageDirectory: 'coverage',
    collectCoverage: true,
    collectCoverageFrom: [
      'src/**/*.{js,jsx}',
      '!**/node_modules/**',
    ],
    roots: [
      'component',
      '__tests__',
    ],
    moduleNameMapper: {
      'context/(.*)$': '<rootDir>/resources/context/$1',
      '@store': '<rootDir>/store/index.js',
      '@consts': '<rootDir>/constants/index.js',
      '@locale/(.*)': '<rootDir>/locale/$1',
      '\\.(css|scss|svg|less|png)$': 'identity-obj-proxy',
    },
    testPathIgnorePatterns: ['node_modules', '.cache'],
    transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
    globals: {
      __PATH_PREFIX__: '',
    },
  };
  
// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  testEnvironment: 'node',
  clearMocks: true,
  coveragePathIgnorePatterns: ['<rootDir>/tools/', '<rootDir>/node_modules/'],
  coverageReporters: ['text', 'text-summary'],
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
  transform: { '^.+\\.[t|j]sx?$': 'babel-jest' },
  testPathIgnorePatterns: ['/node_modules/'],
  coverageThreshold: {
    global: {
      statements: 83,
      branches: 64,
      lines: 84,
      functions: 75
    }
  }
};

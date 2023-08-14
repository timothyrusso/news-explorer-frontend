module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  testMatch: ['<rootDir>/src/**/*.(test|spec).(ts|tsx)'],
  testEnvironment: 'jsdom',
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};

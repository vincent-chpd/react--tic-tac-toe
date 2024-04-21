module.exports = {
  testEnvironment: "jsdom",
  moduleDirectories: [
    'node_modules'
  ],
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "identity-obj-proxy"
  },
  setupFilesAfterEnv: [
    "<rootDir>/setupTests.js"
  ]
}

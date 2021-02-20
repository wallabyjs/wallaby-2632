module.exports = {
  roots: ["<rootDir>"],
  collectCoverageFrom: ["src/**/*", "!**/test/**/*", "!**/*.snap", "!**/main.js", "!src/ts/**/*", "!src/server/debug/**/*"],
  moduleFileExtensions: ["js", "svelte", "ts"],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  testMatch: ["**/**/*.spec.*", "!**/*.snap"],
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.svelte$": "jest-transform-svelte",
    "^.+\\.tsx?$": "ts-jest"
  }
};
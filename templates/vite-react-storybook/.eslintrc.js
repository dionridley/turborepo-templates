module.exports = {
  root: true,
  extends: ["@repo/eslint-config"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
  ignorePatterns: ["apps/**", "packages/**"],
  // This configuration only applies to the root of the repo
};
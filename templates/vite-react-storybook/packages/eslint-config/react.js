module.exports = {
  extends: ["./index.js", "plugin:react/recommended", "plugin:react-hooks/recommended"],
  plugins: ["react", "react-hooks"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/jsx-no-target-blank": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
};
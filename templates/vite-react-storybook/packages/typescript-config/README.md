# @repo/typescript-config

Shared TypeScript configurations for the monorepo.

## Usage

In your `tsconfig.json`:

```json
{
  "extends": "@repo/typescript-config/react.json",
  "include": ["src"],
  "exclude": ["node_modules"]
}
```
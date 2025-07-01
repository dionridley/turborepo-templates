# Vite + React + Storybook Turborepo Template

This is a modern monorepo template using:
- **Vite 7** for fast development
- **React 19.1** with TypeScript
- **Storybook 9** for component development
- **Tailwind CSS 4** for styling
- **Turborepo** for monorepo management
- **pnpm** for package management

## Getting Started

```bash
pnpm install
pnpm dev
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `apps/web`: a Vite + React app
- `apps/storybook`: a Storybook app for component development
- `packages/ui`: a React component library shared by applications
- `packages/eslint-config`: `eslint` configurations
- `packages/typescript-config`: `tsconfig.json`s used throughout the monorepo

### Utilities

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run:

```bash
pnpm build
```

### Develop

To develop all apps and packages, run:

```bash
pnpm dev
```
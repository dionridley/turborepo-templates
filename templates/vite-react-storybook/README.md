# Vite + React + Storybook Turborepo Template

A modern, production-ready monorepo template featuring the latest versions of:

- **⚡ Vite 7** - Next generation frontend tooling
- **⚛️ React 19.1** - Latest React with new features
- **📖 Storybook 9** - Component development and documentation
- **🎨 Tailwind CSS 4** - Utility-first CSS framework
- **🏗️ TurboRepo 2.5** - High-performance build system
- **📦 pnpm 10** - Fast, disk space efficient package manager
- **🔷 TypeScript 5.8** - Static type checking
- **🔍 ESLint + Prettier** - Code quality and formatting

## Quick Start

```bash
# Install dependencies
pnpm install

# Start development servers
pnpm dev

# Open applications
# Web app: http://localhost:3000
# Storybook: http://localhost:6006
```

## What's Inside?

### Apps

- **`apps/web`** - Vite + React app demonstrating the UI components
- **`apps/storybook`** - Component documentation and development environment

### Packages

- **`packages/ui`** - Shared React component library with TypeScript
- **`packages/eslint-config`** - Shared ESLint configurations
- **`packages/typescript-config`** - Shared TypeScript configurations

## Features

### 🚀 Performance
- **Vite 7** with optimized HMR and lightning-fast builds
- **Tailwind CSS 4** with new Vite plugin (no PostCSS needed)
- **TypeScript** project references for faster compilation

### 🎨 Developer Experience
- **Hot reload** across all packages and apps
- **Pre-commit hooks** with Husky and lint-staged
- **Consistent code style** with ESLint and Prettier
- **Type safety** throughout the monorepo

### 🧩 Component Development
- **Shared UI library** with tree-shakeable exports
- **Storybook** with accessibility testing and dark mode
- **TypeScript** definitions for all components

### 🔧 Modern Tooling
- **Node.js 20.19+** support with latest features
- **pnpm workspaces** for efficient dependency management
- **TurboRepo** for optimized builds and caching

## Available Scripts

```bash
# Development
pnpm dev              # Start all development servers
pnpm storybook        # Start Storybook only

# Production
pnpm build            # Build all packages and apps
pnpm preview          # Preview production builds

# Code Quality
pnpm lint             # Lint all packages
pnpm type-check       # Type check all packages
pnpm format           # Format code with Prettier

# Testing
pnpm test             # Run tests (when implemented)
```

## Package Scripts

Each package has its own scripts:

```bash
# Web app (apps/web)
cd apps/web
pnpm dev              # Start Vite dev server
pnpm build            # Build for production
pnpm preview          # Preview production build

# Storybook (apps/storybook)
cd apps/storybook
pnpm dev              # Start Storybook
pnpm build            # Build static Storybook

# UI Library (packages/ui)
cd packages/ui
pnpm build            # Compile TypeScript
pnpm dev              # Watch mode compilation
```

## Project Structure

```
├── apps/
│   ├── web/                  # Vite React application
│   │   ├── src/
│   │   ├── public/
│   │   ├── index.html
│   │   ├── vite.config.ts
│   │   └── package.json
│   └── storybook/            # Storybook application
│       ├── .storybook/
│       ├── stories/
│       └── package.json
├── packages/
│   ├── ui/                   # Shared component library
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── styles/
│   │   │   └── index.ts
│   │   └── package.json
│   ├── eslint-config/        # Shared ESLint configs
│   └── typescript-config/    # Shared TypeScript configs
├── package.json              # Root package.json
├── turbo.json               # TurboRepo configuration
├── pnpm-workspace.yaml      # pnpm workspace config
└── README.md
```

## Adding Components

1. **Create the component**:
   ```bash
   cd packages/ui/src/components
   mkdir MyComponent
   ```

2. **Add component files**:
   ```tsx
   // MyComponent/MyComponent.tsx
   export interface MyComponentProps {
     children: React.ReactNode;
   }
   
   export const MyComponent = ({ children }: MyComponentProps) => {
     return <div className="my-component">{children}</div>;
   };
   ```

3. **Export from index**:
   ```tsx
   // MyComponent/index.ts
   export { MyComponent, type MyComponentProps } from './MyComponent';
   ```

4. **Add to main exports**:
   ```tsx
   // packages/ui/src/index.ts
   export { MyComponent, type MyComponentProps } from './components/MyComponent';
   ```

5. **Create Storybook story**:
   ```tsx
   // apps/storybook/stories/MyComponent.stories.tsx
   import type { Meta, StoryObj } from '@storybook/react';
   import { MyComponent } from '@repo/ui';
   
   const meta: Meta<typeof MyComponent> = {
     title: 'Components/MyComponent',
     component: MyComponent,
   };
   
   export default meta;
   ```

## Requirements

- **Node.js** 20.19+ or 22.12+
- **pnpm** 10.12+ (recommended) or npm/yarn

## Tailwind CSS 4

This template uses Tailwind CSS 4 with the new architecture:

- **No PostCSS required** with Vite projects
- **CSS imports** instead of traditional config files
- **CSS custom properties** for theming
- **Faster compilation** and better performance

```css
/* Import Tailwind in your CSS */
@import "tailwindcss";

/* Custom theme using CSS variables */
@theme {
  --color-primary: #3b82f6;
}
```

## Browser Support

- **Safari** 16.4+
- **Chrome** 111+
- **Firefox** 128+

## Contributing

1. **Install dependencies**: `pnpm install`
2. **Create a branch**: `git checkout -b feature/my-feature`
3. **Make changes** and ensure tests pass
4. **Commit changes**: Pre-commit hooks will lint and format code
5. **Submit a pull request**

## License

MIT
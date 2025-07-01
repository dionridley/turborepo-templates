# TurboRepo Template: Vite + React + Storybook + TypeScript + Tailwind

## Overview

This template provides a modern monorepo setup using TurboRepo with:
- **Vite 7.0+** for fast development and building
- **React 19.1+** with latest features
- **TypeScript 5.8+** for type safety
- **Storybook 9.0+** for component development and documentation
- **Tailwind CSS 4.1+** for utility-first styling
- Shared configurations for TypeScript, ESLint, and Prettier
- Shared UI component library

## Monorepo Structure

```
templates/vite-react-storybook/
├── apps/
│   ├── web/                    # Main React application (Vite)
│   │   ├── src/
│   │   ├── index.html
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   ├── vite.config.ts
│   │   └── README.md
│   └── storybook/              # Storybook documentation app
│       ├── .storybook/
│       ├── stories/
│       ├── package.json
│       ├── tsconfig.json
│       └── README.md
├── packages/
│   ├── ui/                     # Shared UI component library
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   └── index.ts
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── README.md
│   ├── typescript-config/      # Shared TypeScript configurations
│   │   ├── base.json
│   │   ├── react.json
│   │   ├── package.json
│   │   └── README.md
│   └── eslint-config/          # Shared ESLint configurations
│       ├── index.js
│       ├── react.js
│       ├── package.json
│       └── README.md
├── package.json                # Root package.json with workspaces
├── turbo.json                  # TurboRepo configuration
├── pnpm-workspace.yaml         # PNPM workspace configuration
├── .gitignore
├── .npmrc
└── README.md
```

## Package Details

### 1. Root Configuration

**package.json**
```json
{
  "name": "vite-react-storybook-monorepo",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "dev": "turbo dev",
    "build": "turbo build",
    "lint": "turbo lint",
    "type-check": "turbo type-check",
    "test": "turbo test",
    "storybook": "turbo storybook",
    "format": "prettier --write \"**/*.{ts,tsx,js,jsx,json,md}\""
  },
  "devDependencies": {
    "prettier": "^3.3.3",
    "turbo": "^2.5.4"
  },
  "packageManager": "pnpm@10.12.4",
  "engines": {
    "node": ">=20.19.0"
  }
}
```

**turbo.json**
```json
{
  "$schema": "https://turbo.build/schema.json",
  "globalDependencies": ["**/.env.*local"],
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "!.next/cache/**", "dist/**"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "lint": {
      "dependsOn": ["^build"]
    },
    "type-check": {
      "dependsOn": ["^build"]
    },
    "test": {
      "dependsOn": ["build"]
    },
    "storybook": {
      "cache": false
    }
  }
}
```

### 2. Apps

#### apps/web (React + Vite App)

**Key Dependencies:**
- react: ^19.1.0
- react-dom: ^19.1.0
- @vitejs/plugin-react: ^4.3.4
- vite: ^7.0.0
- typescript: ^5.8.3
- tailwindcss: ^4.1.11
- @tailwindcss/vite: ^4.1.11

**Features:**
- Fast HMR with Vite
- TypeScript support
- Tailwind CSS configured
- Imports UI components from @repo/ui package
- Environment variable support
- Optimized production builds

**Note on TypeScript with React 19:**
- Install type definitions: `@types/react@^19.1.8` and `@types/react-dom@^19.0.0`

#### apps/storybook

**Key Dependencies:**
- @storybook/react: ^9.0.14
- @storybook/react-vite: ^9.0.14
- @storybook/addon-essentials: ^8.6.14
- @storybook/addon-themes: ^9.0.14
- @storybook/addon-a11y: ^9.0.12
- storybook: ^9.0.14

**Features:**
- Stories for all UI components
- Dark mode support with Tailwind
- Accessibility testing
- Interactive controls
- Auto-generated documentation
- Imports from @repo/ui package

### 3. Packages

#### packages/ui

**Structure:**
```
ui/
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.stories.tsx
│   │   │   └── index.ts
│   │   ├── Card/
│   │   ├── Input/
│   │   └── index.ts
│   ├── hooks/
│   │   ├── useTheme.ts
│   │   └── index.ts
│   └── index.ts
├── tailwind.config.ts
└── package.json
```

**Key Features:**
- Shared component library
- TypeScript definitions
- Tailwind CSS for styling
- Tree-shakeable exports
- Component stories co-located

#### packages/typescript-config

**Files:**
- `base.json`: Base TypeScript configuration
- `react.json`: React-specific TypeScript configuration

**base.json:**
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "moduleResolution": "bundler",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "allowSyntheticDefaultImports": true,
    "declaration": true,
    "declarationMap": true,
    "incremental": true
  }
}
```

#### packages/eslint-config

**Features:**
- Shared ESLint rules
- React-specific configurations
- TypeScript support
- Prettier integration
- Import ordering rules

## Implementation Steps

### Phase 1: Repository Setup
1. Create the monorepo structure
2. Initialize pnpm workspaces (v10.12.4)
3. Set up TurboRepo configuration (v2.5.4)
4. Configure base package.json files
5. Set Node.js engine requirement to >=20.19.0

### Phase 2: Shared Packages
1. Create typescript-config package (targeting ES2022, module: ESNext)
2. Create eslint-config package
3. Create base UI package structure
4. Set up shared Tailwind CSS v4 styles

### Phase 3: UI Component Library
1. Set up build process for UI package
2. Create initial components (Button, Card, Input)
3. Create shared Tailwind CSS imports (@import "tailwindcss")
4. Add TypeScript definitions
5. Set up exports

### Phase 4: Vite React App
1. Initialize Vite 7 project with React 19.1
2. Configure TypeScript with shared config
3. Set up Tailwind CSS with @tailwindcss/vite plugin
4. Import and use UI components
5. Add example pages
6. Configure React 19 TypeScript types

### Phase 5: Storybook Integration
1. Initialize Storybook 9.0
2. Configure for monorepo structure
3. Add stories for UI components
4. Set up @storybook/addon-themes for Tailwind
5. Configure build process
6. Ensure Vite integration with @storybook/react-vite

### Phase 6: Developer Experience
1. Add hot reload across packages (Vite 7 HMR)
2. Configure TypeScript paths and Node.js 20+ features
3. Set up linting and formatting
4. Add pre-commit hooks
5. Create comprehensive documentation
6. Verify Node.js 20.19+ compatibility

### Phase 7: Version-Specific Optimizations
1. Configure Vite 7 for optimal performance with React 19
2. Set up React 19 Server Components support (if needed)
3. Implement Tailwind CSS v4 theme customization using CSS variables
4. Configure Storybook 9 with proper Vite integration
5. Add migration notes from older template versions

## Key Configurations

### Tailwind Shared Config

With Tailwind CSS v4, the configuration approach has changed. Instead of a traditional config file, you now use CSS imports:

```css
/* packages/ui/src/styles/tailwind.css */
@import "tailwindcss";

/* Custom theme extensions */
@theme {
  --color-primary: #3B82F6;
  /* Add more custom properties as needed */
}
```

No PostCSS configuration needed with Vite!

### Vite Configuration
```typescript
// apps/web/vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
  },
})
```

## Development Workflow

1. **Start all apps in dev mode:**
   ```bash
   pnpm dev
   ```

2. **Run Storybook:**
   ```bash
   pnpm storybook
   ```

3. **Build all packages:**
   ```bash
   pnpm build
   ```

4. **Type checking:**
   ```bash
   pnpm type-check
   ```

5. **Linting:**
   ```bash
   pnpm lint
   ```

## Benefits of This Structure

1. **Shared Dependencies**: Common packages reduce duplication
2. **Type Safety**: Shared TypeScript configs ensure consistency
3. **Component Isolation**: Storybook for component development
4. **Fast Development**: Vite provides instant HMR
5. **Scalable**: Easy to add new apps or packages
6. **Modern Stack**: Latest versions of all tools
7. **Developer Experience**: Configured for productivity

## Version Compatibility Notes (July 2025)

### Breaking Changes and Migration Considerations:

1. **Vite 7.0**: Requires Node.js 20.19+ or 22.12+. Dropped Node 21 support.

2. **React 19.1**: 
   - Full support for React Server Components
   - New features like Server Actions
   - TypeScript definitions: `@types/react@^19.1.8`

3. **TypeScript 5.8**: 
   - Modern setup supports native ESM
   - Node.js v23+ has built-in TypeScript support with experimental strip types

4. **Storybook 9.0**: 
   - Major upgrade from v8
   - Note: `@storybook/addon-essentials` is still on v8.6.14
   - Migration required from v8 using `storybook@9 upgrade`

5. **Tailwind CSS 4.1**: 
   - Major architecture change from v3
   - No longer requires autoprefixer (handled automatically)
   - Uses CSS imports instead of traditional config
   - PostCSS no longer needed with Vite
   - Use `@tailwindcss/vite` plugin for Vite projects
   - For non-Vite setups, use `@tailwindcss/postcss`

6. **TurboRepo 2.5**: Stable with incremental improvements

7. **pnpm 10.12**: Performance improvements and better monorepo support

## Implementation Progress Checklist

### Phase 1: Repository Setup
- [x] Create the monorepo structure
- [x] Initialize pnpm workspaces (v10.12.4)
- [x] Set up TurboRepo configuration (v2.5.4)
- [x] Configure base package.json files
- [x] Set Node.js engine requirement to >=20.19.0

### Phase 2: Shared Packages
- [ ] Create typescript-config package (targeting ES2022, module: ESNext)
- [ ] Create eslint-config package
- [ ] Create base UI package structure
- [ ] Set up shared Tailwind CSS v4 styles

### Phase 3: UI Component Library
- [ ] Set up build process for UI package
- [ ] Create initial components (Button, Card, Input)
- [ ] Create shared Tailwind CSS imports (@import "tailwindcss")
- [ ] Add TypeScript definitions
- [ ] Set up exports

### Phase 4: Vite React App
- [ ] Initialize Vite 7 project with React 19.1
- [ ] Configure TypeScript with shared config
- [ ] Set up Tailwind CSS with @tailwindcss/vite plugin
- [ ] Import and use UI components
- [ ] Add example pages
- [ ] Configure React 19 TypeScript types

### Phase 5: Storybook Integration
- [ ] Initialize Storybook 9.0
- [ ] Configure for monorepo structure
- [ ] Add stories for UI components
- [ ] Set up @storybook/addon-themes for Tailwind
- [ ] Configure build process
- [ ] Ensure Vite integration with @storybook/react-vite

### Phase 6: Developer Experience
- [ ] Add hot reload across packages (Vite 7 HMR)
- [ ] Configure TypeScript paths and Node.js 20+ features
- [ ] Set up linting and formatting
- [ ] Add pre-commit hooks
- [ ] Create comprehensive documentation
- [ ] Verify Node.js 20.19+ compatibility

### Phase 7: Version-Specific Optimizations
- [ ] Configure Vite 7 for optimal performance with React 19
- [ ] Set up React 19 Server Components support (if needed)
- [ ] Implement Tailwind CSS v4 theme customization using CSS variables
- [ ] Configure Storybook 9 with proper Vite integration
- [ ] Add migration notes from older template versions

### Additional Tasks
- [ ] Create example components to demonstrate patterns
- [ ] Include GitHub Actions for CI/CD
- [ ] Add testing setup (Vitest + React Testing Library)
- [ ] Write comprehensive README for the template
- [ ] Test the template with `create-turbo` command

## Progress Notes

**Last Updated:** July 1, 2025
**Status:** Phase 1 completed, ready for Phase 2
**Current Phase:** Phase 1 - Repository Setup ✓

### Important Instructions for Claude/AI Assistant:
1. **Always update checkboxes** - When completing a task, change `- [ ]` to `- [x]`
2. **Update the Last Updated date** - Change this to the current date when making progress
3. **Update Current Phase** - Indicate which phase is actively being worked on
4. **Add implementation notes** - Document any important decisions, issues, or deviations from the plan
5. **File locations** - The template being created will be in `/templates/vite-react-storybook/`
6. **Test commands** - After each phase, test with appropriate commands (pnpm install, pnpm dev, etc.)
7. **Version conflicts** - If any specified versions have conflicts, document the resolution

### Implementation Guidelines:
- Start with Phase 1 and work sequentially through the phases
- Each phase should be fully completed and tested before moving to the next
- If a blocker is encountered, document it and either resolve or note for user attention
- Keep the CLAUDE.md principles in mind (minimal files, no unnecessary documentation)
- The template should be immediately usable with `create-turbo`

---

*As tasks are completed, check them off and add any relevant notes or issues encountered below this line.*

### Phase 1 Completion Notes (July 1, 2025):
- Created base monorepo structure in `/templates/vite-react-storybook/`
- Set up pnpm workspace configuration
- Created turbo.json with proper task dependencies
- Added .gitignore, .npmrc, and README.md
- Configured Node.js engine requirement to >=20.19.0
- Ready to proceed with Phase 2: Shared Packages
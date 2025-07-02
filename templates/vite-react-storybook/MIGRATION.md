# Migration Guide

This guide helps you migrate from older versions of this template to the latest version with modern tooling.

## Version Compatibility

This template uses the latest versions as of July 2025:
- **Vite 7.0** (was 5.x/6.x)
- **React 19.1** (was 18.x)
- **TypeScript 5.8** (was 5.x)
- **Storybook 9.0** (was 7.x/8.x)
- **Tailwind CSS 4.1** (was 3.x)
- **Node.js 20.19+** (was 16.x/18.x)

## Major Breaking Changes

### 🚨 Node.js Requirements
- **Before**: Node.js 16+ or 18+
- **Now**: Node.js 20.19+ or 22.12+
- **Action**: Upgrade your Node.js version

### 🚨 Tailwind CSS v4 Architecture
- **Before**: Traditional config file (`tailwind.config.js`)
- **Now**: CSS imports and `@theme` blocks
- **Action**: Replace config files with CSS imports

**Old approach:**
```javascript
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6'
      }
    }
  }
}
```

**New approach:**
```css
/* styles.css */
@import "tailwindcss";

@theme {
  --color-primary: #3B82F6;
}
```

### 🚨 PostCSS No Longer Required
- **Before**: Required PostCSS with Tailwind plugin
- **Now**: Use `@tailwindcss/vite` plugin directly
- **Action**: Remove PostCSS config, use Vite plugin

**Old Vite config:**
```javascript
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
})
```

**New Vite config:**
```javascript
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
})
```

### 🚨 React 19 Changes
- **Before**: React 18 patterns
- **Now**: React 19 with new features
- **Action**: Update TypeScript types, leverage new features

**Type updates:**
```bash
npm install @types/react@^19.1.8 @types/react-dom@^19.0.0
```

### 🚨 Storybook 9 Migration
- **Before**: Storybook 7/8 configuration
- **Now**: Storybook 9 with new addons
- **Action**: Update configuration and addon versions

**Key changes:**
- `@storybook/addon-essentials` may still be on v8.6.14
- `@storybook/addon-themes` is now v9.0.14
- Updated configuration format

## Step-by-Step Migration

### 1. Update Node.js
```bash
# Check current version
node --version

# Upgrade to Node.js 20.19+ or 22.12+
# Use nvm, fnm, or download from nodejs.org
```

### 2. Update Package Manager
```bash
# Update to pnpm 10.12+
npm install -g pnpm@latest
```

### 3. Update Dependencies
```bash
# Update all dependencies to latest versions
pnpm update --latest
```

### 4. Migrate Tailwind CSS
1. **Remove old files:**
   ```bash
   rm tailwind.config.js
   rm postcss.config.js
   ```

2. **Update CSS imports:**
   ```css
   /* Replace in your main CSS file */
   @import "tailwindcss";
   ```

3. **Convert theme to CSS variables:**
   ```css
   @theme {
     --color-primary: #your-color;
   }
   ```

4. **Update Vite config:**
   ```javascript
   import tailwindcss from '@tailwindcss/vite'
   
   export default defineConfig({
     plugins: [
       react(),
       tailwindcss() // Add this
     ],
   })
   ```

### 5. Update React Components
1. **Update type imports:**
   ```typescript
   // No changes needed for basic components
   // React 19 is largely backward compatible
   ```

2. **Leverage new features (optional):**
   ```typescript
   // Use new React 19 features like:
   // - Actions
   // - Server Components (if using)
   // - Improved TypeScript support
   ```

### 6. Update Storybook
1. **Run Storybook upgrade:**
   ```bash
   npx storybook@latest upgrade
   ```

2. **Update configuration:**
   ```typescript
   // .storybook/main.ts
   import type { StorybookConfig } from "@storybook/react-vite";
   
   const config: StorybookConfig = {
     framework: {
       name: "@storybook/react-vite",
       options: {},
     },
     addons: [
       "@storybook/addon-essentials",
       "@storybook/addon-themes",
       "@storybook/addon-a11y"
     ],
   };
   ```

### 7. Update Build Configuration
1. **Optimize for modern browsers:**
   ```javascript
   // vite.config.js
   export default defineConfig({
     build: {
       target: 'esnext', // Modern target
     },
   })
   ```

## Common Issues and Solutions

### Issue: TypeScript Errors
**Problem**: TypeScript can't find React types
**Solution**: 
```bash
pnpm install @types/react@^19.1.8 @types/react-dom@^19.0.0
```

### Issue: Tailwind Classes Not Working
**Problem**: Tailwind styles not applying
**Solution**: 
1. Ensure `@import "tailwindcss";` is in your CSS
2. Use `@tailwindcss/vite` plugin
3. Remove old PostCSS configuration

### Issue: Storybook Build Errors
**Problem**: Storybook fails to build
**Solution**:
1. Run `npx storybook@latest upgrade`
2. Update addon versions
3. Check configuration format

### Issue: Vite Dev Server Issues
**Problem**: Development server not starting
**Solution**:
1. Clear Vite cache: `rm -rf node_modules/.vite`
2. Update to Vite 7+
3. Check Node.js version (must be 20.19+)

## Performance Improvements

After migration, you should see:
- **Faster build times** with Vite 7
- **Improved HMR** with React 19
- **Better TypeScript performance** with composite builds
- **Faster Tailwind compilation** with v4 architecture
- **Quicker Storybook startup** with optimized dependencies

## Verification Checklist

After migration, verify:
- [ ] Node.js version is 20.19+ or 22.12+
- [ ] All dependencies are latest versions
- [ ] Tailwind CSS styles are working
- [ ] Vite dev server starts without errors
- [ ] Storybook builds and runs
- [ ] TypeScript compilation succeeds
- [ ] Pre-commit hooks are working
- [ ] All tests pass (if any)

## Getting Help

If you encounter issues:
1. Check this migration guide
2. Review the main README.md
3. Check the specific package documentation
4. Open an issue with error details

## Rolling Back

If you need to roll back:
1. Revert to previous Node.js version
2. Restore old package.json
3. Run `pnpm install`
4. Restore old configuration files
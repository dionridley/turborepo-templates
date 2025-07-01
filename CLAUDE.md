# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a TurboRepo templates repository designed to host multiple monorepo templates that can be accessed via the `create-turbo` CLI. The repository follows the pattern of storing templates in subdirectories, similar to Vercel's examples repository.

## Key Concepts

### Template Structure
- Templates are stored in the `/templates/` directory as flat subdirectories
- Each template is a complete TurboRepo monorepo with its own `package.json`, `turbo.json`, `apps/`, and `packages/` directories
- Templates are accessed via: `npx create-turbo@latest my-app --example https://github.com/dionridley/turborepo-templates --example-path templates/[template-name]`

### Important Limitations
- Nested packages are NOT supported - all packages must be at the same depth level
- The `create-turbo` CLI uses GitHub's API to download templates, which has rate limiting (60 requests/hour for unauthenticated, 5000 for authenticated)
- Private repositories require GitHub authentication

## Development Commands

Since this is a template repository, there are no global build/test commands. When working with individual templates:

### For each template in `/templates/[template-name]/`:
```bash
# Install dependencies (check package.json for preferred package manager)
pnpm install  # or npm install, or yarn install

# Run development servers
pnpm dev

# Build all apps and packages
pnpm build

# Run tests (if configured)
pnpm test

# Lint code
pnpm lint

# Type checking (if TypeScript)
pnpm type-check
```

## Architecture and Structure

### Expected Repository Layout
```
turborepo-templates/
├── README.md                    # Template catalog and usage instructions
├── CONTRIBUTING.md              # Guidelines for adding new templates
├── .github/
│   └── workflows/              # CI/CD for template validation
├── docs/
│   └── TurboRepoTemplatesInSubfolders.md  # Technical documentation
├── templates/
│   ├── basic/                  # Minimal TurboRepo setup
│   ├── nextjs-tailwind/        # Next.js with Tailwind CSS
│   ├── design-system/          # Component library template
│   └── [other-templates]/      # Additional templates
└── scripts/
    ├── validate-templates.js   # Validate all templates build correctly
    └── update-dependencies.js  # Bulk update dependencies across templates
```

### Template Requirements
Each template should:
1. Be a fully functional TurboRepo monorepo
2. Include its own README with specific setup instructions
3. Have a `turbo.json` configuration
4. Define workspace structure in root `package.json`
5. Include at least one app in `/apps/` and optionally packages in `/packages/`

## Working with Templates

### Adding a New Template
1. Create a new directory under `/templates/`
2. Initialize as a complete TurboRepo monorepo
3. Ensure all dependencies are properly defined
4. Test that `pnpm install && pnpm build` works from the template root
5. Add template documentation in the template's README

### Validating Templates
When validation scripts are implemented, run them before committing:
```bash
node scripts/validate-templates.js
```

### Testing Template Usage
```bash
# Test a specific template
npx create-turbo@latest test-app --example https://github.com/dionridley/turborepo-templates --example-path templates/[template-name]
```

## Important Notes

- This repository hosts templates only - no shared code or dependencies
- Each template is independent and self-contained
- Follow TurboRepo best practices for monorepo structure
- Ensure templates work with multiple package managers (pnpm, npm, yarn)
- Keep templates minimal but functional - users will extend them
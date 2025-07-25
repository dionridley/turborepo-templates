# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a TurboRepo templates repository designed to host multiple monorepo templates that can be accessed via `degit`. The repository follows the pattern of storing templates in subdirectories, similar to Vercel's examples repository.

## Key Concepts

### Template Structure
- Templates are stored in the `/templates/` directory as flat subdirectories
- Each template is a complete TurboRepo monorepo with its own `package.json`, `turbo.json`, `apps/`, and `packages/` directories
- Templates are accessed via: `npx degit dionridley/turborepo-templates/templates/[template-name] my-app`

### Important Limitations
- Nested packages are NOT supported - all packages must be at the same depth level
- When using `degit`, it downloads only the specified directory, making it more efficient than downloading the entire repository
- Private repositories require authentication configuration with degit

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

## Directory Structure

```
turborepo-templates/
├── _claude/             # Claude Code workspace
│   ├── plans/           # Project plans and strategies
│   │   ├── draft/       # Plans being developed or refined
│   │   ├── in_progress/ # Plans currently being implemented
│   │   └── completed/   # Implemented or finalized plans
│   └── docs/            # Technical documentation
├── _resources/          # User-provided documentation and research
├── docs/                # Public technical documentation
│   └── TurboRepoTemplatesInSubfolders.md
├── templates/           # TurboRepo template collection
│   └── vite-react-storybook/  # Vite + React + Storybook template
├── README.md            # Template catalog and usage instructions
├── CONTRIBUTING.md      # Guidelines for adding new templates (planned)
├── .github/
│   └── workflows/       # CI/CD for template validation (planned)
└── scripts/             # Utility scripts (planned)
    ├── validate-templates.js   # Validate all templates build correctly
    └── update-dependencies.js  # Bulk update dependencies across templates
```

## Folder Purposes

### `/_claude`
Claude Code's workspace for maintaining project continuity across sessions:
- **`/plans`**: Strategic documents, architectural decisions, and implementation plans
  - **`/draft`**: Plans being developed or refined (not yet approved/finalized)
  - **`/in_progress`**: Plans currently being actively implemented
  - **`/completed`**: Plans that have been fully implemented or finalized
- **`/docs`**: Technical documentation, API specs, and development notes

### `/_resources`
User-provided materials that inform the development process:
- External documentation
- Research notes
- Design specifications
- Business requirements

### `/docs`
Public technical documentation for the repository:
- Architecture guides
- Technical specifications
- Best practices documentation

### `/templates`
Collection of TurboRepo monorepo templates:
- **`/vite-react-storybook`**: Modern stack with Vite 7, React 19, TypeScript 5.8, Storybook 9, and Tailwind CSS 4
- Additional templates will be added here

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
npx degit dionridley/turborepo-templates/templates/[template-name] test-app
cd test-app
pnpm install
```

## Working Mode Guidelines

### Planning vs. Implementation Mode

**DEFAULT MODE: PLANNING**
- All conversations start in planning mode
- In planning mode: discuss, analyze, suggest, and propose solutions
- DO NOT make any changes to files or execute commands without explicit approval
- Wait for clear implementation instructions like:
  - "Go ahead and implement this"
  - "Please make these changes"
  - "Yes, let's do that"

### Transitioning to Implementation
- Only switch to implementation mode when the user explicitly requests it
- Implementation requests should be clear and specific
- If uncertain whether to implement, ask for clarification

### Example Workflow
1. User asks: "How should we handle X?"
2. Claude: Analyzes options, suggests approaches, explains pros/cons
3. User: "That sounds good, please implement option 2"
4. Claude: NOW begins making actual changes

## Session Continuity Guidelines

When starting a new Claude Code session:

1. **Check CLAUDE.md** (this file) for the current project structure and strategy
2. **Review plan stages**:
   - Check `/_claude/plans/in_progress/` for active work
   - Review `/_claude/plans/draft/` for upcoming features
   - Reference `/_claude/plans/completed/` for implemented decisions
3. **Check implementation status** in `/templates` to see what's been built

## Plan Management Workflow

1. **Draft Stage**: New plans start in `/_claude/plans/draft/`
   - Plans being written or refined
   - Not yet approved or ready for implementation
   
2. **In Progress Stage**: Move to `/_claude/plans/in_progress/` when implementation begins
   - Actively being worked on
   - Reference during development
   
3. **Completed Stage**: Move to `/_claude/plans/completed/` when fully implemented
   - Archive of implemented features
   - Historical reference for decisions made

## Important Files

- This file (`CLAUDE.md`): Project organization reference
- `/README.md`: Public-facing template catalog
- `/_claude/plans/completed/vite-react-storybook-template.md`: Completed implementation plan for the first template

## Development Principles

1. **Incremental Progress**: Build features incrementally with working code at each step
2. **Documentation First**: Update plans and docs before implementing major features
3. **Template Independence**: Each template is self-contained with no cross-dependencies
4. **User-Centric Design**: Keep templates minimal but functional - users will extend them

## Important Notes

- This repository hosts templates only - no shared code or dependencies
- Each template is independent and self-contained
- Follow TurboRepo best practices for monorepo structure
- Ensure templates work with multiple package managers (pnpm, npm, yarn)
- Use `degit` for efficient template downloading without API rate limits
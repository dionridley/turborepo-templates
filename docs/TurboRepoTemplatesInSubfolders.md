# Structuring custom TurboRepo templates in repository subfolders

TurboRepo's template system supports storing multiple templates in subfolders of a single repository, similar to Vercel's examples structure. While this approach works technically through the `--example-path` parameter, the ecosystem favors separate repositories for each template due to certain architectural constraints.

## How GitHub-based templates work

While TurboRepo's `create-turbo` CLI uses GitHub's repository download APIs, a more efficient approach is using `degit` - a scaffolding tool that downloads only the specific directory you need:

1. **Degit advantages** - Downloads only the specified subdirectory, not the entire repository
2. **No API rate limits** - Works without GitHub API authentication in most cases
3. **Faster downloads** - Transfers less data by targeting specific paths
4. **Simpler syntax** - More intuitive command structure for subfolder access

## Subfolder templates with degit

**Yes, custom TurboRepo templates can be stored in subfolders** of a single repository. Using `degit` provides a cleaner approach:

```bash
# Simple degit syntax for subfolder templates
npx degit username/repo/templates/nextjs my-app

# Alternative: specify branch if not main/master
npx degit username/repo/templates/nextjs#develop my-app
```

However, there's a critical limitation: **TurboRepo does not support nested packages** within the templates themselves. Structures like `apps/**` or `packages/**` with deeply nested workspaces will fail. Each package must exist at the same depth level within the workspace structure.

## Organizing multiple templates effectively

Based on research of Vercel's patterns and community best practices, there are three main approaches:

### Single repository with flat subdirectories (Vercel's approach)
```
my-templates/
├── README.md
├── examples/
│   ├── basic/
│   ├── with-tailwind/
│   ├── design-system/
│   └── kitchen-sink/
└── docs/
```

### Categorized template collections
```
turborepo-templates/
├── templates/
│   ├── nextjs-app/
│   ├── react-library/
│   ├── fullstack-app/
│   └── microservices/
├── docs/
└── scripts/
```

### Separate repositories per template (most common)
- `org/turborepo-nextjs-template`
- `org/turborepo-design-system-template`
- `org/turborepo-api-template`

The separate repository approach remains most popular because it provides better version control, easier maintenance, and clearer ownership boundaries for each template.

## Referencing subfolder templates with degit

Using `degit` provides a more straightforward approach for accessing templates in subdirectories:

### Standard usage for subfolder templates
```bash
# Simple path specification
npx degit myorg/templates/templates/nextjs-starter my-project
cd my-project
pnpm install

# Specify branch explicitly
npx degit myorg/templates/templates/react#feature/new-template my-project
```

### Working examples from the community
```bash
# Accessing Vercel's examples (if they supported degit)
npx degit vercel/turborepo/examples/with-tailwind my-app

# For this repository
npx degit dionridley/turborepo-templates/templates/vite-react-storybook my-app
```

Degit handles complex paths naturally and doesn't require special parameters for subdirectories.

## Repository structure best practices

For a repository containing multiple TurboRepo templates with root documentation, the recommended structure follows these patterns:

### Comprehensive multi-template repository
```
turborepo-templates/
├── README.md                    # Template catalog and overview
├── CONTRIBUTING.md              # How to add new templates
├── LICENSE
├── .github/
│   └── workflows/              # CI/CD for template validation
├── docs/
│   ├── getting-started.md
│   ├── template-guide.md
│   └── deployment/
├── templates/
│   ├── basic/
│   │   ├── README.md          # Template-specific docs
│   │   ├── package.json
│   │   ├── turbo.json
│   │   ├── apps/
│   │   └── packages/
│   ├── nextjs-tailwind/
│   ├── design-system/
│   └── microservices/
└── scripts/
    ├── validate-templates.js
    └── update-dependencies.js
```

### Key requirements for each template subfolder
1. **Complete monorepo structure** with `apps/` and `packages/` directories
2. **Valid configuration files**: `package.json`, `turbo.json`, workspace configs
3. **Template-specific README** with setup and customization instructions
4. **Consistent naming conventions** using `@repo/` or organization prefixes
5. **Clean initial state** excluding `.turbo`, `node_modules`, and build artifacts

## Limitations and important considerations

Several architectural constraints affect how you structure template repositories:

**Technical limitations:**
- No support for nested packages (e.g., `apps/web/components` as a separate package)
- Each workspace package must be at the same directory depth
- Templates are limited to JavaScript/TypeScript ecosystems
- No built-in template generation or management features like Nx

**Practical considerations:**
- Large template collections may become difficult to maintain in a single repository
- Version management is more complex with multiple templates in one repo
- CI/CD pipelines need to validate each template independently
- Documentation should include clear `degit` examples for each template

**Performance factors:**
- Degit downloads only the requested directory, not the entire repository
- No GitHub API rate limits with degit (uses git directly)
- Cache directories (`.turbo`) should be excluded from templates

Despite these limitations, storing multiple TurboRepo templates in a single repository with subfolders is both possible and practical for organizations wanting centralized template management. The key is understanding the constraints and designing your repository structure to work within them while providing clear documentation for template consumers.
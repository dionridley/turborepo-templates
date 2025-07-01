# Structuring custom TurboRepo templates in repository subfolders

TurboRepo's template system supports storing multiple templates in subfolders of a single repository, similar to Vercel's examples structure. While this approach works technically through the `--example-path` parameter, the ecosystem favors separate repositories for each template due to certain architectural constraints.

## How GitHub-based templates work in TurboRepo

TurboRepo's `create-turbo` CLI leverages GitHub's repository download APIs to fetch and process templates. When you provide a GitHub URL, the system:

1. **Parses the URL** to extract repository details, branch references, and subdirectory paths
2. **Downloads via GitHub's tarball API** using endpoints like `https://api.github.com/repos/OWNER/REPO/tarball/REF`
3. **Extracts and filters content** based on any specified subdirectory path
4. **Processes the template** by installing dependencies and applying any necessary transformations

The key mechanism enabling subfolder templates is the `--example-path` parameter, which allows the CLI to extract only a specific directory from the downloaded repository archive.

## Subfolder templates are supported with limitations

**Yes, custom TurboRepo templates can be stored in subfolders** of a single repository. The `create-turbo` CLI explicitly supports this through two methods:

```bash
# Method 1: Direct GitHub URL with path
npx create-turbo@latest my-app --example https://github.com/username/repo/tree/main/templates/nextjs

# Method 2: Using --example-path parameter
npx create-turbo@latest my-app --example https://github.com/username/repo --example-path templates/nextjs
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

## Referencing subfolder templates with create-turbo

The `create-turbo` CLI provides specific parameters for accessing templates in subdirectories:

### Standard usage for subfolder templates
```bash
# Using --example-path for clear subdirectory specification
npx create-turbo@latest my-project \
  --example https://github.com/myorg/templates \
  --example-path templates/nextjs-starter \
  --package-manager pnpm

# For branches with special characters (e.g., bug/fix-1)
npx create-turbo@latest my-project \
  --example https://github.com/myorg/templates \
  --example-path feature/new-template/templates/react
```

### Working examples from the community
```bash
# Accessing Vercel's examples
npx create-turbo@latest --example https://github.com/vercel/turborepo --example-path examples/with-tailwind

# Using turbo generate for workspace templates
turbo gen workspace --copy https://github.com/vercel/turborepo/tree/main/examples/design-system/packages/ui
```

The `--example-path` parameter is particularly useful when branch names contain slashes or when you need to specify exact paths within complex repository structures.

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
- Documentation must be comprehensive since `create-turbo` syntax for subfolders isn't extensively documented

**Performance factors:**
- Downloading entire repositories for single templates can be inefficient
- GitHub API rate limits may affect large-scale template usage
- Cache directories (`.turbo`) should be excluded from templates

Despite these limitations, storing multiple TurboRepo templates in a single repository with subfolders is both possible and practical for organizations wanting centralized template management. The key is understanding the constraints and designing your repository structure to work within them while providing clear documentation for template consumers.
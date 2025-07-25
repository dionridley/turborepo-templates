# TurboRepo Templates

A collection of modern, production-ready TurboRepo monorepo templates for rapid development.

## Available Templates

### 🚀 Vite + React + Storybook
A modern monorepo setup featuring Vite 7, React 19, TypeScript 5.8, Storybook 9, and Tailwind CSS 4.

```bash
npx degit dionridley/turborepo-templates/templates/vite-react-storybook my-app
cd my-app
pnpm install
```

## Why Use These Templates?

- **Modern Stack**: Latest versions of all major dependencies
- **Best Practices**: Follows TurboRepo and monorepo best practices
- **Developer Experience**: Pre-configured with ESLint, Prettier, and TypeScript
- **Production Ready**: Optimized build configurations and performance settings
- **Well Documented**: Each template includes comprehensive documentation

## Template Structure

All templates follow a consistent structure:

```
template-name/
├── apps/           # Application packages
├── packages/       # Shared packages
├── turbo.json      # TurboRepo configuration
├── package.json    # Root package configuration
└── README.md       # Template-specific documentation
```

## Getting Started

### Prerequisites

- Node.js >= 20.19.0
- pnpm >= 10.12.4 (recommended) or npm/yarn

### Using a Template

1. **Clone the template** using degit:
   ```bash
   npx degit dionridley/turborepo-templates/templates/[template-name] my-project
   ```

2. **Navigate to your project**:
   ```bash
   cd my-project
   ```

3. **Install dependencies**:
   ```bash
   pnpm install
   ```

4. **Start development**:
   ```bash
   pnpm dev
   ```

## Available Commands

Most templates support these commands:

- `pnpm dev` - Start all apps in development mode
- `pnpm build` - Build all apps and packages
- `pnpm lint` - Lint all packages
- `pnpm type-check` - Run TypeScript type checking
- `pnpm test` - Run tests (if configured)
- `pnpm format` - Format code with Prettier

## Why Degit?

We use [degit](https://github.com/Rich-Harris/degit) instead of `create-turbo` for several reasons:

1. **Efficiency**: Downloads only the template directory, not the entire repository
2. **No Rate Limits**: Avoids GitHub API rate limiting issues
3. **Simplicity**: Cleaner, more intuitive syntax for accessing subdirectories
4. **Speed**: Faster downloads with less data transfer

## Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details on:

- Adding new templates
- Updating existing templates
- Reporting issues
- Submitting pull requests

## Template Development

To add a new template:

1. Create a new directory under `/templates/`
2. Initialize as a complete TurboRepo monorepo
3. Ensure all dependencies are properly defined
4. Test that `pnpm install && pnpm build` works
5. Add comprehensive documentation
6. Submit a pull request

## License

MIT License - see [LICENSE](LICENSE) for details.

## Support

- 📖 [Documentation](docs/)
- 🐛 [Report Issues](https://github.com/dionridley/turborepo-templates/issues)
- 💬 [Discussions](https://github.com/dionridley/turborepo-templates/discussions)

---

Built with ❤️ for the TurboRepo community
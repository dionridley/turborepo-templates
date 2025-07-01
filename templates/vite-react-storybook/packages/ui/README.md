# @repo/ui

Shared UI component library for the monorepo.

## Usage

```tsx
import { Button, Card } from '@repo/ui';
import '@repo/ui/styles/tailwind.css';

function App() {
  return (
    <Card>
      <Button>Click me</Button>
    </Card>
  );
}
```

## Development

Components are built with:
- React 19.1
- TypeScript
- Tailwind CSS 4

All components are fully typed and tree-shakeable.
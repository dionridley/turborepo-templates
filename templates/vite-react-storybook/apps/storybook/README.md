# Storybook

Component documentation and development environment for the UI library.

## Features

- Storybook 9 with Vite builder
- Interactive component documentation
- Accessibility testing with addon-a11y
- Dark mode support with addon-themes
- Auto-generated documentation

## Development

```bash
# Start Storybook dev server
pnpm dev

# Build static Storybook
pnpm build

# Preview built Storybook
pnpm preview
```

## Structure

- `.storybook/` - Storybook configuration
- `stories/` - Component stories and documentation
- Stories are also loaded from `packages/ui/src/**/*.stories.tsx`

## Writing Stories

Stories use Storybook's Component Story Format (CSF) 3.0:

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@repo/ui';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Button',
  },
};
```
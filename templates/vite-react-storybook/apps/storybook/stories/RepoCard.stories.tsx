import type { Meta, StoryObj } from '@storybook/react';
import { Card, Button } from '@repo/ui';

const meta: Meta<typeof Card> = {
  title: 'Components/RepoCard',
  component: Card,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    padding: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h3 className="text-lg font-semibold mb-2">Card Title</h3>
        <p className="text-gray-600">This is a card component with default padding.</p>
      </div>
    ),
  },
};

export const NoPadding: Story = {
  args: {
    padding: 'none',
    children: (
      <div>
        <img 
          src="https://via.placeholder.com/400x200" 
          alt="Placeholder" 
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-2">Card with Image</h3>
          <p className="text-gray-600">This card has no padding on the card itself.</p>
        </div>
      </div>
    ),
  },
};

export const Interactive: Story = {
  args: {
    children: (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Interactive Card</h3>
        <p className="text-gray-600">
          This card contains interactive elements to demonstrate how components work together.
        </p>
        <div className="flex gap-2">
          <Button size="sm">Action</Button>
          <Button size="sm" variant="outline">Cancel</Button>
        </div>
      </div>
    ),
  },
};
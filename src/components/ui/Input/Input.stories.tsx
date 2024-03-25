import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  component: Input,
  argTypes: {
    error: {
      type: "string",
      description: "Error message to display",
    },
    type: {
      type: "string",
      defaultValue: "text",
    },
  },
  parameters: {
    docs: {
      description: {
        component: "Input component",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Search...",
  },
};

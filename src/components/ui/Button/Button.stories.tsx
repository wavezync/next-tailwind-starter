import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";
import { ICON_MAP } from "../../../../.storybook/icons";

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    intent: {
      options: [
        "primary",
        "secondary",
        "danger",
        "warning",
        "success",
        "muted",
        "tertiary",
      ],
      control: { type: "select" },
    },
    loadingText: {
      type: "string",
      defaultValue: "Loading...",
    },
    outline: {
      type: "boolean",
      defaultValue: false,
    },
    size: {
      options: ["xs", "sm", "md", "lg", "xl"],
      defaultValue: "md",
      control: { type: "select" },
    },
    disabled: {
      type: "boolean",
    },
    leftIcon: {
      options: Object.keys(ICON_MAP),
      mapping: ICON_MAP,
    },
    rightIcon: {
      options: Object.keys(ICON_MAP),
      mapping: ICON_MAP,
    },
    shape: {
      options: [
        "default",
        "pill",
        "rounded",
        "rounded-sm",
        "rounded-md",
        "rounded-lg",
      ],
      defaultValue: "default",
      control: { type: "select" },
    },
  },
  parameters: {
    docs: {
      description: {
        component: "A button created according to app guidelines",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    intent: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    intent: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    children: "Tertiary Button",
    intent: "tertiary",
  },
};

export const Danger: Story = {
  args: {
    children: "Danger Button",
    intent: "danger",
  },
};

export const Warning: Story = {
  args: {
    children: "Warning Button",
    intent: "warning",
  },
};

export const Success: Story = {
  args: {
    children: "Success Button",
    intent: "success",
  },
};

export const Muted: Story = {
  args: {
    children: "Muted Button",
    intent: "muted",
  },
};

export const Loading: Story = {
  args: {
    children: "Loading Button",
    isLoading: true,
  },
};

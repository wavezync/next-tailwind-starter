import type { Meta, StoryObj } from "@storybook/react";

import { AppButton } from "./Button";
import { ICON_MAP } from "../../../../.storybook/icons";

const meta: Meta<typeof AppButton> = {
  component: AppButton,
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

type Story = StoryObj<typeof AppButton>;

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

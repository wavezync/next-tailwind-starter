import type { Meta, StoryObj } from '@storybook/react';

import { AppButton } from './AppButton';
import { ICON_MAP } from '../../../../.storybook/icons';

const meta: Meta<typeof AppButton> = {
  component: AppButton,
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'select' },
    },
    loadingText: {
      type: 'string',
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: { type: 'select' },
    },
    outline: {
      type: 'boolean',
    },
    disabled: {
      type: 'boolean',
    },
    leftIcon: {
      options: Object.keys(ICON_MAP),
      mapping: ICON_MAP,
    },
    rightIcon: {
      options: Object.keys(ICON_MAP),
      mapping: ICON_MAP,
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A button created according to app guidelines',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof AppButton>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
};

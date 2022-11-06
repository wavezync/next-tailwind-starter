// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ICON_MAP } from '../../../../.storybook/icons';

import AppButton from './AppButton';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'AppButton',
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
} as ComponentMeta<typeof AppButton>;

const Template: ComponentStory<typeof AppButton> = (args) => (
  <AppButton {...args} onClick={() => console.log('button clicked')} />
);

export const Primary = Template.bind({});

Primary.args = {
  children: 'Primary',
  variant: 'primary',
};

export const Secondary = Template.bind({});

Secondary.args = {
  children: 'Secondary',
  variant: 'secondary',
};

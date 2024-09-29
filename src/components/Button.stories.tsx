import { Button, ButtonProps } from "./Button";
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Create acount',
  },
  argTypes: {}
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};
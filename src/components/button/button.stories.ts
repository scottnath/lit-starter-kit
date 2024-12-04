import type { Meta, StoryObj } from '@storybook/web-components';
import { getWcStorybookHelpers } from 'wc-storybook-helpers';
import { html } from 'lit';

import type { MyButton } from './button.js';

const { events, args, argTypes, template } =
  getWcStorybookHelpers('my-button');

const meta: Meta<MyButton> = {
  title: 'Components/Button',
  component: 'my-button',
  args,
  argTypes,
  parameters: {
    actions: {
      handles: events,
    },
  },
};
export default meta;

/**
 * create Story type that will provide autocomplete and docs for `args`,
 * but also allow for namespaced args like CSS Shadow Parts and Slots
 */
type Story = StoryObj<MyButton & typeof args>;

export const Default: Story = {
  render: args => html`${template(args)}`,
  args: {
    'default-slot': 'My Button',
  },
};

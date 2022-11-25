import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Icon from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Icon',
  component: Icon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Icon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  color: 'secondary.100',
  name: 'error',
  fontSize: 1.5,
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'primary.100',
  name: 'face',
};

export const Large = Template.bind({});
Large.args = {
  color: 'success.100',
  fontSize: 1.5,
  name: 'facebook',
};

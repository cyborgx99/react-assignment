import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Spinner from './index';

export default {
  title: 'Components/Spinner',
  component: Spinner,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    type: {
      options: ['animated', 'regular'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />;

export const Main = Template.bind({});

Main.args = {
  type: 'animated',
  size: 'small',
};

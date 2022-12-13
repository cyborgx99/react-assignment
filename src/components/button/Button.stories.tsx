import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './index';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Accept',
  backgroundColor: 'primary.100',
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Reject',
  backgroundColor: 'secondary.100',
};

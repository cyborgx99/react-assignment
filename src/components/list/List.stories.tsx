import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import List from './index';

export default {
  title: 'Components/Button',
  component: List,
  argTypes: {},
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

export const Primary = Template.bind({});

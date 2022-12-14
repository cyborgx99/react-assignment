import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Pagination from './index';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  argTypes: {},
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => <Pagination {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  currentPage: 1,
  totalCount: 100,
  itemsPerPage: 10,
  onPageChange: (page: number) => {
    console.log(page);
  },
};

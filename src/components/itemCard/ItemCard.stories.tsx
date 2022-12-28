import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ItemCard from './index';

export default {
  title: 'Components/Card',
  component: ItemCard,
  argTypes: {},
} as ComponentMeta<typeof ItemCard>;

const Template: ComponentStory<typeof ItemCard> = (args) => <ItemCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  cardItem: {
    id: 1,
    name: 'Title',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg/1024px-001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg',
    price: 10,
  },
};

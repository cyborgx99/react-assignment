import React from 'react';
import ListItem from './listItem';
import { StyledList } from './styles';
import { OrderListPropsInterface } from './types';

const OrderList = ({ items }: OrderListPropsInterface) => {
  return (
    <StyledList>
      {items.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </StyledList>
  );
};

export default OrderList;

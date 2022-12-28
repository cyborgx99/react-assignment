import React from 'react';
import ListItem from './listItem';
import { StyledList } from './styles';
import { OrderListPropsInterface } from './types';

const OrderList = ({ items, type }: OrderListPropsInterface) => {
  return (
    <StyledList $type={type}>
      {items.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </StyledList>
  );
};

export default OrderList;

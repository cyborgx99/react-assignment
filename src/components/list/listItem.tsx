import { BaseSpan } from 'common/styles/baseComponents';
import React from 'react';
import { ItemName, StyledListItem } from './styles';
import { ListItemPropsInterface } from './types';

const ListItem = ({ item }: ListItemPropsInterface) => {
  return (
    <StyledListItem>
      <ItemName>{item.name}</ItemName>
      <BaseSpan>x{item.amount} </BaseSpan>
      <BaseSpan>${item.price * item.amount}</BaseSpan>
    </StyledListItem>
  );
};

export default ListItem;

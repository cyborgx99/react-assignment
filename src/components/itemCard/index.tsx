import { BaseHeaderThree, BaseParagraph } from 'common/styles/baseComponents';
import Button from 'components/button';
import React, { useState } from 'react';
import {
  amountButtonStyles,
  AmountContainer,
  CardContent,
  CardImage,
  ItemCardContainer,
} from './styles';
import { ItemCardPropsInterface } from './types';

const ItemCard = ({ cardItem, onCardActionClick }: ItemCardPropsInterface) => {
  const [amount, setAmount] = useState(1);

  const decrement = () => {
    setAmount((previous) => {
      if (previous === 1) return previous;
      return previous - 1;
    });
  };

  const increment = () => {
    setAmount((previous) => previous + 1);
  };

  return (
    <ItemCardContainer>
      {cardItem.photo && <CardImage src={cardItem.photo} />}
      <CardContent>
        <BaseHeaderThree>{cardItem.name}</BaseHeaderThree>
        <BaseParagraph>Price: ${cardItem.price}</BaseParagraph>
        <AmountContainer>
          <BaseParagraph>Amount: </BaseParagraph>
          <Button
            backgroundColor='secondary.100'
            additionalStyles={amountButtonStyles}
            text='+'
            onClick={increment}
          />
          <BaseParagraph>{amount}</BaseParagraph>
          <Button
            backgroundColor='secondary.100'
            additionalStyles={amountButtonStyles}
            text='-'
            onClick={decrement}
          />
        </AmountContainer>
        <Button text='Add to cart' onClick={onCardActionClick} />
      </CardContent>
    </ItemCardContainer>
  );
};

export default ItemCard;

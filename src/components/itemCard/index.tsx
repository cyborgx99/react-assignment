import { BaseHeaderThree, BaseParagraph } from 'common/styles/baseComponents';
import Button from 'components/button';
import React from 'react';
import {
  amountButtonStyles,
  AmountContainer,
  CardContent,
  CardImage,
  ItemCardContainer,
} from './styles';
import { ItemCardPropsInterface } from './types';

const ItemCard = ({
  cardItem,
  onCardActionClick,
  amount,
  incrementAmount,
  decrementAmount,
  buttonText,
}: ItemCardPropsInterface) => {
  return (
    <ItemCardContainer>
      {cardItem.photo && <CardImage data-testid='card-image' src={cardItem.photo} />}
      <CardContent>
        <BaseHeaderThree data-testid='card-title'>{cardItem.name}</BaseHeaderThree>
        <BaseParagraph>Price: ${cardItem.price}</BaseParagraph>
        <AmountContainer>
          <BaseParagraph>Amount: </BaseParagraph>
          <Button
            backgroundColor='secondary.100'
            additionalStyles={amountButtonStyles}
            text='+'
            onClick={incrementAmount}
          />
          <BaseParagraph data-testid='amount'>{amount}</BaseParagraph>
          <Button
            data-testid='decrement'
            backgroundColor='secondary.100'
            additionalStyles={amountButtonStyles}
            text='-'
            onClick={decrementAmount}
          />
        </AmountContainer>
        <Button text={buttonText} onClick={onCardActionClick} />
      </CardContent>
    </ItemCardContainer>
  );
};

export default ItemCard;

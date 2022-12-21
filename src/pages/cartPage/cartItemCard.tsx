import { useCartStore } from 'common/context/cartContextProvider';
import { CardActionTypes } from 'common/context/types';
import React from 'react';
import ItemCard from '../../components/itemCard';
import { CartItemCardInterface } from './types';

const CartItemCard = ({ cardItem }: CartItemCardInterface) => {
  const [, dispatch] = useCartStore(() => null);

  const removeFromCart = () => {
    dispatch({
      type: CardActionTypes.REMOVE_FROM_CART,
      payload: {
        id: cardItem.id,
      },
    });
  };

  const increment = () => {
    dispatch({
      type: CardActionTypes.CHANGE_ITEM_QUANTITY,
      payload: {
        id: cardItem.id,
        value: 1,
      },
    });
  };

  const decrement = () => {
    dispatch({
      type: CardActionTypes.CHANGE_ITEM_QUANTITY,
      payload: {
        id: cardItem.id,
        value: -1,
      },
    });
  };

  return (
    <ItemCard
      amount={cardItem.amount}
      cardItem={cardItem}
      buttonText='Remove from cart'
      decrementAmount={decrement}
      incrementAmount={increment}
      onCardActionClick={removeFromCart}
    />
  );
};

export default CartItemCard;

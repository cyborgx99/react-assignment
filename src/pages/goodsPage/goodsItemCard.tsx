import { useCartStore } from 'common/context/cartContextProvider';
import { CardActionTypes } from 'common/context/types';
import React, { useState } from 'react';
import ItemCard from '../../components/itemCard';
import { GoodItemCardInterface } from './types';

const GoodsItemCard = ({ cardItem }: GoodItemCardInterface) => {
  const [amount, setAmount] = useState(1);
  const [, dispatch] = useCartStore(() => null);

  const addToCart = () => {
    dispatch({
      type: CardActionTypes.ADD_TO_CART,
      payload: {
        item: { ...cardItem, amount },
      },
    });
  };

  const decrement = () => {
    setAmount((previous) => {
      return previous === 1 ? previous : previous - 1;
    });
  };

  const increment = () => {
    setAmount((previous) => previous + 1);
  };

  return (
    <ItemCard
      amount={amount}
      cardItem={cardItem}
      buttonText='Add to cart'
      decrementAmount={decrement}
      incrementAmount={increment}
      onCardActionClick={addToCart}
    />
  );
};

export default GoodsItemCard;

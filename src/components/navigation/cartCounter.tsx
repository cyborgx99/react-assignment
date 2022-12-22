import { useCartStore } from 'common/context/cartContextProvider';
import { BaseSpan } from 'common/styles/baseComponents';
import { reduceCartToAmount } from 'pages/cartPage/utils';
import React from 'react';

const CartCounter = () => {
  const [items] = useCartStore((store) => store.items);

  return (
    <BaseSpan $fontSize={0.75} $color='text.white'>
      {reduceCartToAmount(items)}
    </BaseSpan>
  );
};

export default CartCounter;

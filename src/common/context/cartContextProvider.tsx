import React, { PropsWithChildren } from 'react';
import { cartReducer } from './cartReducer';
import createRefBasedContext from './refBasedContextCreator';
import { CartInitialState } from './types';

const cartContextInitialValues: CartInitialState = {
  items: [],
};

const { Provider: CartProvider, useStore: useCartStore } = createRefBasedContext(
  cartContextInitialValues,
  cartReducer,
);

const CartContextProvider = ({ children }: PropsWithChildren) => {
  return <CartProvider>{children}</CartProvider>;
};

export { useCartStore };
export default CartContextProvider;

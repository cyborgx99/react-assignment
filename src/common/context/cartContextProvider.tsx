import { localStorageService } from 'common/services/local-storage.service';
import { LocalStorageKeys } from 'common/services/types';
import React, { PropsWithChildren } from 'react';
import { cartReducer } from './cartReducer';
import createRefBasedContext from './refBasedContextCreator';
import { CartInitialState } from './types';

const cartContextInitialValues: CartInitialState = {
  items: [],
};

const updateLocalStorage = <T,>(state: T) => {
  localStorageService.setLocalStorageItem(LocalStorageKeys.cart, state);
};

const { Provider: CartProvider, useStore: useCartStore } = createRefBasedContext(
  localStorageService.getLocalStorageItem<CartInitialState>(LocalStorageKeys.cart) ??
    cartContextInitialValues,
  cartReducer,
  [updateLocalStorage],
);

const CartContextProvider = ({ children }: PropsWithChildren) => {
  return <CartProvider>{children}</CartProvider>;
};

const itemsSelector = (store: CartInitialState) => store.items;

export { useCartStore, itemsSelector };
export default CartContextProvider;

import { CartItemInterfaceWithAmount } from 'common/types';

export interface CartInitialState {
  items: CartItemInterfaceWithAmount[];
}

export enum CardActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  CHANGE_ITEM_QUANTITY = 'CHANGE_ITEM_QUANTITY',
  CLEAR_CART = 'CLEAR_CART',
}

export type AddToCart = {
  type: CardActionTypes.ADD_TO_CART;
  payload: {
    item: CartItemInterfaceWithAmount;
  };
};

export type DecrementItemQuantity = {
  type: CardActionTypes.CHANGE_ITEM_QUANTITY;
  payload: {
    id: number;
    value: number;
  };
};

export type RemoveFromCart = {
  type: CardActionTypes.REMOVE_FROM_CART;
  payload: {
    id: number;
  };
};

export type ClearCart = {
  type: CardActionTypes.CLEAR_CART;
};

export type CartActions = AddToCart | RemoveFromCart | DecrementItemQuantity | ClearCart;

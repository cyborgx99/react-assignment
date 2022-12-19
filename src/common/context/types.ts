import { CardItemInterfaceWithAmount } from 'common/types';

export interface CartInitialState {
  items: CardItemInterfaceWithAmount[];
}

export enum CardActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  CHANGE_ITEM_QUANTITY = 'CHANGE_ITEM_QUANTITY',
}

export type AddToCart = {
  type: CardActionTypes.ADD_TO_CART;
  payload: {
    item: CardItemInterfaceWithAmount;
  };
};

export type DecrementItemQuantity = {
  type: CardActionTypes.CHANGE_ITEM_QUANTITY;
  payload: {
    id: string;
    value: number;
  };
};

export type RemoveFromCart = {
  type: CardActionTypes.REMOVE_FROM_CART;
  payload: {
    id: string;
  };
};

export type CartActions = AddToCart | RemoveFromCart | DecrementItemQuantity;

import produce from 'immer';
import { CartInitialState, CartActions, CardActionTypes } from './types';

export const cartReducer = (state: CartInitialState, action: CartActions) =>
  produce(state, (draft) => {
    switch (action.type) {
      case CardActionTypes.ADD_TO_CART: {
        const index = draft.items.findIndex((item) => item.id === action.payload.item.id);

        if (index !== -1) {
          draft.items[index].amount += action.payload.item.amount;
          break;
        }

        draft.items.push(action.payload.item);
        break;
      }
      case CardActionTypes.REMOVE_FROM_CART: {
        const index = draft.items.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) draft.items.splice(index, 1);
        break;
      }

      case CardActionTypes.CHANGE_ITEM_QUANTITY: {
        const index = draft.items.findIndex((item) => item.id === action.payload.id);

        if (index !== -1) draft.items[index].amount += action.payload.value;

        break;
      }

      default: {
        break;
      }
    }
  });

import { CartItemInterface } from 'common/types';

export interface ItemCardPropsInterface {
  cardItem: CartItemInterface;
  onCardActionClick: () => void;
  amount: number;
  incrementAmount: () => void;
  decrementAmount: () => void;
  buttonText: string;
}

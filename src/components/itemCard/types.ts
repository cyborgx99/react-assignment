import { CardItemInterface } from 'common/types';

export interface ItemCardPropsInterface {
  cardItem: CardItemInterface;
  onCardActionClick: () => void;
}

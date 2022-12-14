import { CardItemInterface } from 'common/types';

export interface GetItemsResponse {
  items: CardItemInterface[];
  totalCount: number | undefined;
}

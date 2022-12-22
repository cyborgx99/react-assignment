import { CartItemInterfaceWithAmount } from 'common/types';

export interface ListItemPropsInterface {
  item: CartItemInterfaceWithAmount;
}

export interface OrderListPropsInterface {
  items: CartItemInterfaceWithAmount[];
}

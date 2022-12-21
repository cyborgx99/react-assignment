import { CartItemInterfaceWithAmount } from 'common/types';
import { SortType } from 'common/types/sort.type';

export const reduceCartToAmount = (items: CartItemInterfaceWithAmount[]): number =>
  items.reduce((accumulator, item) => (accumulator += item.amount), 0);

export const reduceCartToTotalPrice = (items: CartItemInterfaceWithAmount[]): number =>
  items.reduce((accumulator, item) => (accumulator += item.price * item.amount), 0);

export const searchItemResult = (
  items: CartItemInterfaceWithAmount[],
  query: string,
): CartItemInterfaceWithAmount[] => {
  return items.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()));
};

export const sortItems = (
  items: CartItemInterfaceWithAmount[],
  order: SortType,
): CartItemInterfaceWithAmount[] => {
  return items.sort((a, b) => {
    if (order === SortType.desc) {
      [b, a] = [a, b];
    }
    return a.name.localeCompare(b.name);
  });
};

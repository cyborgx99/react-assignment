import { CurrentOrderFormInterface } from 'pages/currentOrderPage/types';
import { CartItemInterfaceWithAmount } from './item.types';

export interface CreateOrderInterface {
  deliveryInformation: CurrentOrderFormInterface;
  orderItems: CartItemInterfaceWithAmount[];
  date: string;
}

export interface OrderInterface extends CreateOrderInterface {
  id: number;
}

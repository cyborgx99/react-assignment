import { CurrentOrderFormInterface } from 'pages/currentOrderPage/types';
import { CartItemInterfaceWithAmount } from './item.types';

export interface OrderInterface {
  deliveryInformation: CurrentOrderFormInterface;
  orderItems: CartItemInterfaceWithAmount[];
  date: Date;
}

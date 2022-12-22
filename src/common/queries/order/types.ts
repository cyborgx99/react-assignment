import { OrderInterface } from 'common/types/order.types';

export interface GetOrdersResponse {
  orders: OrderInterface[];
  totalCount?: number;
}

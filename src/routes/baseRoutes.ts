import { lazy } from 'react';
import { basePathKeys } from './pathKeys';
import { RouteInterface } from './types';

const GoodsPage = lazy(() => import('../pages/goodsPage'));
const CartPage = lazy(() => import('../pages/cartPage'));
const OrdersPage = lazy(() => import('../pages/ordersPage'));

export const baseRoutes: RouteInterface[] = [
  {
    path: basePathKeys.HOME,
    Component: GoodsPage,
  },
  {
    path: basePathKeys.CART,
    Component: CartPage,
  },
  {
    path: basePathKeys.ORDERS,
    Component: OrdersPage,
  },
];

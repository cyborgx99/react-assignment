import { itemHandlers } from './items.handlers';
import { orderHandlers } from './orders.handlers';

export const handlers = [...itemHandlers, ...orderHandlers];

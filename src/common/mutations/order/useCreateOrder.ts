import { apiUrls } from 'common/queries/apiUrls';
import { httpService } from 'common/services/http.service';
import { CreateOrderInterface, OrderInterface } from 'common/types/order.types';
import { useMutation } from 'react-query';
import { ErrorWithMessage } from 'utils/errorUtils';
import { CreateOrderInputInterface } from './types';

const createOrder = async (data: CreateOrderInputInterface) => {
  return httpService.post<OrderInterface, CreateOrderInterface>(`${apiUrls.orders}`, {
    ...data.newOrder,
  });
};

export const useCreateOrderMutation = () => {
  return useMutation<OrderInterface, ErrorWithMessage, CreateOrderInputInterface>(createOrder);
};

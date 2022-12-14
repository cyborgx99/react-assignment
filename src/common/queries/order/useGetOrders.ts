import { API_RESPONSE_HEADER_TOTAL_COUNT, DEFAULT_ITEMS_PER_PAGE } from 'common/constants';
import { httpService } from 'common/services/http.service';
import { OrderInterface } from 'common/types/order.types';
import { SortType } from 'common/types/sort.type';
import { useQuery } from 'react-query';
import { ErrorWithMessage } from 'utils/errorUtils';
import { apiUrls } from '../apiUrls';
import { queryKeys } from '../queryKeys';
import { GetOrdersResponse } from './types';

const getAllOrders = async (page: number, search: string, sort: SortType) => {
  const response = await httpService.getWithResponseHeaders<OrderInterface[]>(
    `${apiUrls.orders}?_page=${page}&_limit=${DEFAULT_ITEMS_PER_PAGE}&q=${search}&_sort=date&_order=${sort}`,
  );

  return response.headers[API_RESPONSE_HEADER_TOTAL_COUNT]
    ? {
        orders: response.data,
        totalCount: Number(response.headers[API_RESPONSE_HEADER_TOTAL_COUNT] ?? '0'),
      }
    : {
        orders: response.data,
      };
};

export const useGetOrders = (page: number, search: string, sort: SortType) => {
  return useQuery<GetOrdersResponse, ErrorWithMessage>([queryKeys.items, page, search, sort], {
    queryFn: () => getAllOrders(page, search, sort),
    keepPreviousData: true,
  });
};

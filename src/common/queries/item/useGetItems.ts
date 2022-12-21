import { httpService } from 'common/services/http.service';
import { CartItemInterface } from 'common/types';
import { SortType } from 'common/types/sort.type';
import { useQuery } from 'react-query';
import { ErrorWithMessage } from 'utils/errorUtils';
import { apiUrls } from '../apiUrls';
import { queryKeys } from '../queryKeys';
import { GetItemsResponse } from './types';

const API_RESPONSE_HEADER_TOTAL_COUNT = 'x-total-count';

const getAllItems = async (page: number, search: string, sort: SortType) => {
  const response = await httpService.getWithResponseHeaders<CartItemInterface[]>(
    `${apiUrls.getItems}?_page=${page}&_limit=${10}&name_like=${search}&_sort=name&_order=${sort}`,
  );

  return response.headers[API_RESPONSE_HEADER_TOTAL_COUNT]
    ? {
        items: response.data,
        totalCount: Number(response.headers[API_RESPONSE_HEADER_TOTAL_COUNT] ?? '0'),
      }
    : {
        items: response.data,
      };
};

export const useGetItems = (page: number, search: string, sort: SortType) => {
  return useQuery<GetItemsResponse, ErrorWithMessage>([queryKeys.items, page, search, sort], {
    queryFn: () => getAllItems(page, search, sort),
    keepPreviousData: true,
  });
};

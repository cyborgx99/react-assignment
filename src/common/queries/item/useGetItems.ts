import { API_RESPONSE_HEADER_TOTAL_COUNT, DEFAULT_ITEMS_PER_PAGE } from 'common/constants';
import { httpService } from 'common/services/http.service';
import { CartItemInterface } from 'common/types';
import { SortType } from 'common/types/sort.type';
import { useQuery } from 'react-query';
import { ErrorWithMessage } from 'utils/errorUtils';
import { apiUrls } from '../apiUrls';
import { queryKeys } from '../queryKeys';
import { GetItemsResponse } from './types';

const getAllItems = async (page: number, search: string, sort: SortType) => {
  const response = await httpService.getWithResponseHeaders<CartItemInterface[]>(
    `${apiUrls.items}?_page=${page}&_limit=${DEFAULT_ITEMS_PER_PAGE}&name_like=${search}&_sort=name&_order=${sort}`,
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

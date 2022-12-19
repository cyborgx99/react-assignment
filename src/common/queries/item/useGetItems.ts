import { httpService } from 'common/services/http.service';
import { CardItemInterface } from 'common/types';
import { useQuery } from 'react-query';
import { ErrorWithMessage } from 'utils/errorUtils';
import { apiUrls } from '../apiUrls';
import { queryKeys } from '../queryKeys';
import { GetItemsResponse } from './types';

const API_RESPONSE_HEADER_TOTAL_COUNT = 'x-total-count';

const getAllItems = async (page: number) => {
  const response = await httpService.getWithResponseHeaders<CardItemInterface[]>(
    `${apiUrls.getItems}?_page=${page}&_limit=${10}`,
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

export const useGetItems = (page: number) => {
  return useQuery<GetItemsResponse, ErrorWithMessage>([queryKeys.items, page], {
    queryFn: () => getAllItems(page),
    keepPreviousData: true,
  });
};

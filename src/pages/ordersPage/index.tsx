import { DEFAULT_ITEMS_PER_PAGE } from 'common/constants';
import useDebounce from 'common/hooks/useDebounceValue';
import { useGetOrders } from 'common/queries/order/useGetOrders';
import { BaseParagraph } from 'common/styles/baseComponents';
import ContentFilter, { sortOptions } from 'components/contentFilter';
import { FilterInterface, SortOptionValue } from 'components/contentFilter/types';
import { useScrollRef } from 'components/layout/scrollRefContext';
import Pagination from 'components/pagination';
import React, { useCallback, useEffect, useState } from 'react';
import OrderItemCard from './orderItemCard';
import { HeaderTitle, OrdersContainer, OrdersItemsContainer } from './styles';

const OrdersPage = () => {
  const [sort, setSort] = useState<SortOptionValue>(sortOptions[0]);
  const [filter, setFilter] = useState<FilterInterface>({ search: '', page: 1 });
  const debouncedFilter = useDebounce(filter, 500);
  const { scrollRef } = useScrollRef();
  const { data, error } = useGetOrders(debouncedFilter.page, debouncedFilter.search, sort.value);

  const onPageChange = useCallback((page: number) => {
    setFilter((previous) => ({ ...previous, page }));
  }, []);

  useEffect(() => {
    if (!scrollRef?.current) return;
    scrollRef.current.scrollTo?.({ left: 0, top: 0 });
  }, [scrollRef, debouncedFilter.page]);

  return (
    <OrdersContainer>
      <ContentFilter setFilter={setFilter} search={filter.search} sort={sort} setSort={setSort} />
      <HeaderTitle>Your orders: </HeaderTitle>
      <BaseParagraph $color='danger.100'>{error?.message}</BaseParagraph>
      <OrdersItemsContainer>
        {(data?.orders ?? []).map((order) => (
          <OrderItemCard order={order} key={order.id} />
        ))}
      </OrdersItemsContainer>
      <Pagination
        currentPage={filter.page}
        totalCount={data?.totalCount ?? 0}
        itemsPerPage={DEFAULT_ITEMS_PER_PAGE}
        onPageChange={onPageChange}
      />
    </OrdersContainer>
  );
};

export default OrdersPage;

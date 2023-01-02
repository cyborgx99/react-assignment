import { DEFAULT_ITEMS_PER_PAGE } from 'common/constants';
import useDebounce from 'common/hooks/useDebounceValue';
import { useGetOrders } from 'common/queries/order/useGetOrders';
import { BaseParagraph } from 'common/styles/baseComponents';
import ContentFilter, { sortOptions } from 'components/contentFilter';
import { SortOptionValue } from 'components/contentFilter/types';
import { useScrollRef } from 'components/layout/scrollRefContext';
import Pagination from 'components/pagination';
import React, { useCallback, useEffect, useState } from 'react';
import OrderItemCard from './orderItemCard';
import { HeaderTitle, OrdersContainer, OrdersItemsContainer } from './styles';

const OrdersPage = () => {
  const [sort, setSort] = useState<SortOptionValue>(sortOptions[0]);
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500);
  const { scrollRef } = useScrollRef();
  const [page, setPage] = useState(1);

  const { data, error } = useGetOrders(page, debouncedSearch, sort.value);

  const onPageChange = useCallback((page: number) => {
    setPage(page);
  }, []);

  useEffect(() => {
    if (!scrollRef?.current) return;
    scrollRef.current.scrollTo?.({ left: 0, top: 0 });
  }, [scrollRef, page]);

  return (
    <OrdersContainer>
      <ContentFilter setSearch={setSearch} search={search} sort={sort} setSort={setSort} />
      <HeaderTitle>Your orders: </HeaderTitle>
      <BaseParagraph $color='danger.100'>{error?.message}</BaseParagraph>
      <OrdersItemsContainer>
        {(data?.orders ?? []).map((order) => (
          <OrderItemCard order={order} key={order.id} />
        ))}
      </OrdersItemsContainer>
      <Pagination
        currentPage={page}
        totalCount={data?.totalCount ?? 0}
        itemsPerPage={DEFAULT_ITEMS_PER_PAGE}
        onPageChange={onPageChange}
      />
    </OrdersContainer>
  );
};

export default OrdersPage;

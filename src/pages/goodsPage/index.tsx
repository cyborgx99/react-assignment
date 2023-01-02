import useDebounce from 'common/hooks/useDebounceValue';
import { useGetItems } from 'common/queries/item/useGetItems';
import ContentFilter, { sortOptions } from 'components/contentFilter';
import { FilterInterface, SortOptionValue } from 'components/contentFilter/types';
import GoodsItemCard from 'pages/goodsPage/goodsItemCard';
import { useScrollRef } from 'components/layout/scrollRefContext';
import Pagination from 'components/pagination';
import React, { useCallback, useEffect, useState } from 'react';
import { GoodsContainer, GoodsItemsContainer, HeaderSpan, HeaderTitle } from './styles';
import { DEFAULT_ITEMS_PER_PAGE } from 'common/constants';
import { BaseParagraph } from 'common/styles/baseComponents';

const GoodsPage = () => {
  const [sort, setSort] = useState<SortOptionValue>(sortOptions[0]);
  const [filter, setFilter] = useState<FilterInterface>({ search: '', page: 1 });
  const debouncedFilter = useDebounce(filter, 500);
  const { scrollRef } = useScrollRef();
  const { data, error } = useGetItems(debouncedFilter.page, debouncedFilter.search, sort.value);

  const onPageChange = useCallback((page: number) => {
    setFilter((previous) => ({ ...previous, page }));
  }, []);

  useEffect(() => {
    if (!scrollRef?.current) return;
    scrollRef.current.scrollTo?.({ left: 0, top: 0 });
  }, [scrollRef, debouncedFilter.page]);

  return (
    <GoodsContainer>
      <HeaderTitle $color='text.100'>
        Welcome to Food
        <HeaderSpan $color='secondary.100'>Hub</HeaderSpan>
      </HeaderTitle>
      <ContentFilter setFilter={setFilter} search={filter.search} sort={sort} setSort={setSort} />
      <BaseParagraph $color='danger.100'>{error?.message}</BaseParagraph>
      <GoodsItemsContainer>
        {(data?.items ?? []).map((item) => (
          <GoodsItemCard key={item.id} cardItem={item} />
        ))}
      </GoodsItemsContainer>
      <Pagination
        currentPage={debouncedFilter.page}
        totalCount={data?.totalCount ?? 0}
        itemsPerPage={DEFAULT_ITEMS_PER_PAGE}
        onPageChange={onPageChange}
      />
    </GoodsContainer>
  );
};

export default GoodsPage;

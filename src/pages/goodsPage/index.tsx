import useDebounce from 'common/hooks/useDebounceValue';
import { useGetItems } from 'common/queries/item/useGetItems';
import ContentFilter, { sortOptions } from 'components/contentFilter';
import { SortOptionValue } from 'components/contentFilter/types';
import GoodsItemCard from 'pages/goodsPage/goodsItemCard';
import { useScrollRef } from 'components/layout/scrollRefContext';
import Pagination from 'components/pagination';
import React, { useCallback, useEffect, useState } from 'react';
import { GoodsContainer, GoodsItemsContainer, HeaderSpan, HeaderTitle } from './styles';
import { DEFAULT_ITEMS_PER_PAGE } from 'common/constants';

const GoodsPage = () => {
  const [sort, setSort] = useState<SortOptionValue>(sortOptions[0]);
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500);
  const { scrollRef } = useScrollRef();
  const [page, setPage] = useState(1);
  const { data } = useGetItems(page, debouncedSearch, sort.value);

  const onPageChange = useCallback((page: number) => {
    setPage(page);
  }, []);

  useEffect(() => {
    if (!scrollRef?.current) return;
    scrollRef.current.scrollTo({ left: 0, top: 0 });
  }, [scrollRef, page]);

  return (
    <GoodsContainer>
      <HeaderTitle $color='text.100'>
        Welcome to Food
        <HeaderSpan $color='secondary.100'>Hub</HeaderSpan>
      </HeaderTitle>
      <ContentFilter setSearch={setSearch} search={search} sort={sort} setSort={setSort} />
      <GoodsItemsContainer>
        {(data?.items ?? []).map((item) => (
          <GoodsItemCard key={item.id} cardItem={item} />
        ))}
      </GoodsItemsContainer>
      <Pagination
        currentPage={page}
        totalCount={data?.totalCount ?? 0}
        itemsPerPage={DEFAULT_ITEMS_PER_PAGE}
        onPageChange={onPageChange}
      />
    </GoodsContainer>
  );
};

export default GoodsPage;

import { useGetItems } from 'common/queries/item/useGetItems';
import ItemCard from 'components/itemCard';
import { useScrollRef } from 'components/layout/scrollRefContext';
import Pagination from 'components/pagination';
import React, { useEffect, useState } from 'react';
import { GoodsContainer, GoodsItemsContainer } from './styles';

const DEFAULT_ITEMS_PER_PAGE = 10;

const GoodsPage = () => {
  const { scrollRef } = useScrollRef();
  const [page, setPage] = useState(1);
  const { data } = useGetItems(page);

  const onPageChange = (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    if (!scrollRef?.current) return;
    scrollRef.current.scrollTo({ left: 0, top: 0 });
  }, [scrollRef, page]);

  return (
    <GoodsContainer>
      <GoodsItemsContainer>
        {data?.items.map((item) => (
          <ItemCard
            key={item.id}
            cardItem={item}
            onCardActionClick={() => {
              //TODO: Implement adding to cart
              console.log(1);
            }}
          />
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

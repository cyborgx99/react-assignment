import { useCartStore } from 'common/context/cartContextProvider';
import useDebounce from 'common/hooks/useDebounceValue';
import ContentFilter, { sortOptions } from 'components/contentFilter';
import { FilterInterface, SortOptionValue } from 'components/contentFilter/types';
import React, { useEffect, useState } from 'react';
import {
  CartContainer,
  CartItemsContainer,
  contentFilterAdditionalStyles,
  TopContainer,
  TotalContainer,
} from './styles';
import CartItemCard from './cartItemCard';
import { BaseHeaderThree } from 'common/styles/baseComponents';
import { reduceCartToTotalPrice, searchItemResult, sortItems } from './utils';
import Button from 'components/button';
import { useNavigate } from 'react-router-dom';
import { basePathKeys } from 'routes/pathKeys';
import { useScrollRef } from 'components/layout/scrollRefContext';

const CartPage = () => {
  const [sort, setSort] = useState<SortOptionValue>(sortOptions[0]);
  const [filter, setFilter] = useState<FilterInterface>({ search: '', page: 1 });
  const debouncedFilter = useDebounce(filter, 500);
  const [items] = useCartStore((store) => store.items);
  const searchedItems = searchItemResult(items, debouncedFilter.search);
  const sortedItems = sortItems(searchedItems, sort.value);
  const isCheckoutDisabled = items.length === 0;
  const navigate = useNavigate();
  const { scrollRef } = useScrollRef();

  useEffect(() => {
    if (!scrollRef?.current) return;
    scrollRef.current.scrollTo?.({ left: 0, top: 0 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCheckout = () => {
    navigate(basePathKeys.CURRENT_ORDER);
  };

  return (
    <CartContainer>
      <TopContainer>
        <ContentFilter
          additionalStyles={contentFilterAdditionalStyles}
          setFilter={setFilter}
          search={filter.search}
          sort={sort}
          setSort={setSort}
        />
        <TotalContainer>
          <BaseHeaderThree>Total: ${reduceCartToTotalPrice(items)}</BaseHeaderThree>
          <Button
            disabled={isCheckoutDisabled}
            backgroundColor='secondary.100'
            text='Checkout'
            onClick={handleCheckout}
          />
        </TotalContainer>
      </TopContainer>
      <CartItemsContainer>
        {sortedItems.map((item) => (
          <CartItemCard key={item.id} cardItem={item} />
        ))}
      </CartItemsContainer>
    </CartContainer>
  );
};

export default CartPage;

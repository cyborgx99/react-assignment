import { SortType } from 'common/types/sort.type';
import InputComponent from 'components/input';
import SelectComponent from 'components/select';
import { FilterContainer } from './styles';
import React from 'react';
import { ContentFilterPropsInterface, SortOptionValue } from './types';
import { useSearchParams } from 'react-router-dom';

export const sortOptions: SortOptionValue[] = [
  {
    label: 'Ascending',
    value: SortType.asc,
  },
  {
    label: 'Descending',
    value: SortType.desc,
  },
];

const ContentFilter = ({
  setFilter,
  setSort,
  search,
  sort,
  additionalStyles,
}: ContentFilterPropsInterface) => {
  const [_searchParams, setSearchParams] = useSearchParams();

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter((previous) => ({ ...previous, page: 1, search: e.target.value }));
    setSearchParams((previous) => ({ ...previous, page: `1`, search: e.target.value }));
  };
  const onSortChange = (value: SortOptionValue) => {
    setSort(value);
  };

  return (
    <FilterContainer $additionalStyles={additionalStyles}>
      <InputComponent
        onChange={onSearchChange}
        value={search}
        type='text'
        title='Search'
        placeholder='Search'
      />
      <SelectComponent options={sortOptions} value={sort} onChange={onSortChange} />
    </FilterContainer>
  );
};

export default ContentFilter;

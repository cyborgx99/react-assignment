import { CssStyleProps } from 'common/types';
import { SortType } from 'common/types/sort.type';

export interface SortOptionValue {
  label: string;
  value: SortType;
}

export interface FilterInterface {
  page: number;
  search: string;
}

export interface ContentFilterPropsInterface {
  setFilter: React.Dispatch<React.SetStateAction<FilterInterface>>;
  setSort: React.Dispatch<React.SetStateAction<SortOptionValue>>;
  sort: SortOptionValue;
  search: string;
  additionalStyles?: CssStyleProps;
}

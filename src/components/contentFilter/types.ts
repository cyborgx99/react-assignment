import { CssStyleProps } from 'common/types';
import { SortType } from 'common/types/sort.type';

export interface SortOptionValue {
  label: string;
  value: SortType;
}

export interface ContentFilterPropsInterface {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setSort: React.Dispatch<React.SetStateAction<SortOptionValue>>;
  sort: SortOptionValue;
  search: string;
  additionalStyles?: CssStyleProps;
}

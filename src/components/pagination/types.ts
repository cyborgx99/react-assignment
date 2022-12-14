export interface UsePaginationInterface {
  totalCount: number;
  itemsPerPage: number;
  siblingCount: number;
  currentPage: number;
}

export interface PaginationComponentPropsInterface {
  currentPage: number;
  totalCount: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

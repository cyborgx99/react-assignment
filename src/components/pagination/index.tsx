import Icon from 'components/icon';
import React from 'react';
import { PaginationComponentPropsInterface } from './types';
import { usePagination, DOTS } from './usePagination';
import { PaginationButton, PaginationItem, PaginationWrapper } from './styles';

const Pagination = ({
  onPageChange,
  totalCount,
  currentPage,
  itemsPerPage,
}: PaginationComponentPropsInterface) => {
  const siblingCount = 1;
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    itemsPerPage,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNextClick = () => {
    onPageChange(currentPage + 1);
  };

  const onPreviousClick = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];

  return (
    <PaginationWrapper>
      <PaginationItem>
        <PaginationButton
          data-testid='previous'
          disabled={currentPage === 1}
          $isArrow
          onClick={onPreviousClick}
        >
          <Icon title='previous' name='navigate_before' />
        </PaginationButton>
      </PaginationItem>
      {paginationRange.map((pageNumber, i) => {
        if (pageNumber === DOTS) {
          return <li key={i}>&#8230;</li>;
        }
        return (
          <PaginationItem key={i}>
            <PaginationButton
              $isSelected={pageNumber === currentPage}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </PaginationButton>
          </PaginationItem>
        );
      })}
      <PaginationItem>
        <PaginationButton
          data-testid='next'
          disabled={currentPage === lastPage}
          $isArrow
          onClick={onNextClick}
        >
          <Icon title='next' name='chevron_right' />
        </PaginationButton>
      </PaginationItem>
    </PaginationWrapper>
  );
};

export default Pagination;

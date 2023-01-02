import userEvent from '@testing-library/user-event';
import React from 'react';
import { useState } from 'react';
import { render } from 'utils/test-utils';
import Pagination from './index';

const PaginationWrapper = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Pagination
      currentPage={currentPage}
      onPageChange={onPageChange}
      totalCount={100}
      itemsPerPage={10}
    />
  );
};

test('displays buttons for 10 pages if has 100 items and 10 per page', async () => {
  const pagination = render(<PaginationWrapper />);

  const buttonTen = await pagination.findByRole('button', { name: '10' });

  expect(buttonTen).toBeInTheDocument();
});

test('previous page button is disabled if on page 1', async () => {
  const pagination = render(<PaginationWrapper />);

  const previous = await pagination.findByTestId('previous');

  expect(previous).toBeDisabled();
});

test('previous page button is enabled if NOT on page 1', async () => {
  const pagination = render(<PaginationWrapper />);
  const previous = await pagination.findByTestId('previous');
  expect(previous).toBeDisabled();
  const next = await pagination.findByTestId('next');

  await userEvent.click(next);

  expect(previous).toBeEnabled();
});

test('next page button is disabled if on last page', async () => {
  const pagination = render(<PaginationWrapper />);

  const next = await pagination.findByTestId('next');
  const last = await pagination.findByRole('button', { name: '10' });

  expect(next).toBeEnabled();

  await userEvent.click(last);

  expect(next).toBeDisabled();
});

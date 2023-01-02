import { renderHook, waitFor } from '@testing-library/react';
import QueryProvider from 'queryProvider';
import React from 'react';
import { useGetItems } from './useGetItems';
import { server } from 'mocks/server';
import { getItemsResponse } from 'mocks/handlers/items.handlers';
import { SortType } from 'common/types/sort.type';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('fetches correct items', async () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryProvider>{children}</QueryProvider>
  );

  const { result } = renderHook(() => useGetItems(1, '', SortType.asc), { wrapper });

  await waitFor(() => expect(result.current.isSuccess).toBe(true));

  expect(result.current.data).toEqual({
    items: getItemsResponse,
    totalCount: 2,
  });
});

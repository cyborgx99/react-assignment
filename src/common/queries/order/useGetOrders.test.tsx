import { renderHook, waitFor } from '@testing-library/react';
import React from 'react';
import { server } from 'mocks/server';
import { SortType } from 'common/types/sort.type';
import QueryProvider from 'queryProvider';
import { useGetOrders } from './useGetOrders';
import { orders } from 'mocks/handlers/orders.handlers';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('fetches correct orders', async () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryProvider>{children}</QueryProvider>
  );

  const { result } = renderHook(() => useGetOrders(1, '', SortType.asc), { wrapper });

  await waitFor(() => expect(result.current.isSuccess).toBe(true));

  expect(result.current.data).toEqual({
    orders,
    totalCount: 1,
  });
});

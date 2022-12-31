import { act, renderHook, waitFor } from '@testing-library/react';
import React from 'react';
import { server } from 'mocks/server';
import QueryProvider from 'queryProvider';
import { useCreateOrderMutation } from './useCreateOrder';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const mockOrder = {
  deliveryInformation: {
    name: 'bong',
    lastName: '123',
    email: 'cyborgx999@gmail.com',
    phone: '123123',
    address: '123',
    city: '123123',
  },
  date: '2022-12-12',
  orderItems: [
    {
      id: 1,
      photo:
        'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
      name: 'Salad',
      price: 10,
      amount: 1,
    },
  ],
};

test('creates new order correctly', async () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryProvider>{children}</QueryProvider>
  );

  const { result } = renderHook(() => useCreateOrderMutation(), { wrapper });

  await act(async () => {
    await result.current.mutate({
      newOrder: mockOrder,
    });
  });

  // Waiting for the request status to resolve as success, i.e: statusCode = 200
  await waitFor(() => {
    return result.current.isSuccess;
  });

  expect(result.current.isSuccess).toBe(true);

  const oderWithId = { ...mockOrder, id: 1 };

  expect(result.current.data).toEqual(oderWithId);
});

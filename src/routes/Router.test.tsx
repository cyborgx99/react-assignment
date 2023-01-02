import userEvent from '@testing-library/user-event';
import { server } from 'mocks/server';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { cleanup, render, screen } from 'utils/test-utils';
import AppRoutes from './routes';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
afterEach(cleanup);

test('It displays home page by default', async () => {
  await act(() => {
    render(<AppRoutes />);
  });

  screen.getByText('Welcome to Food');
});

test('It can navigate to the cart page', async () => {
  await act(() => {
    render(<AppRoutes />);
  });

  screen.getByText('Welcome to Food');

  const cartButton = screen.getAllByTestId('/cart')[0];

  await act(async () => {
    await userEvent.click(cartButton);
  });

  expect(screen.queryByRole('button', { name: 'Checkout' })).toBeInTheDocument();
});

test('It can navigate to the orders page', async () => {
  await act(() => {
    render(<AppRoutes />);
  });

  const ordersButton = screen.getAllByTestId('/orders')[0];

  await act(async () => {
    await userEvent.click(ordersButton);
  });

  screen.getByText('Your orders:');
});

test('it displays not found page when route does not exist', async () => {
  window.history.pushState({}, 'Bad page', '/badRoute');

  await act(() => {
    render(<AppRoutes />);
  });

  screen.getByText('404');
  screen.getByText('The page has not been found');
});

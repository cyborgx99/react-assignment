import userEvent from '@testing-library/user-event';
import { server } from 'mocks/server';
import React from 'react';
import { cleanup, waitFor } from '@testing-library/react';
import { render, screen } from 'utils/test-utils';
import AppRoutes from './routes';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
beforeEach(() => window.history.pushState({}, 'Home', '/'));
beforeEach(cleanup);

test('It displays home page by default', async () => {
  render(<AppRoutes />);

  await waitFor(() => screen.getByText('Welcome to Food'));
});

test('It can navigate to the cart page', async () => {
  render(<AppRoutes />);

  screen.getByText('Welcome to Food');

  const cartButton = screen.getAllByTestId('/cart')[0];

  await userEvent.click(cartButton);

  await waitFor(() =>
    expect(screen.queryByRole('button', { name: 'Checkout' })).toBeInTheDocument(),
  );
});

test('It can navigate to the orders page', async () => {
  render(<AppRoutes />);

  const ordersButton = screen.getAllByTestId('/orders')[0];

  await userEvent.click(ordersButton);

  await waitFor(() => screen.getByText('Your orders:'));
});

test('it displays not found page when route does not exist', async () => {
  window.history.pushState({}, 'Bad page', '/badRoute');

  render(<AppRoutes />);

  screen.getByText('404');
  screen.getByText('The page has not been found');
});

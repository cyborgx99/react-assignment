import { act, cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { server } from 'mocks/server';
import AppRoutes from 'routes/routes';
import { render } from 'utils/test-utils';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
afterEach(cleanup);

test('Can remove added items from cart', async () => {
  await act(() => {
    render(<AppRoutes />);
  });

  screen.getByText('Welcome to Food');

  const addButton = screen.getAllByRole('button', { name: 'Add to cart' })[0];

  await userEvent.click(addButton);
  await userEvent.click(addButton);

  const cartButton = screen.getAllByTestId('/cart')[0];

  await act(async () => {
    await userEvent.click(cartButton);
  });

  expect(screen.queryByText('Salad')).toBeInTheDocument();
  expect(screen.queryByTestId('amount')).toHaveTextContent('2');
  screen.getByText('Total: $20');

  const removeButton = screen.getAllByRole('button', { name: 'Remove from cart' })[0];

  await userEvent.click(removeButton);

  expect(screen.queryByText('Salad')).toBeNull();
  expect(screen.queryByTestId('amount')).toBeNull();
  screen.getByText('Total: $0');
});

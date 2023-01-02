import userEvent from '@testing-library/user-event';
import NavigationBar from 'components/navigation';
import { server } from 'mocks/server';
import { render, screen, waitFor } from 'utils/test-utils';
import GoodsPage from '.';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('Adds items to cart and increments the cart icon counter', async () => {
  render(
    <>
      <GoodsPage />
      <NavigationBar navType='side' />
    </>,
  );

  expect(screen.getByTestId('cart-counter')).toHaveTextContent('0');

  const addButton = await waitFor(() => screen.getAllByRole('button', { name: 'Add to cart' })[0]);

  await userEvent.click(addButton);
  await userEvent.click(addButton);

  expect(screen.getByTestId('cart-counter')).toHaveTextContent('2');
});

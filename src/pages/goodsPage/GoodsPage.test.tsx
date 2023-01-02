import userEvent from '@testing-library/user-event';
import NavigationBar from 'components/navigation';
import { server } from 'mocks/server';
import { act } from 'react-dom/test-utils';
import { cleanup, render, screen } from 'utils/test-utils';
import GoodsPage from '.';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
afterEach(cleanup);

test('Adds items to cart and increments the cart icon counter', async () => {
  await act(() => {
    render(
      <>
        <GoodsPage />
        <NavigationBar navType='side' />
      </>,
    );
  });

  expect(screen.getByTestId('cart-counter')).toHaveTextContent('0');

  const addButton = screen.getAllByRole('button', { name: 'Add to cart' })[0];

  await userEvent.click(addButton);
  await userEvent.click(addButton);

  expect(screen.getByTestId('cart-counter')).toHaveTextContent('2');
});

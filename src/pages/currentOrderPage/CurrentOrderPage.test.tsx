import userEvent from '@testing-library/user-event';
import { server } from 'mocks/server';
import AppRoutes from 'routes/routes';
import { render, screen, waitFor } from 'utils/test-utils';
import { formData } from './CurrentOrderForm.test';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
beforeEach(() => window.history.pushState({}, 'Home', '/'));

test('It shows an error message if cart is empty', async () => {
  window.history.pushState({}, 'Current order', '/current-order');

  render(<AppRoutes />);

  await waitFor(() => screen.getByText('Oops!'));
});

test('It shows a form is cart has items', async () => {
  render(<AppRoutes />);

  const addButton = await waitFor(() => screen.getAllByRole('button', { name: 'Add to cart' })[0]);

  await userEvent.click(addButton);
  await userEvent.click(addButton);

  const cartButton = screen.getAllByTestId('/cart')[0];

  await userEvent.click(cartButton);

  const checkoutButton = await waitFor(() => screen.getByRole('button', { name: 'Checkout' }));

  await userEvent.click(checkoutButton);

  await waitFor(() => screen.getByText('Order details'));
  await waitFor(() => screen.getByText('Order list:'));
});

test('It fills out a form and sends the order', async () => {
  const { getByLabelText, getByRole } = render(<AppRoutes />);

  const addButton = await waitFor(() => screen.getAllByRole('button', { name: 'Add to cart' })[0]);

  await userEvent.click(addButton);
  await userEvent.click(addButton);

  const cartButton = screen.getAllByTestId('/cart')[0];

  await userEvent.click(cartButton);

  const checkoutButton = await waitFor(() => screen.getByRole('button', { name: 'Checkout' }));

  await userEvent.click(checkoutButton);

  const user = userEvent.setup();

  await user.type(getByLabelText('name'), formData.name);
  await user.type(getByLabelText('lastName'), formData.lastName);
  await user.type(getByLabelText('email'), formData.email);
  await user.type(getByLabelText('phone'), formData.phone);
  await user.type(getByLabelText('address'), formData.address);
  await user.type(getByLabelText('city'), formData.city);

  await user.click(getByRole('button', { name: /Order/i }));

  await waitFor(() => screen.getByText('Success!'));
});

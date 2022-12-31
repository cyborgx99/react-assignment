import CurrentOrderForm from './currentOrderForm';
import userEvent from '@testing-library/user-event';
import { act, cleanup, waitFor } from '@testing-library/react';
import { render } from 'utils/test-utils';

const formData = {
  name: 'John',
  lastName: 'Dee',
  email: 'john.dee@someemail.com',
  phone: '123123',
  address: 'Legnicka 48k',
  city: 'Wroclaw',
};

afterEach(cleanup);

test('rendering and submitting a basic Formik form', async () => {
  const handleSubmit = jest.fn();
  const { getByLabelText, getByRole } = render(
    <CurrentOrderForm onHandleOrder={handleSubmit} isLoading={false} error={{ message: '' }} />,
  );
  const user = userEvent.setup();

  await user.type(getByLabelText('name'), formData.name);
  await user.type(getByLabelText('lastName'), formData.lastName);
  await user.type(getByLabelText('email'), formData.email);
  await user.type(getByLabelText('phone'), formData.phone);
  await user.type(getByLabelText('address'), formData.address);
  await user.type(getByLabelText('city'), formData.city);

  await user.click(getByRole('button', { name: /Order/i }));

  waitFor(() => expect(handleSubmit).toHaveBeenCalledTimes(1));
});

test('shows field is required errors', async () => {
  const handleSubmit = jest.fn();
  const { getAllByText, getByRole } = render(
    <CurrentOrderForm onHandleOrder={handleSubmit} isLoading={false} error={{ message: '' }} />,
  );
  const user = userEvent.setup();

  await act(async () => {
    await user.click(getByRole('button', { name: /Order/i }));
  });

  await waitFor(() => expect(handleSubmit).toHaveBeenCalledTimes(0));

  expect(getAllByText('Field is required')).toHaveLength(6);
});

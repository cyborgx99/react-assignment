import ItemCard from 'components/itemCard';
import userEvent from '@testing-library/user-event';
import { cleanup, render } from 'utils/test-utils';

const cardItem = {
  id: '1',
  photo:
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
  name: 'Salad',
  price: 10,
};

afterEach(cleanup);

test('renders an item card with a title', async () => {
  const itemCard = render(
    <ItemCard
      cardItem={cardItem}
      onCardActionClick={() => {
        console.log(1);
      }}
    />,
  );

  const title = await itemCard.findByTestId('card-title');
  expect(title.textContent).toContain('Salad');
});

test('displays an image', async () => {
  const itemCard = render(
    <ItemCard
      cardItem={cardItem}
      onCardActionClick={() => {
        console.log(1);
      }}
    />,
  );

  const image = (await itemCard.findByTestId('card-image')) as HTMLImageElement;
  expect(image.src).toContain(cardItem.photo);
});

test('clicking a plus button increments the item amount', async () => {
  const itemCard = render(
    <ItemCard
      cardItem={cardItem}
      onCardActionClick={() => {
        console.log(1);
      }}
    />,
  );

  const incrementButton = await itemCard.getByRole('button', { name: '+' });

  const amount = await itemCard.findByTestId('amount');
  expect(amount.textContent).toContain('1');

  await userEvent.click(incrementButton);

  expect(amount.textContent).toContain('2');
});

test('clicking a minus button decrements the item amount', async () => {
  const itemCard = render(
    <ItemCard
      cardItem={cardItem}
      onCardActionClick={() => {
        console.log(1);
      }}
    />,
  );
  const incrementButton = await itemCard.getByRole('button', { name: '+' });
  const decrementButton = await itemCard.getByRole('button', { name: '-' });

  const amount = await itemCard.findByTestId('amount');
  expect(amount.textContent).toContain('1');

  await userEvent.click(incrementButton);
  await userEvent.click(incrementButton);

  expect(amount.textContent).toContain('3');

  await userEvent.click(decrementButton);

  expect(amount.textContent).toContain('2');
});

test('clicking a minus cannot decrement lower than 1', async () => {
  const itemCard = render(
    <ItemCard
      cardItem={cardItem}
      onCardActionClick={() => {
        console.log(1);
      }}
    />,
  );

  const incrementButton = await itemCard.getByRole('button', { name: '-' });

  const amount = await itemCard.findByTestId('amount');
  expect(amount.textContent).toContain('1');

  await userEvent.click(incrementButton);

  expect(amount.textContent).toContain('1');
});

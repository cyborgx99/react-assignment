import { rest } from 'msw';

export const getItemsResponse = [
  {
    id: 1,
    photo:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
    name: 'Salad',
    price: 10,
  },
  {
    id: 2,
    photo:
      'https://images.unsplash.com/photo-1590005024862-6b67679a29fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=440&q=80',
    name: 'Avocado',
    price: 15,
  },
];

export const itemHandlers = [
  rest.get('http://localhost/items', (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(getItemsResponse),
      ctx.set({
        'x-total-count': [`${getItemsResponse.length}`],
      }),
    );
  }),
];

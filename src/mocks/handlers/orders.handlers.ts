import { rest } from 'msw';

export const orders = [
  {
    deliveryInformation: {
      name: '123',
      lastName: 'Kalashnykov',
      email: 'cyborgx999@gmail.com',
      phone: '123123',
      address: '123',
      city: 'qweqwe',
    },
    orderItems: [
      {
        id: 10,
        photo:
          'https://images.unsplash.com/photo-1590005024862-6b67679a29fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=440&q=80',
        name: 'Avocado',
        price: 10,
        amount: 1,
      },
    ],
    date: '2022-12-29T13:50:15.725Z',
    id: 4,
  },
];

export const orderHandlers = [
  rest.get('http://localhost/orders', (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(orders),
      ctx.set({
        'x-total-count': [`${orders.length}`],
      }),
    );
  }),
];

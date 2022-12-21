export interface CartItemInterface {
  id: string;
  photo: string;
  name: string;
  price: number;
}

export interface CartItemInterfaceWithAmount extends CartItemInterface {
  amount: number;
}

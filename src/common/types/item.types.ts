export interface CartItemInterface {
  id: number;
  photo: string;
  name: string;
  price: number;
}

export interface CartItemInterfaceWithAmount extends CartItemInterface {
  amount: number;
}

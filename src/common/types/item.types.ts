export interface CardItemInterface {
  id: string;
  photo: string;
  name: string;
  price: number;
}

export interface CardItemInterfaceWithAmount extends CardItemInterface {
  amount: number;
}

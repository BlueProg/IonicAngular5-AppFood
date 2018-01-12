export interface Food {
  id: number;
  name: string;
  price: number;
  description: string;
  picture: string
}

export interface ListFood {
  id: number;
  name: string;
  picture: string;
  products: [ Food ]
}

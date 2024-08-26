// ADVENTURE -------------
export type AdventureBars = {
  id: number;
  image: string;
  title: string;
  description: string;
  delay: number;
};
// ----------------

// PRODUCTS -------------
export type ProductsInfo = {
  id: string;
  price: number;
};

export type CartProducts = ProductsInfo & {
  count: number;
};

export type AllProducts = {
  id: string;
  image: string;
  name: string;
  desc: string;
  price: number;
};
// ----------------

import { createContext, ReactNode, useContext, useState } from "react";

// CREATE CONTEXT & PROVIDER

type ShoppingCartContext = {
  getProductCount: (id: string) => void;
  increaseProductsCount: (id: string) => void;
  decreaseProductsCount: (id: string) => void;
  removeProductFromCart: (id: string) => void;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: string;
  count: number;
};

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const getProductCount = (id: string) => {
    cartItems.find((item) => item.id === id)?.count || 0;
  };

  return (
    <ShoppingCartContext.Provider value={{}}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

// USE CONTEXT
export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

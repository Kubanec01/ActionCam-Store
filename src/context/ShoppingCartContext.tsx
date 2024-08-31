import { createContext, ReactNode, useContext, useState } from "react";

// CREATE CONTEXT & PROVIDER

type ShoppingCartContext = {
  getProductCount: (id: string) => void;
  increaseProductsCount: (id: string) => void;
  decreaseProductsCount: (id: string) => void;
  removeProductFromCart: (id: string) => void;
  cartProductsCount: number;
  cartProducts: CartProduct[];
};

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type CartProduct = {
  id: string;
  count: number;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);
  console.log(cartProducts);

  const getProductCount = (id: string) => {
    cartProducts.find((p) => p.id === id)?.count || 0;
  };

  const increaseProductsCount = (id: string) => {
    setCartProducts((currProducts) => {
      if (currProducts.find((p) => p.id === id) == null) {
        return [...currProducts, { id, count: 1 }];
      } else {
        return currProducts.map((p) => {
          if (p.id === id) {
            return { ...p, count: p.count + 1 };
          } else {
            return p;
          }
        });
      }
    });
  };

  const decreaseProductsCount = (id: string) => {
    setCartProducts((currProducts) => {
      if (currProducts.find((p) => p.id === id)?.count === 1) {
        return currProducts.filter((p) => p.id !== id);
      } else {
        return currProducts.map((p) => {
          if (p.id === id) {
            return { ...p, count: p.count - 1 };
          } else {
            return p;
          }
        });
      }
    });
  };

  const removeProductFromCart = (id: string) => {
    setCartProducts((currProducts) => {
      return currProducts.filter((p) => p.id !== id);
    });
  };

  const cartProductsCount = cartProducts.reduce(
    (count, product) => product.count + count,
    0
  );
  

  return (
    <ShoppingCartContext.Provider
      value={{
        getProductCount,
        increaseProductsCount,
        decreaseProductsCount,
        removeProductFromCart,
        cartProductsCount,
        cartProducts
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

// USE CONTEXT
export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

// toto je componenta urcena na StoreInventory a na Shoppingcart
// Mozes si z nej brat potrebne funkcie


import { useState } from "react";
import { CartProducts, ProductsInfo } from "../../../types";
import { productsList } from "../../../data/productsList";

export function Products() {
  // STATES
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [product, setProduct] = useState<CartProducts[]>([]);

  const addProduct = ({id, price}: ProductsInfo) => {
    setTotalPrice((prevPrice) => prevPrice + price);
    setProduct((prevProducts) => {
      const currentProduct = prevProducts.find((p) => p.id === id);

      if (currentProduct) {
        return prevProducts.map((p) =>
          p.id === id ? { ...p, count: p.count + 1 } : p
        );
      } else {
        return [...prevProducts, { id, price, count: 1 }];
      }
    });
  };

  const increaseCount = ({id, price}: ProductsInfo) => {
    setProduct((prevProducts) => {
      return prevProducts.map((p) => {
        if (p.id === id) {
          return { ...p, count: p.count + 1 };
        } else {
          return p;
        }
      });
    });
    setTotalPrice((prevPrice) => prevPrice + price);
  };

  const decreaseCount = ({ id, price, count }: CartProducts) => {
    setProduct((prevProducts) => {
      return prevProducts.map((p) => {
        if (p.id === id && p.count > 1) {
          return { ...p, count: p.count - 1 };
        } else {
          return p;
        }
      });
    });

    setTotalPrice((prevPrice) => {
      if (prevPrice > 0 && count > 1) {
        return prevPrice - price;
      } else {
        return prevPrice;
      }
    });
  };

  const removeProduct = ({ id, price, count }: CartProducts) => {
    setProduct((prevProducts) => {
      return prevProducts.filter((p) => p.id !== id);
    });

    const productSubtotal = price * count;

    setTotalPrice((prevPrice) => prevPrice - productSubtotal);
  };


  return (
    <div className="border w-full h-[600px] flex justify-center items-center gap-20">
      {productsList.map((p) => {
        return (
          <div
            key={p.id}
            className="bg-white aspect-square w-[300px] flex justify-center items-center flex-col gap-10"
          >
            <h1>{p.name}</h1>
            <button onClick={() => addProduct({id: p.id, price: p.price})}>
              add to cart
            </button>
            <p>{p.price}</p>
          </div>
        );
      })}
      <div className="bg-blue-500 aspect-square w-[300px] flex justify-center items-center">
        <h1>{`${totalPrice}$`}</h1>
      </div>
      <div>
        <div className="bg-white aspect-square w-[300px] flex justify-center items-center flex-col gap-10">
          {
            product.length > 0 ? (
              product.map((product) => {
                return (
                  <div key={product.id} className="flex flex-col border">
                    <h1>{product.id}</h1>
                    <p>{`${product.price}$`}</p>
                    <p>{product.count}</p>
                    <div className="flex gap-10">
                      <button
                        className="text-5xl"
                        onClick={() => increaseCount({id: product.id, price: product.price})}
                      >
                        +
                      </button>
                      <button
                        className="text-5xl"
                        disabled={product.count === 1 ? true : false}
                        onClick={() => decreaseCount(product)}
                      >
                        -
                      </button>
                    </div>
                    <button
                      onClick={() => removeProduct(product)}
                      className="text-red"
                    >
                      Remove
                    </button>
                  </div>
                );
              })
            ) : (
              <h1>Your cart is empty</h1>
            )
            // tu bude nejaky obrazok smutnej postavicky
          }
        </div>
      </div>
    </div>
  );
}

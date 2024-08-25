import { useState } from "react";
import {CartProducts} from "../../../types"

export function Products() {
  // STATES
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [product, setProduct] = useState<CartProducts[]>([]);
  console.log(product)

  const addProduct = (id: string, price: number) => {
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

  const increaseCount = (id: string, price: number) => {
    setProduct(prevProducts => {
      return prevProducts.map(p => {
        if(p.id === id){
          return {...p, count: p.count + 1}
        } else {
          return p
        }
      })
    })
    setTotalPrice((prevPrice) => prevPrice + price);
  }

  const decreaseCount = (id: string, price: number) => {
    setProduct(prevProducts => {
      return prevProducts.map(p => {
        if(p.id === id && p.count > 0) {
          return {...p, count: p.count - 1};
        } else {
          return p
        }
      })
    })
    setTotalPrice((prevPrice) => prevPrice - price);
  }

  const products = [
    {
      id: "lasagne",
      price: 100,
      name: "Lasagne",
    },
    {
      id: "tortila",
      price: 200,
      name: "Tortila",
    },
  ];

  return (
    <div className="border w-full h-[600px] flex justify-center items-center gap-20">
      {products.map((p) => {
        return (
          <div
            key={p.id}
            className="bg-white aspect-square w-[300px] flex justify-center items-center flex-col gap-10"
          >
            <h1>{p.name}</h1>
            <button onClick={() => addProduct(p.id, p.price)}>
              add to cart
            </button>
            <p>{p.price}</p>
          </div>
        );
      })}
      <div className="bg-blue-500 aspect-square w-[300px] flex justify-center items-center">
        <h1>{totalPrice}</h1>
      </div>
      <div>
      <div className="bg-white aspect-square w-[300px] flex justify-center items-center flex-col gap-10">
        {product.map(product => {
          return (
            <div
            key={product.id}
            className="flex flex-col border">
              <h1>{product.id}</h1>
              <p>{`${product.price}$`}</p>
              <p>{product.count}</p>
              <div className="flex gap-10">
              <button
              onClick={() => increaseCount(product.id, product.price)}
              >+</button>
              <button
              onClick={() => decreaseCount(product.id, product.price)}
              >-</button>
              </div>
            </div>
          )
        })}
        </div>
      </div>
    </div>
  );
}

import { productsList } from "../../../data/productsList";
import { useShoppingCart } from "../../context/ShoppingCartContext";

type CartItemProps = {
  id: string;
  count: number;
};

export function CartItem({ id, count }: CartItemProps) {
  const {
    increaseProductsCount,
    decreaseProductsCount,
    removeProductFromCart,
  } = useShoppingCart();

  const data = productsList.find((p) => p.id === id);

  if (data === null) return null;

  return (
    <li className="w-full h-[200px] flex border overflow-hidden rounded-2xl">
      <div className="border h-full w-[35%]">
        <img className="object-cover h-full w-full" src={data?.image} alt={`${data?.id} image`} />
      </div>
      <div className="border h-full w-[45%] text-white flex items-center justify-center">
        <div className="flex justify-between gap-2 w-[200px] border-2 rounded-2xl">
        <button
        onClick={() => increaseProductsCount(id)}
        className="text-2xl w-full">+</button>
        <p className="text-2xl border text-center w-[300px]">{count}</p>
        <button
        onClick={() => decreaseProductsCount(id)}
        className="text-3xl w-full">-</button>
        </div>
      </div>
      <div></div>
    </li>
  );
}

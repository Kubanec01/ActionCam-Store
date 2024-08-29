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

  const totalDataPrice = Math.round(data!.price * count * 100) / 100;

  if (data === null) return null;

  return (
    <li className="w-full h-[130px] flex border overflow-hidden rounded-2xl mb-4">
      {/* LEFT */}
      <div className="border h-full w-[35%]">
        <img
          className="object-cover h-full mx-auto w-[60%]"
          src={data?.image}
          alt={`${data?.id} image`}
        />
      </div>
      {/* MID */}
      <div className="border h-full w-[35%] text-white flex items-center justify-center">
        <div className="flex justify-between gap-2 w-[200px] border-2 rounded-2xl">
          <button
            onClick={() => increaseProductsCount(id)}
            className="text-2xl w-full"
          >
            +
          </button>
          <p className="text-2xl border text-center w-[300px]">{count}</p>
          <button
            onClick={() => decreaseProductsCount(id)}
            className="text-3xl w-full"
          >
            -
          </button>
        </div>
      </div>
      {/* RIGHT */}
      <div className="flex justify-center items-center">
        <div className="">
        <p className="text-white">{`$${totalDataPrice}`}</p>
        <button
        onClick={() => removeProductFromCart(data!.id)}
        className="text-red-800">
          Remove
        </button>
        </div>
      </div>
    </li>
  );
}

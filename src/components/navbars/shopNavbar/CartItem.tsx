import { productsList } from "../../../data/productsList";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { HiOutlineTrash } from "react-icons/hi2";

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
    <li className="w-full h-[100px] flex border-2 border-[#ffffff1e] bg-[#1a1a1aa2] overflow-hidden rounded-2xl mb-4">
      {/* LEFT */}
      <div className="flex h-full w-[40%] p-1">
        <img
          className="object-contain mx-auto max-w-full h-auto"
          src={data?.image}
          alt={`${data?.id} image`}
        />
        <div>
          <h1 className="text-lg text-white w-[200px] mt-[12px] font-light">{data?.name}</h1>
        </div>
      </div>
      {/* MID */}
      <div className="h-full text-[#ffffff] flex items-center w-[30%] justify-center">
        <div className="flex justify-between items-center w-[140px]">
          <button
            onClick={() => increaseProductsCount(id)}
            className="text-xl w-[40px] aspect-square rounded-[100%] bg-[#1f1f1f]"
          >
            +
          </button>
          <p className="text-2xl text-center">{count}</p>
          <button
            onClick={() => decreaseProductsCount(id)}
            className="text-2xl w-[40px] aspect-square rounded-[100%] bg-[#1f1f1f]"
          >
            -
          </button>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-[30%] h-full flex justify-center items-center">
        <div className="flex justify-center items-center gap-10">
          <p className="text-white text-2xl font-light">{`$${totalDataPrice}`}</p>
          <button
            onClick={() => removeProductFromCart(data!.id)}
            className="text-2xl border border-[#f12525] aspect-square w-12 flex justify-center items-center rounded-[100%]
            text-[#f12525]"
          >
            <HiOutlineTrash />
          </button>
        </div>
      </div>
    </li>
  );
}

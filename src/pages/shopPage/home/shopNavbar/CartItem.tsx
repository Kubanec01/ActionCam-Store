productsList;
import { useShoppingCart } from "../../../../context/ShoppingCartContext";
import { productsList } from "../../../../data/productsList";
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
      <div className="flex h-full w-[44%] p-1">
        <img
          className="object-contain mx-auto min-w-[100px]"
          src={data?.image}
          alt={`${data?.id} image`}
        />
        <div className="md:ml-0 ml-1">
          <h1 className="sm:text-xl text-lg text-white w-[250px] mt-[12px] sm:mb-[8px] mb-[4px] font-light">
            {data?.name}
          </h1>
          <p className="text-white sm:text-xl text-lg font-light">{`$${totalDataPrice}`}</p>
        </div>
      </div>
      {/* MID */}
      <div className="h-full text-[#ffffff] flex sm:mt-0 mt-6 items-center sm:gap-10 gap-1 w-[56%] justify-end">
        <div className="flex md:justify-between justify-center items-center md:w-[140px]">
          <button
            onClick={() => increaseProductsCount(id)}
            className="text-xl w-[40px] aspect-square rounded-[100%] bg-[#1f1f1f] md:block hidden"
          >
            +
          </button>
          <p className="text-2xl">{count}</p>
          <button
            onClick={() => decreaseProductsCount(id)}
            className="text-2xl w-[40px] aspect-square rounded-[100%] bg-[#1f1f1f] md:block hidden"
          >
            -
          </button>
        </div>
        <button
          onClick={() => removeProductFromCart(data!.id)}
          className="sm:text-2xl text-xl sm:border border-[#f12525] aspect-square w-12 flex justify-center items-center rounded-[100%]
            text-[#f12525] sm:mr-10 "
        >
          <HiOutlineTrash />
        </button>
      </div>
    </li>
  );
}

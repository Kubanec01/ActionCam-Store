productsList;
import { useShoppingCart } from "../../../../context/ShoppingCartContext";
import { productsList } from "../../../../data/ProductsList";
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

  const products = productsList()

  const data = products.find((p) => p.id === id);

  const totalDataPrice = Math.round(data!.price * count * 100) / 100;

  if (data === null) return null;

  return (
    <li className="w-full md:h-[100px] h-[84px] flex border-2 border-[#ffffff1e] bg-[#1a1a1aa2] overflow-hidden rounded-2xl mb-4">
      {/* LEFT */}
      <div className="flex h-full w-[44%] p-1">
        {/* IMAGE */}
        <img
          className="object-contain mx-auto min-w-[60px]"
          src={data?.image}
          alt={`${data?.id} image`}
        />
        <div className="md:ml-0 ml-3">
          {/* NAME */}
          <h1 className="md:text-xl text-base text-white w-[250px] mt-[12px] sm:mb-[8px] mb-[4px] md:font-light font-extralight">
            {data?.name}
          </h1>
          {/* PRICE */}
          <p className="text-white md:text-xl text-base md:font-light">{`$${totalDataPrice}`}</p>
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
          {/* COUNT */}
          <p className="md:text-2xl text-xl md:-mr-0 -mr-1">{count}</p>
          <button
            onClick={() => decreaseProductsCount(id)}
            className="text-2xl w-[40px] aspect-square rounded-[100%] bg-[#1f1f1f] md:block hidden"
          >
            -
          </button>
        </div>
        {/* BUTTON */}
        <button
          onClick={() => removeProductFromCart(data!.id)}
          className="md:text-2xl text-lg sm:border border-[#f12525] aspect-square w-12 flex justify-center items-center rounded-[100%]
            text-[#f12525] sm:mr-10 "
        >
          <HiOutlineTrash />
        </button>
      </div>
    </li>
  );
}

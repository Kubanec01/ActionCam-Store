import { motion } from "framer-motion";
import { useShoppingCart } from "../../../../../../context/ShoppingCartContext";
import { productsList } from "../../../../../../data/productsList";
import style from "./accessoryComplement.module.css";

export function AccessoryComplement() {
  const { increaseProductsCount } = useShoppingCart();

  const isProductInList = productsList.some(
    (p) => p.type === "accessory-complement"
  );

  if (!isProductInList) {
    console.error('Product with type "accessory-complement" is not found.');
  }

  return (
    <div className="w-full p-2">
      <div className="mb-[150px] mt-[350px] mx-auto max-w-[1300px]">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-[#ffffff61] text-7xl font-medium shadow-inner"
        >
          Experience Adventures <br /> Together With a <br />{" "}
          <span className="text-[#ffffffc2]">New POV</span>.
        </motion.h1>
      </div>
      {/* PRODUCT SECTION */}
      {productsList.map((p) => {
        if (p.type === "accessory-complement") {
          return (
            <div
              className="rounded-2xl mx-auto max-w-[1300px] bg-[#050505] p-6 shadow-inner"
              key={p.id}
            >
              <div className="flex">
                {/* LEFT */}
                <div className="w-[50%]">
                  <h1 className="text-[#ffffffd5] text-6xl mt-[100px]">
                    {p.name}
                  </h1>
                  <p className="text-[#ffffff8e] text-xl w-[84%] mt-[50px]">
                    {p.desc}
                  </p>
                  <div className="flex w-[300px] justify-between my-[50px]">
                    <p
                      className={`${style.colorText} text-4xl`}
                    >{`$${p.price}`}</p>
                    <button
                      className={`${style.button} text-white text-2xl`}
                      onClick={() => increaseProductsCount(p.id)}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-[50%] mt-[120px]">
                  <img
                    className="object-cover w-full h-full"
                    src={p.image}
                    alt=""
                  />
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

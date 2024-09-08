import { motion } from "framer-motion";
import { useShoppingCart } from "../../../../../../context/ShoppingCartContext";
import { productsList } from "../../../../../../data/productsList";
import style from "./accessoryComplement.module.css";
import { Trans, useTranslation } from "react-i18next";

export function AccessoryComplement() {
  const { t } = useTranslation();

  const { increaseProductsCount } = useShoppingCart();

  const isProductInList = productsList.some(
    (p) => p.type === "accessory-complement"
  );

  if (!isProductInList) {
    console.error('Product with type "accessory-complement" is not found.');
  }

  const productBar = (type: string) => {
    return productsList.map((p) => {
      if (p !== null && p.type === type) {
        return (
          <div
            className="rounded-2xl mx-auto max-w-[1300px] bg-[#050505] p-6 shadow-inner"
            key={p.id}
          >
            <div className="flex lg:flex-row flex-col">
              {/* LEFT */}
              <div className="w-[50%]">
                <h1 className="text-[#ffffffd5] text-6xl mt-[6.25rem]">
                  {p.name}
                </h1>
                <p className="text-[#ffffff8e] text-xl w-[84%] mt-[3.125rem]">
                  {p.desc}
                </p>
                <div className="flex w-[300px] justify-between my-[3.125rem]">
                  <p
                    className={`${style.colorText} text-4xl`}
                  >{`$${p.price}`}</p>
                  <button
                    className={`${style.button} text-white text-2xl`}
                    onClick={() => increaseProductsCount(p.id)}
                  >
                    {t("shop.itemButton")}
                  </button>
                </div>
              </div>
              {/* RIGHT */}
              <div className="w-[50%] mt-[7.5rem]">
                <img
                  className="object-cover w-full h-full"
                  src={p.image}
                  alt={`${p.name}-img`}
                />
              </div>
            </div>
          </div>
        );
      }
    });
  };

  return (
    <div className="w-full p-4">
      <div className="mb-[9.375rem] mt-[350px] mx-auto max-w-[1300px]">
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
          className="text-[#ffffff61] lg:text-7xl text-6xl font-medium shadow-inner"
        >
          <Trans
            i18nKey={"shop.accessoryComplementTitle"}
            components={{
              1: <span className="text-[#ffffffc2]" />,
            }}
          />
        </motion.h1>
      </div>
      {productBar("accessory-complement")}
    </div>
  );
}

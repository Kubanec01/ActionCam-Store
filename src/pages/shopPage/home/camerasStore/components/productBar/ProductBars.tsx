import { motion } from "framer-motion";
import { useShoppingCart } from "../../../../../../context/ShoppingCartContext";
import { productsList } from "../../../../../../data/productsList";
import style from "./productBar.module.css";
import { Trans, useTranslation } from "react-i18next";

export function ProductBars() {
  const { increaseProductsCount } = useShoppingCart();
  const { t } = useTranslation();

  const productBars = (type: string) => {
    return productsList.map((p) => {
      if (p !== null && p.type === type) {
        return (
          <div
            key={p.id}
            className="border-[3px] border-[#ffffff19] lg:w-[500px] w-[350px] rounded-xl bg-[#1515152a]"
          >
            {/* IMG */}
            <div className="w-full lg:h-[310px] h-[240px] lg:my-10 my-6">
              <img
                className="object-contain mx-auto w-full h-full"
                src={p.image}
                alt="goPro-12-img"
              />
            </div>
            {/* DESC */}
            <div className="h-[200px]">
              <h1 className="text-[#ffffffe4] text-3xl text-center font-light">
                {p.name}
              </h1>
              <p className="text-[#ffffff94] lg:text-lg text-base mt-[10px] mx-10 text-center">
                {p.desc}
              </p>
            </div>
            {/* PRICE & BUTTON */}
            <div className="flex justify-between w-[83%] mx-auto my-[3.125rem]">
              <p
                className={`${style.colorText} font-medium lg:text-3xl text-2xl`}
              >{`$ ${p.price}`}</p>
              <button
                onClick={() => increaseProductsCount(p.id)}
                className={`${style.button} text-[#ffffffe4] lg:text-2xl text-xl`}
              >
                {t("shop.itemButton")}
              </button>
            </div>
          </div>
        );
      }
    });
  };

  return (
    <div className="p-3 overflow-hidden mb-[9.375rem]">
      {/* CAMERAS SECTION */}
      <div
      id="cameras-section"
      style={{
        scrollMarginTop: "-300px"
      }}
      className="mx-auto max-w-[1300px] mt-[7.5rem]">
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
          className="text-[#ffffff38] md:text-8xl text-7xl font-[300]"
        >
          <Trans
            i18nKey={"shop.camerasStoreTitle"}
            components={{
              1: <span className="text-[#ffffff72]" />,
              2: <span className="text-[#ffffffac]" />,
            }}
          />
        </motion.h1>
      </div>
      <div className="flex gap-10 mt-[13.125rem] flex-wrap justify-center max-w-[2400px] mx-auto">
        {productBars("camera")}
      </div>
      {/* ACCESSORIES SECTION */}
      <div
      id="accessories-section"
      style={{
        scrollMarginTop: "-320px"
      }}
      className="mx-auto max-w-[1300px] mt-[18.75rem]">
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
          className="text-[#ffffff38] md:text-8xl text-7xl font-[300]"
        >
           <Trans
            i18nKey={"shop.accessoriesStoreTitle"}
            components={{
              1: <span className="text-[#ffffff72]" />,
              2: <span className="text-[#ffffffac]" />,
            }}
          />
        </motion.h1>
      </div>
      <div className="flex gap-10 mt-[13.125rem] flex-wrap justify-center max-w-[2400px] mx-auto">
        {productBars("accessory")}
      </div>
    </div>
  );
}

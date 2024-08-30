import { motion } from "framer-motion";
import { useShoppingCart } from "../../../../../components/context/ShoppingCartContext";
import { productsList } from "../../../../../data/productsList";
import style from "./productBar.module.css";



export function ProductBars() {
  const { increaseProductsCount } = useShoppingCart();

  const productBars = (type: string) => {
    return productsList.map((p) => {
      if (p !== null && p.type === type) {
        return (
          <div
            key={p.id}
            className="border-[3px] border-[#ffffff19] w-[500px] rounded-xl bg-[#1515152a]"
          >
            {/* IMG */}
            <div className="w-full h-[310px] my-10">
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
              <p className="text-[#ffffff94] text-lg mt-[10px] mx-10 text-center">
                {p.desc}
              </p>
            </div>
            {/* PRICE & BUTTON */}
            <div className="flex justify-between w-[83%] mx-auto my-[50px]">
              <p
                className={`${style.colorText} font-medium text-3xl`}
              >{`$ ${p.price}`}</p>
              <button
                onClick={() => increaseProductsCount(p.id)}
                className={`${style.button} text-[#ffffffe4] text-2xl`}
              >
                Add To Card
              </button>
            </div>
          </div>
        );
      }
    });
  };

  return (
    <div className="p-3 overflow-hidden mb-[150px]">
      {/* CAMERAS SECTION */}
      <div className="mx-auto max-w-[1300px] mt-[120px]">
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
          className="text-[#ffffff38] text-8xl font-[300]"
        >
          Ultimate <br />
          <span className="text-[#ffffff72]">Camera</span> <br />
          <span className="text-[#ffffffac]">Collection.</span>
        </motion.h1>
      </div>
      <div className="flex gap-10 mt-[210px] flex-wrap justify-center max-w-[2400px] mx-auto">
        {productBars("camera")}
      </div>
      {/* ACCESSORIES SECTION */}
      <div className="mx-auto max-w-[1300px] mt-[300px]">
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
          className="text-[#ffffff38] text-8xl font-[300]"
        >
          Essential <br />
          <span className="text-[#ffffff72]">Camera </span> <br />
          <span className="text-[#ffffffac]">Accessories.</span>
        </motion.h1>
      </div>
      <div className="flex gap-10 mt-[210px] flex-wrap justify-center max-w-[2400px] mx-auto">
        {productBars("accessory")}
      </div>
    </div>
  );
}

import style from "./newProduct.module.css";
import backgroundImg from "../../../../assets/new-product-bg-img.jpg";
import { IoHardwareChipOutline } from "react-icons/io5";
import { BsBadge8K } from "react-icons/bs";
import { LiaFeatherAltSolid } from "react-icons/lia";
import { LuBatteryFull } from "react-icons/lu";
import image1 from "../../../../assets/gopro13-img.png";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export function NewProduct() {
  const {t} = useTranslation()
  // STYLES
  const liText = "flex flex-row items-center gap-4";
  const liIcon = "text-[2.8rem] bg-[#f25c05ca] p-[0.2rem] rounded-lg";

  return (
    <div
    id="new-product"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        scrollMarginTop: "100px",
      }}
      className="w-full mt-[200px] mb-[20px] p-4"
    >
      <div className="max-w-[1200px] mx-auto my-[40px] relative">
        <motion.img
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
          className="object-cover absolute -right-[80px] top-[130px] w-[580px]"
          src={image1}
          alt="gopro-13-img"
        />
        <h2 className="text-[#fffffff9] w-[100%] font-bold text-[9rem] leading-none">
          New year with a new <br />
          <span className={`${style.coloredTitle}`}>experience</span>
        </h2>
        <p className="text-[#ffffffb3] text-[1.3rem] leading-[1.6rem] w-[50%] mt-[40px]">
          {t('home.newProductDesc')}
        </p>
        <div className="mt-[50px] flex justify-between">
          <div>
            <ul className="text-[#ffffffe9] text-2xl flex flex-col gap-5">
              <motion.li
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.5,
                }}
                transition={{ duration: 0.7 }}
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: { opacity: 1, x: 0 },
                }}
                className={liText}
              >
                <IoHardwareChipOutline className={liIcon} />
                {t('home.newProductProps.1')}
              </motion.li>
              <motion.li
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.5,
                }}
                transition={{ duration: 0.7, delay: 0.2 }}
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: { opacity: 1, x: 0 },
                }}
                className={liText}
              >
                <BsBadge8K className={liIcon} />
                {t('home.newProductProps.2')}
              </motion.li>
              <motion.li
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.5,
                }}
                transition={{ duration: 0.7, delay: 0.3 }}
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: { opacity: 1, x: 0 },
                }}
                className={liText}
              >
                <LiaFeatherAltSolid className={liIcon} />
                {t('home.newProductProps.3')}
              </motion.li>
              <motion.li
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.5,
                }}
                transition={{ duration: 0.7, delay: 0.4 }}
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: { opacity: 1, x: 0 },
                }}
                className={liText}
              >
                <LuBatteryFull className={liIcon} />
                {t('home.newProductProps.4')}
              </motion.li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

import style from "./newProduct.module.css";
import backgroundImg from "../../../../assets/new-product-bg-img.jpg";
import { IoHardwareChipOutline } from "react-icons/io5";
import { BsBadge8K } from "react-icons/bs";
import { LiaFeatherAltSolid } from "react-icons/lia";
import { LuBatteryFull } from "react-icons/lu";
import image1 from "../../../../assets/gopro13-img.png";
import { motion } from "framer-motion";
import { Trans, useTranslation } from "react-i18next";

export function NewProduct() {
  const {t} = useTranslation()
  // STYLES
  const liText = "flex flex-row items-center gap-4";
  const liIcon = "md:text-[2.8rem] text-[2.5rem] bg-[#f25c05ca] p-[0.2rem] rounded-lg";

  return (
    <div
    id="new-product"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        scrollMarginTop: "100px",
      }}
      className="w-full md:mt-[12.5rem] mt-[8.5rem] mb-[1.25rem] p-4 lg:h-auto md:h-[1200px] h-[1030px]"
    >
      <div className="max-w-[1200px] mx-auto my-[2.5rem] relative">
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
          className="object-cover absolute md:-right-[80px] -right-[32px] xl:top-[130px] lg:top-[350px] md:top-[900px] top-[692px] w-[580px] z-10"
          src={image1}
          alt="gopro-13-img"
        />
        <h2 className="text-[#fffffff9] xl:w-[100%] md:w-[80%] font-bold md:text-[9rem] text-[3.7rem] leading-none relative z-50 shadow-inner">
          <Trans
          i18nKey={"home.newProductTitle"}
          components={{
            1: <span className={`${style.coloredTitle}`} />
          }}
          />
        </h2>
        <p className="text-[#ffffffb3] lg:text-[1.3rem] md:text-2xl text-lg lg:leading-[1.6rem] md:w-[50%] w-[90%] md:mt-[2.5rem] mt-[1rem]">
          {t('home.newProductDesc')}
        </p>
        <div className="md:mt-[3.125rem] mt-[4.125rem] flex justify-between">
          <div>
            <ul className="text-[#ffffffe9] md:text-2xl text-xl flex flex-col gap-5">
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

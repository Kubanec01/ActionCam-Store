import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import style from "./aboutLink.module.css"
import { Trans, useTranslation } from "react-i18next";

export function AboutLink() {
const {t} = useTranslation()

  return (
    <div className="w-full md:mt-[18.75rem] mt-[8.75rem]">
      <div className="flex max-w-[1200px] mx-auto p-2">
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
          className="text-[#ffffffa0] lg:text-7xl md:text-6xl text-4xl font-medium shadow-inner"
        >
          <Trans
          i18nKey={"shop.aboutLinkTitle"}
          components={{
            1: <span className="text-[#ffffffea]" />
          }}
          />
        </motion.h1>
      </div>
      <div className="text-[#ffffff] w-full flex justify-center md:mt-[15.625rem] mt-[12.625rem]">
    <Link
        to="/about"
        className={`${style.button} md:text-2xl text-lg font-[400] md:w-[11.25rem] w-[6.25rem] h-[2.5rem] bg-[#53407f] rounded-2xl flex justify-center items-center`}
    >
        {t("shop.aboutLinkButton")}
    </Link>
</div>
    </div>
  );
}

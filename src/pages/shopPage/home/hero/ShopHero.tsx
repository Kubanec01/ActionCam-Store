import { motion } from "framer-motion";
import style from "./shopHero.module.css";
import { Trans, useTranslation } from "react-i18next";

export function ShopHero() {
  const { t } = useTranslation();

  return (
    <div className="mt-[17.5rem]">
      {/* text */}
      <div className="max-w-[1900px] mx-auto h-[13.75rem] flex items-center">
        <h1
          className={`${style.title} text-[#ffffffac] text-8xl ml-12 font-normal opacity-90`}
        >
          <Trans
            i18nKey={"shop.heroTitle"}
            components={{
              1: <span className={style.colorText} />,
            }}
          />
        </h1>
      </div>
      {/* VIDEO */}
      <div className="h-[37.5rem] w-full relative mt-[9.375rem]">
        <video
          loop
          muted
          autoPlay
          className="h-full w-full object-cover absolute top-0 left-0 -z-10 opacity-[0.12]"
          src="https://res.cloudinary.com/dcta0x1vy/video/upload/v1724685506/10727436-hd_1920_1080_24fps_b2ei5k.mp4"
        ></video>
        <div
        style={{
          background: "linear-gradient(to top, #0b0b0b 5%, transparent, #0b0b0b 100%)"
        }}
        className={`w-full h-full z-50 p-2`}>
          <div className="max-w-[1330px] mx-auto h-full flex flex-col justify-center items-end">
            <motion.h2
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
              className="text-[#ffffff6a] text-5xl w-[29.375rem]"
            >
              <Trans
                i18nKey={"shop.heroVideoTitle"}
                components={{
                  1: <span className="text-white" />,
                }}
              />
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={{ duration: 0.7, delay: 0.02 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-[#ffffff72] text-3xl w-[29.25rem] mt-1"
            >
              {t("shop.heroVideoDes")}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}

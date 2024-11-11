import image1 from "../../../../assets/skydiving-img.webp";
import image2 from "../../../../assets/free-diving-img.jpg";
import image3 from "../../../../assets/surfing-img.jpg";
import style from "./adventureBars.module.css";
import type { AdventureBars } from "../../../../types";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export function AdventureBars() {
  const { t } = useTranslation();

  const barsContent: AdventureBars[] = [
    {
      id: 1,
      image: image1,
      title: `${t("about.adventureBars.1.title")}`,
      description: `${t("about.adventureBars.1.desc")}`,
      delay: 0,
    },
    {
      id: 2,
      image: image2,
      title: `${t("about.adventureBars.2.title")}`,
      description: `${t("about.adventureBars.2.desc")}`,
      delay: 0.2,
    },
    {
      id: 3,
      image: image3,
      title: `${t("about.adventureBars.3.title")}`,
      description: `${t("about.adventureBars.3.desc")}`,
      delay: 0.3,
    },
  ];

  return (
    <div>
      {/* TEXT */}
      <div className="lg:mt-[11.25rem] mt-[15.625rem] mb-[3.75rem] flex flex-col md:items-center p-4 max-w-[1200px] mx-auto">
        <h1
          className="lg:text-5xl md:text-6xl text-5xl font-medium text-[#000000c2] relative md:text-center
      before:bg-[#0000001f] before:w-[40%] before:h-[3px] before:rounded-xl before:absolute before:-top-8 before:left-[28.6%]"
        >
          {t("about.homeTitle")}
        </h1>
        <p className="mt-[1.25rem] lg:w-[60%] w-[90%] md:text-center lg:text-lg text-xl font-medium text-[#000000c4]">
          {t("about.homeDesc")}
        </p>
      </div>
      {/* BARS */}
      <div className="flex lg:flex-row flex-col gap-3 justify-center max-w-[1300px] lg:mt-0 mt-[6.25rem] mx-auto p-2">
        {barsContent.map((c) => {
          return (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={{ duration: 0.7, delay: c.delay }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              key={c.id}
              style={{
                backgroundImage: `url(${c.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="lg:h-[40.625rem] h-[300px] lg:w-[33%] shadow-2xl shadow-[#000000a9] rounded-[10px] border-[#434243]"
            >
              <div
                className={`${style.bar} h-full w-full rounded-[10px] flex flex-col justify-end`}
              >
                <h1 className="text-[#fffffffa] text-4xl mx-9 mb-1">
                  {c.title}
                </h1>
                <p className="text-[#ffffff9a] text-xl mx-9 mb-12">
                  {c.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
      {/* TEXT */}
      <div className="md:mx-auto ml-2 max-w-[1300px] mt-[2.813rem] p-2">
        <motion.h1
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
          className="lg:text-3xl md:text-5xl text-4xl md:w-full w-[80%] font-medium text-[#000000b4]"
        >
          {t("about.adventureBars.title")}
        </motion.h1>
        <motion.p
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
          className="lg:text-xl md:text-2xl text-xl font-medium text-[#0000008f] lg:w-[70%] w-[90%] mt-[0.5rem]"
        >
          {t("about.adventureBars.desc")}
        </motion.p>
      </div>
    </div>
  );
}

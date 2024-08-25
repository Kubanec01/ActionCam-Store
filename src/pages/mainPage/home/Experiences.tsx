import { motion } from "framer-motion";
import image1 from "../../../assets/gopro11-img.png";
import image2 from "../../../assets/gopro11-img2.webp";
import { useTranslation } from "react-i18next";

export function Experiences() {
  const {t} = useTranslation()

  return (
    <div className=" mt-[10.625rem] w-[90%] max-w-[1500px] flex justify-center flex-col">
      <div className="flex justify-center items-center flex-col text-center">
        <h1
          className="text-[#fffffff7] text-7xl mb-[30px] w-[43.75rem] relative
        before:absolute before:h-[2px] before:w-[18.75rem] before:bg-[#ffffff7d] before:rounded-xl before:-top-[2.188rem] before:left-[12.5rem]"
        >
          {t('home.experiencesTitle')}
        </h1>
        <p className="w-[50%] mx-auto text-lg text-[#ffffff87] mb-[2.5rem]">
          {t('home.experiencesDescription')}
        </p>
      </div>
      <div className=" w-full flex justify-center">
        <img className=" object-cover w-[52%]" src={image2} alt="gopro11-img" />
        <img className=" object-cover w-[52%]" src={image1} alt="gopro11-small-img" />
      </div>
      <div className=" w-[76.2%] mt-[1.875rem] mx-auto">
        <motion.h2
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
          className="text-[#ffffffea] text-4xl"
        >
          Smaller, Simpler, <br />
          but the same Performance?
        </motion.h2>
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
          className="text-[#ffffff9a] text-xl w-[70%] mt-[0.313rem]"
        >
          {t('home.experiencesDesc2')}
        </motion.p>
      </div>
    </div>
  );
}

import { motion } from "framer-motion";
import image1 from "../../../assets/gopro11-img.png";
import image2 from "../../../assets/gopro11-img2.webp";
import { Trans, useTranslation } from "react-i18next";

export function Experiences() {
  const {t} = useTranslation()

  return (
    <div className="sm:mt-[10.625rem] w-[90%] max-w-[1500px] flex justify-center flex-col p-4">
      <div className="flex justify-center items-center flex-col md:text-center text-left">
        <h1
          className="text-[#fffffff7] md:text-7xl text-5xl mx-auto mb-[30px] max-w-[43.75rem] relative
        before:absolute before:h-[2px] before:w-[18.75rem] md:before:bg-[#ffffff7d] before:rounded-xl before:-top-[2.188rem] before:left-[6.5rem]"
        >
          {t('home.experiencesTitle')}
        </h1>
        <p className="lg:w-[50%] md:w-[80%] mx-auto lg:text-lg text-xl text-[#ffffff87] mb-[2.5rem]">
          {t('home.experiencesDescription')}
        </p>
      </div>
      <div className=" w-full xl:flex justify-center lg:mt-0 sm:mt-[5rem] mt-[3rem]">
        <img className="object-cover sm:mx-auto xl:w-[52%] md:w-[80%] sm:mb-0 mb-[2rem]" src={image2} alt="gopro11-img" />
        <img className="object-cover sm:mx-auto xl:w-[52%] md:w-[80%]" src={image1} alt="gopro11-small-img" />
      </div>
      <div className="md:w-[76.2%] sm:mt-[1.875rem] mt-[4rem] md:mx-auto md:ml-[1.875rem]">
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
          <Trans
          i18nKey={"home.experiencesTitle2"}
          />
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
          className="text-[#ffffff9a] md:text-xl text-xl md:font-normal md:w-[70%] mt-[0.313rem]"
        >
          {t('home.experiencesDesc2')}
        </motion.p>
      </div>
    </div>
  );
}

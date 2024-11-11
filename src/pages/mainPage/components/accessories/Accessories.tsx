import image1 from "../../../../assets/accessory1-img.png";
import imageBg from "../../../../assets/cover-bg-img.jpg";
import image3 from "../../../../assets/accessory2-img.png";
import image4 from "../../../../assets/camera-light-img.png";
import sparkImg from "../../../../assets/spark-img.png";
import style from "./accessories.module.css";
import { motion } from "framer-motion";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function Accessories() {
  const { t } = useTranslation();
  return (
    <div className="md:mt-[140px] w-full">
      {/* VIDEO */}
      <div className="w-full md:h-[800px] h-[600px] relative flex justify-center items-center
      lg:mt-0 md:mt-[12.5rem] mt-[5.5rem]">
        <video
          autoPlay
          loop
          muted
          className="absolute right-0 bottom-0 w-full h-full object-cover z-10"
        >
          <source
            src="https://res.cloudinary.com/dcta0x1vy/video/upload/v1724600264/7454923-hd_1920_1080_25fps_zm1w3u.mp4"
            type="video/mp4"
          />
        </video>
        <div
          className={`${style.textGradient} w-full h-full z-50 flex flex-col justify-end p-4`}
        >
          <div className="lg:w-[60%] max-w-[1200px] mx-auto">
            <h2
              className={`${style.imageTitle} text-[#ffffff] md:text-6xl text-5xl w-[37.5rem]`}
            >
              {t("home.videoAccessoryDescTitle")}
            </h2>
            <p className="text-[#ffffffa1] md:text-3xl text-2xl font-medium sm:w-[37.5rem] w-[18rem] mb-[8.125rem]">
              <Trans
                i18nKey="home.videoAccessoryDescDesc"
                components={{
                  1: <span className="text-white" />,
                  2: <span className="text-white" />,
                }}
              />
            </p>
          </div>
        </div>
      </div>
      {/* HEAD CAMERA CONTAINER */}
      <div
        id="accessories"
        style={{
          scrollMarginTop: "13.75rem",
        }}
        className="w-full flex lg:flex-row flex-col justify-between max-w-[1500px] mx-auto lg:mt-[16.25rem] mt-[10.25rem] p-4"
      >
        {/* TEXT */}
        <div className="lg:w-[70%] w-[80%]">
          <div className="flex flex-col items-start lg:w-[50%] mt-3 2xl:ml-[50%] md:ml-[30%] p-2">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={{ duration: 0.8 }}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}
              className="text-[#fffffff7] relative xl:text-6xl md:text-5xl text-3xl md:before:w-[28.125rem] before:w-[22.125rem] before:h-[0.125rem] before:absolute before:rounded-xl before:bg-[#ffffff4c]
            before:-top-8 before:-left-[12.5rem]"
            >
              <Trans
              i18nKey={"home.headAccessoryTitle1"}
              />
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}
              className="text-[#ffffffaa] md:mt-[20px] mt-[8px] relative md:text-xl lg:w-[90%] after:bg-[#ffffff4c]
              after:absolute after:-bottom-10 after:-right-4 after:w-[12.5rem] after:h-[0.125rem] after:rounded-xl"
            >
              {t("home.headAccessoryDesc1")}
            </motion.p>
          </div>
        </div>
        .{/* IMAGE */}
        <div className="lg:w-[60%] flex lg:justify-start justify-center items-center lg:mt-0 md:mt-[1.875rem] mt-[2.875rem]">
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
            className="aspect-square lg:w-[37.5rem] md:w-[25.25rem] w-[16.25rem]"
            src={image1}
            alt=""
          />
        </div>
      </div>
      {/* LIFE JACKET CONTAINER */}
      <div
        style={{
          backgroundImage: `url(${imageBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="opacity-90 xl:mt-[6.25rem] mt-[12.5rem]"
      >
        <div className={`${style.container} w-full h-full flex justify-center`}>
          <div className="lg:flex flex-row justify-between max-w-[1300px] my-[1.875rem]">
            <div className="lg:w-[50%] md:ml-[3.125rem] ml-[1.125rem] flex flex-col justify-center">
              <h2 className="sm:text-7xl text-4xl font-bold text-[#0000004c] w-[90%] mt-[1.25rem]">
                  <Trans
                  i18nKey={"home.lifeJacketTitle"}
                  components={{
                    1: <span className="text-[#ff6200f6]" />
                  }}
                  />
              </h2>
              <p className="lg:text-xl md:text-2xl text-lg text-[#1a1a1af0] font-medium md:w-[80%] w-[90%] md:mt-[1.25rem] mt-[0.3rem]">
                {t("home.lifeJacketDesc")}
              </p>
              <div className="md:mt-[1.25rem] mt-[1.5rem] md:mb-0 mb-4 ml-[-0.125rem]">
                <Link
                  to="/shop"
                  className={`${style.button} md:text-xl text-lg font-medium py-2 md:px-6 px-5 border-black border-[0.125rem]`}
                >
                  {t("home.lifeJacketButton")}
                </Link>
              </div>
            </div>
            <div className="lg:w-[50%] flex lg:justify-center justify-end items-center">
              <img
                className="aspect-square lg:w-[80%] md:w-[50%] w-[86%] object-cover"
                src={image3}
                alt="Life Jacket image"
              />
            </div>
          </div>
        </div>
      </div>
      {/* CAMERA LIGHT  CONTAINER */}
      <div className="xl:w-[80%] xl:mt-[11.25rem] md:mt-[17.75rem] mt-[10.75rem] max-w-[1400px] mx-auto flex lg:flex-row flex-col justify-between lg:items-start items-center">
        {/* LIGHT IMAGE */}
        <motion.div
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
          className="lg:w-[50%] md:w-[60%] flex justify-center relative"
        >
          <img
            className="object-cover w-[96%] z-50"
            src={image4}
            alt="camera-img"
          />
          <img
            className="absolute object-cover w-[45%] left-[20rem] -top-[4.375rem] 2xl:opacity-10 opacity-0"
            src={sparkImg}
            alt="spark-img"
          />
        </motion.div>
        {/* TEXT */}
        <div className="lg:w-[50%] md:w-[80%] w-[90%]">
          <div className="w-full 2xl:mt-[11.25rem] lg:mt-[8.5rem] md:mt-[2.5rem] mt-[1rem]">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={{ duration: 0.7 }}
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 },
              }}
              className="text-white md:text-4xl text-3xl lg:mx-0 mx-auto lg:text-left text-center mb-[0.625rem] md:w-full w-[90%] relative lg:before:opacity-100 before:opacity-0
            before:w-[30%] before:h-[0.125rem] before:absolute before:bg-[#ffffff4f] before:-top-8 before:left-0 before:rounded-xl"
            >
              {t("home.ledTitle")}
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
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 },
              }}
              className="text-[#ffffff8c] md:text-xl lg:mx-0 mx-auto lg:w-[80%] md:w-[95%] w-[90%] lg:text-left text-center relative lg:after:opacity-100 after:opacity-0 
            after:absolute after:bg-[#ffffff4f] after:-bottom-10 after:right-0 after:w-[80%] after:h-[0.125rem]"
            >
              {t("home.ledDesc")}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}

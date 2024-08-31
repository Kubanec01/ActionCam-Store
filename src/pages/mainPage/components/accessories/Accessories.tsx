import image1 from "../../../../assets/accessory1-img.png";
import imageBg from "../../../../assets/cover-bg-img.jpg";
import image3 from "../../../../assets/accessory2-img.png";
import image4 from "../../../../assets/camera-light-img.png";
import sparkImg from "../../../../assets/spark-img.png";
import style from "./accessories.module.css";
import { motion } from "framer-motion";
import { Trans, useTranslation } from "react-i18next";

export function Accessories() {
  const { t } = useTranslation();
  return (
    <div className="mt-[140px] w-full">
      {/* VIDEO */}
      <div className="w-full h-[50rem] relative flex justify-center items-center">
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
          className={`${style.textGradient} w-full h-full z-50 flex flex-col justify-end`}
        >
          <div className="w-[60%] max-w-[1200px] mx-auto">
            <h2
              className={`${style.imageTitle} text-[#ffffff] text-6xl w-[37.5rem]`}
            >
              {t("home.videoAccessoryDescTitle")}
            </h2>
            <p className="text-[#ffffffa1] text-3xl font-medium w-[37.5rem] mb-[8.125rem]">
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
        className="w-full flex justify-between max-w-[1500px] mx-auto mt-[9.375rem] p-4"
      >
        {/* TEXT */}
        <div className="w-[70%]">
          <div className="flex flex-col items-start w-[50%] mt-3 ml-[50%] p-2">
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
              className="text-[#fffffff7] relative text-6xl mb-[1.25rem] before:w-[28.125rem] before:h-[0.125rem] before:absolute before:rounded-xl before:bg-[#ffffff4c]
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
              className="text-[#ffffffaa] relative text-xl w-[90%] after:bg-[#ffffff4c]
              after:absolute after:-bottom-10 after:-right-4 after:w-[12.5rem] after:h-[0.125rem] after:rounded-xl"
            >
              {t("home.headAccessoryDesc1")}
            </motion.p>
          </div>
        </div>
        .{/* IMAGE */}
        <div className="w-[60%] flex justify-start items-center">
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
            className="aspect-square w-[37.5rem]"
            src={image1}
            alt=""
          />
        </div>
      </div>
      {/* CAMERA COVER CONTAINER */}
      <div
        style={{
          backgroundImage: `url(${imageBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="h-[37.5rem] opacity-90 mt-[6.25rem]"
      >
        <div className={`${style.container} w-full h-full flex justify-center`}>
          <div className=" w-[70%] flex flex-row justify-between max-w-[1300px]">
            <div className="w-[50%] ml-[3.125rem] flex flex-col justify-center">
              <h2 className="text-7xl font-bold text-[#0000004c] w-[80%] mt-[1.25rem]">
                  <Trans
                  i18nKey={"home.lifeJacketTitle"}
                  components={{
                    1: <span className="text-[#ff6200f6]" />
                  }}
                  />
              </h2>
              <p className="text-xl text-[#1a1a1af0] font-medium w-[80%] mt-[1.25rem]">
                {t("home.lifeJacketDesc")}
              </p>
              <div className="mt-[1.25rem] ml-[-0.125rem]">
                <button
                  className={`${style.button} text-xl font-medium border-black border-[0.125rem] w-[8.125rem] h-[2.625rem]`}
                >
                  {t("home.lifeJacketButton")}
                </button>
              </div>
            </div>
            <div className="w-[50%] flex justify-center items-center">
              <img
                className="aspect-square max-w-[500px] object-cover"
                src={image3}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* CAMERA LIGHT  CONTAINER */}
      <div className="w-[80%] mt-[11.25rem] max-w-[1400px] mx-auto flex justify-between">
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
          className="w-[50%] flex justify-center relative"
        >
          <img
            className="object-cover w-[96%] z-50"
            src={image4}
            alt="camera-img"
          />
          <img
            className="absolute object-cover w-[45%] left-[20rem] -top-[4.375rem] opacity-10"
            src={sparkImg}
            alt="spark-img"
          />
        </motion.div>
        {/* TEXT */}
        <div className="w-[50%]">
          <div className="w-full mt-[11.25rem]">
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
              className="text-white text-4xl mb-[0.625rem] relative 
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
              className="text-[#ffffff8c] text-xl w-[80%] relative 
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

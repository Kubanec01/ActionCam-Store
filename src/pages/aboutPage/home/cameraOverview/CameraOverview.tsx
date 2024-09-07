import style from "./cameraoverview.module.css";
import image1 from "../../../../assets/gopro11-about-img.png";
import { Link } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export function CameraOverview() {
  const { t } = useTranslation();

  // ! od 1024 nizsie daj foktu kamery a text pod seba

  return (
    <div className="w-full mt-[17.5rem]">
      {/* CAMERA */}
      <div className="max-w-[1300px] border border-red-600 mx-auto flex">
        <div className="flex justify-right">
          <motion.img
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
            className="object-contain w-[2300px]"
            src={image1}
            alt="goPro-11-img"
          />
        </div>
        {/* TEXT */}
        <div
          style={{
            scrollMarginTop: "18.75rem",
          }}
          id="camera-overview"
          className="ml-[3.125rem] border border-red-600"
        >
          <motion.h1
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
            className="xl:text-5xl text-4xl font-medium text-[#00000048]"
          >
            <Trans
              i18nKey={"about.cameraTitle"}
              components={{
                1: <span className="text-[#00000086]" />,
              }}
            />
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
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
            className="xl:text-xl text-lg font-medium mt-3 xl:w-[80%] w-[98%] text-[#000000e0]"
          >
            {t("about.cameraDesc")}
          </motion.p>
        </div>
      </div>
      {/* VIDEO */}
      <div className="w-full h-[1000px] relative mt-[9.375rem]">
        <video
          autoPlay
          loop
          muted
          className="absolute right-0 bottom-0 z-0 w-full h-full object-cover"
        >
          <source
            src="https://res.cloudinary.com/dcta0x1vy/video/upload/v1724600911/surfing-video_py9pne.mp4"
            type="video/mp4"
          />
        </video>
        <div
          className={`${style.videoContainer} w-full h-full flex absolute top-0 left-0 justify-center items-center p-6`}
        >
          <div className="max-w-[1100px] mt-[6.25rem]">
            <h2 className={`${style.videoTitle} text-white text-5xl`}>
              {t("about.adventureVideo.title")}
            </h2>
            <p className="text-[#ffffffb8] text-2xl w-[60%] mt-3">
              {t("about.adventureVideo.desc")}
            </p>
            <button
              style={{
                borderRadius: "0 10px",
              }}
              className={`${style.videoButton} border-white border text-white text-2xl font-light w-[8.75rem] h-[3.125rem] mt-[4.375rem]`}
            >
              <Link to="/">{t("about.videoButton")}</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

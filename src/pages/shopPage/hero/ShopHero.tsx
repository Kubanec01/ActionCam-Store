import { motion } from "framer-motion";
import style from "./shopHero.module.css";

export function ShopHero() {
  return (
    <div className="mt-[280px]">
      {/* text */}
      <div className="max-w-[1900px] mx-auto h-[220px] flex items-center">
        <h1
          className={`${style.title} text-[#b9b8b893] text-8xl ml-12 font-normal opacity-90`}
        >
          Capture Anything,
          <span className={style.colorText}> Anywhere</span>.
        </h1>
      </div>
      {/* VIDEO */}
      <div className="h-[600px] w-full relative mt-[150px]">
        <video
          loop
          muted
          autoPlay
          className="h-full w-full object-cover absolute top-0 left-0 -z-10 opacity-[0.12]"
          src="https://res.cloudinary.com/dcta0x1vy/video/upload/v1724685506/10727436-hd_1920_1080_24fps_b2ei5k.mp4"
        ></video>
        <div className={`${style.videoBackground} w-full h-full z-50 p-2`}>
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
              className="text-[#ffffff6a] text-5xl w-[470px]"
            >
              Awaken the <span className="text-white">Beast Within</span>
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
              className="text-[#ffffff72] text-3xl w-[468px] mt-1"
            >
              Unleash raw power. Feel the adrenaline, embrace the wild, and let
              the beast within take control!
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}

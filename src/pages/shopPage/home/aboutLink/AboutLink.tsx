import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import style from "./aboutLink.module.css"

export function AboutLink() {
  return (
    <div className="w-full mt-[300px]">
      <div className="flex max-w-[1200px] mx-auto">
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
          className="text-[#ffffffa0] text-7xl font-medium shadow-inner"
        >
          Want to know <br /> more{" "}
          <span className="text-[#ffffffea]">about</span> the camera?
        </motion.h1>
      </div>
      <div className="text-[#ffffff] w-full flex justify-center mt-[250px]">
    <Link
        to="/about"
        className={`${style.button} text-2xl font-[400] w-[180px] h-[40px] bg-[#53407f] rounded-2xl flex justify-center items-center`}
    >
        See Specs
    </Link>
</div>
    </div>
  );
}

import { useScreenSize } from "../../../../hooks/useScreenSize";
import style from "./hero.module.css";

export function Hero() {
  const windowWidth = useScreenSize();

  return (
    <div className="w-full h-[43.75rem] relative">
      <video
        loop
        autoPlay
        muted
        className="absolute top-0 left-0 object-cover w-full h-full -z-10 opacity-90"
      >
        <source
          src="https://res.cloudinary.com/dcta0x1vy/video/upload/v1724600599/motocross-video_l204qb.mp4"
          type="video/mp4"
        />
      </video>
      <div
        className={`${style.videoGradient} w-full h-full relative overflow-hidden`}
      >
        {windowWidth > 1600 ? (
          <h1
            className={`${style.pageTitle} text-[#fffffff1] text-[11.5rem] uppercase font-bold absolute -bottom-[8%] -left-2`}
          >
            Capture the Thrill
          </h1>
        ) : (
          <h1 className={`${style.pageTitle} text-[#fffffff1] lg:text-[11.5rem] sm:text-[8.4rem] text-[6.2rem] lg:leading-[9.3rem] sm:leading-[6.8rem] leading-[5rem] uppercase font-bold absolute lg:bottom-[0.375rem] sm:bottom-[0.313rem] bottom-[0.225rem] -left-1`}>
            Capture <br />
            the Thrill
          </h1>
        )}
      </div>
    </div>
  );
}

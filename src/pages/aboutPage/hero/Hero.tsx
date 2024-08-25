import style from "./hero.module.css";

export function Hero() {
  return (
    <div className="w-full h-[43.75rem] relative">
      <video
        loop
        autoPlay
        muted
        className="absolute top-0 left-0 object-cover w-full h-full -z-10 opacity-90"
      >
        <source src="https://res.cloudinary.com/dcta0x1vy/video/upload/v1724600599/motocross-video_l204qb.mp4" type="video/mp4" />
      </video>
      <div className={`${style.videoGradient} w-full h-full relative overflow-hidden`}>
        <h1
          className={`${style.pageTitle} text-[#fffffff1] text-[11.5rem] uppercase font-bold absolute -bottom-[8%] -left-2`}
        >
          Capture the Thrill
        </h1>
      </div>
    </div>
  );
}

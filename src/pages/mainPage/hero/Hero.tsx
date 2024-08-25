import style from "./hero.module.css";

export function Hero() {
  return (
    <div
      className={`${style.container} h-[56.25rem] flex justify-center items-center relative`}
    >
      <video
        autoPlay
        loop
        muted
        className="absolute right-0 bottom-0 -z-1 w-full h-full object-cover"
      >
        <source
          src="https://res.cloudinary.com/dcta0x1vy/video/upload/v1724600781/night-sky_xtfku9.mp4"
          type="video/mp4"
        />
      </video>
      {/* TEXT CONTAINER */}
      <div
        className={`${style.textGradient} w-full h-full flex justify-center items-end z-50`}
      >
        {/* TEXT BODY */}
        <div className=" flex flex-col items-center justify-center text-center mb-[4.375rem]">
          <h1 className="text-[#ffffffe9] text-6xl mb-[1.25rem] leading-none">
            Capture your passion
          </h1>
          <p className="text-[#ffffff87] text-2xl">
            Don't keep your experiences to yourself. <br />
            Record, Share, Enjoy.
          </p>
        </div>
      </div>
    </div>
  );
}

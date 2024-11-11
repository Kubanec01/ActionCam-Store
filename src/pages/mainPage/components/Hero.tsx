import { Trans, useTranslation } from "react-i18next";

export function Hero() {

  const {t} = useTranslation()

  return (
    <div
      className="lg:h-[56.25rem] md:h-[50.25rem] h-[30.25rem] flex justify-center items-center relative"
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
        style={{
          background: "linear-gradient(to top, #0b0b0b 10%, transparent)",
        }}
        className="w-full h-full flex justify-center items-end z-50"
      >
        {/* TEXT BODY */}
        <div className="flex flex-col items-center justify-center text-center md:mb-[4.375rem]">
          <h1 className="text-[#ffffffe9] md:text-6xl text-3xl leading-none">
            {t('home.heroTitle')}
          </h1>
          <p className="text-[#ffffff87] md:text-2xl text-lg md:w-full w-[90%] md:mt-[1.25rem] mt-[0.5rem]">
            <Trans
            i18nKey="home.heroDesc"
             />
          </p>
        </div>
      </div>
    </div>
  );
}

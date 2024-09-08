import Spline from "@splinetool/react-spline";
import { Trans, useTranslation } from "react-i18next";


export function CameraFeature () {
  const {t} = useTranslation()

    return (
        <div className="flex justify-between max-w-[1300px] h-[600px] mx-auto mt-10 relative">
        <div className="lg:w-[50%] w-[60%]">
          <h1 className="md:text-7xl text-6xl text-[#d0d0d05e] mt-[6.875rem]">
            <Trans
            i18nKey={"shop.cameraFeatureTitle"}
            components={{
              1: <span className="text-[#ffffffbe]" />
            }}
            />
            </h1>
          <p className="text-2xl text-[#ffffff9e] xl:mt-[5rem] mt-10 lg:w-[85%]">
            {t("shop.cameraFeatureDesc")}
          </p>
        </div>
        <div className="xl:pointer-events-auto pointer-events-none aspect-square w-[37.5rem] absolute top-0 lg:right-0 sm:-right-[310px] -right-[410px]">
          <Spline scene="https://prod.spline.design/l9o5Bi-2FnsqSQgR/scene.splinecode" />
        </div>
      </div>
    )
}
import Spline from "@splinetool/react-spline";
import { Link } from "react-router-dom";
import style from "./globalSales.module.css"
import { useTranslation } from "react-i18next";

export function GlobalSales() {
const {t} = useTranslation()

  return (
    <div className="w-full relative mt-[2.5rem]">
      <div className="h-[47.5rem] relative">
        <Spline
          className="absolute top-0 left-0 opacity-60"
          scene="https://prod.spline.design/AUXjUcJAi-8z1Efl/scene.splinecode"
        />
        <div
          style={{
            background: "linear-gradient(to top, black, transparent, black)",
          }}
          className="w-full h-full relative z-[100] flex justify-center items-center"
        >
          <div className="max-w-[1400px]  px-2">
            <h1
              className="text-[#fee3f9] lg:text-[8rem] md:text-[7rem] text-[6rem] leading-none uppercase font-bold"
            >
              {t("shop.globalSalesTitle")}
            </h1>
            <div className="lg:mt-[2.5rem] mt-[1.5rem] mb-[7.5rem]">
              <button
              style={{
                borderRadius: "10px 3px"
              }}
              className={`${style.button} text-[#ffedfb] border-[#ffedfb] border-2 lg:text-2xl text-xl lg:w-[8.125rem] w-[7.125rem] h-[3.125rem]`}>
                <Link to="/">
                {t("shop.globalSalesButton")}
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

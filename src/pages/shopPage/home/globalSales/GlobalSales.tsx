import Spline from "@splinetool/react-spline";
import { Link } from "react-router-dom";
import style from "./globalSales.module.css"

export function GlobalSales() {
  return (
    <div className="w-full relative mt-[40px]">
      <div className="h-[760px] relative">
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
          <div className="max-w-[1400px]">
            <h1
              className="text-[#fee3f9] text-[8rem] leading-none uppercase font-bold"
            >
              Over 3 million sales for 2023
            </h1>
            <div className="mt-[40px] mb-[120px]">
              <button
              style={{
                borderRadius: "10px 3px"
              }}
              className={`${style.button} text-[#ffedfb] border-[#ffedfb] border-2 text-2xl w-[130px] h-[50px]`}>
                <Link to="/">
                  Upcoming
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { CameraFeature } from "./CameraFeature";
import { productsList } from "../../../../data/productsList";
import style from "./cameraStore.module.css";
// import { useState } from "react";

export function CamerasStore() {
  // const [totalPrice, setTotalPrice] = useState<number>(0);

  //  FUNCTIONS
  // const mathRounding = (num: number) => {
  //   return Math.round(num * 100) / 100;
  // };

  // const addProduct = (price: number) => {
  //   setTotalPrice((prevPrice) => mathRounding(prevPrice + price));
  // };


  return (
    <>
      <div
        id="cameras-store"
        className="mb-[1000px] w-full bg-[#000000a2] mt-[140px] p-4"
      >
        <CameraFeature />
        <div className="flex justify-center mt-[100px]">
          {productsList.map((p) => {
            return (
              <div
                key={p.id}
                className="border-[3px] border-[#ffffff19] w-[500px] rounded-xl bg-[#1515152a]"
              >
                {/* IMG */}
                <div className="w-full h-[310px] my-10">
                  <img
                    className="object-cover mx-auto w-full h-full"
                    src={p.image}
                    alt="goPro-12-img"
                  />
                </div>
                {/* DESC */}
                <div>
                  <h1 className="text-[#ffffffe4] text-3xl text-center font-light">
                    {p.name}
                  </h1>
                  <p className="text-[#ffffff94] text-lg mt-[10px] mx-10 text-center">
                    {p.desc}
                  </p>
                </div>
                {/* PRICE & BUTTON */}
                <div className="flex justify-between w-[83%] mx-auto my-[50px]">
                  <p
                    className={`${style.colorText} font-medium text-3xl`}
                  >{`$ ${p.price}`}</p>
                  <button
                    className={`${style.button} text-[#ffffffe4] text-2xl`}
                  >
                    Add To Card
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

import { CameraFeature } from "./CameraFeature";
import { ProductBars } from "./productBar/ProductBars";
// import { useState } from "react";

export function CamerasStore() {

  return (
    <>
      <div
        id="cameras-store"
        className="mb-[1000px] w-full bg-[#000000a2] mt-[140px] p-4"
      >
        <CameraFeature />
        <ProductBars />
      </div>
    </>
  );
}

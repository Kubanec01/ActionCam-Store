import { CameraFeature } from "./CameraFeature";
import { ProductBars } from "./productBar/ProductBars";
// import { useState } from "react";

export function CamerasStore() {

  return (
    <>
      <div
        id="cameras-store"
        className="w-full bg-[#000000e2] mt-[140px] p-4"
      >
        <CameraFeature />
        <ProductBars />
      </div>
    </>
  );
}

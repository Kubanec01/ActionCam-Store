import { AccessoryComplement } from "./components/accessoryComplement/AccessoryComplement";
import { CameraFeature } from "./components/CameraFeature";
import { ProductBars } from "./components/productBar/ProductBars";
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
      <div>
        <AccessoryComplement />
      </div>
    </>
  );
}

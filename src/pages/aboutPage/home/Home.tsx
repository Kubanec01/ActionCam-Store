import { AdventureBars } from "./adventureBars/AdventureBars";
import { CameraOverview } from "./cameraOverview/CameraOverview";

export function Home() {
  return (
    <div className="bg-[#fffffff1] w-full overflow-hidden">
        <AdventureBars />
        <CameraOverview />
    </div>
  );
}
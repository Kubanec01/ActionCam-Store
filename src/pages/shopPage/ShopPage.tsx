import { ShopNavbar } from "../../components/navbars/shopNavbar/ShopNavbar"
import { ShopHero } from "./home/hero/ShopHero"
import { CamerasStore } from "./home/camerasStore/CamerasStore"
import { GlobalSales } from "./home/globalSales/GlobalSales"
import { AboutLink } from "./home/aboutLink/AboutLink"


export function ShopPage() {


    return (
        <>
        <div className="overflow-hidden">
            <ShopNavbar />
            <ShopHero />
            <CamerasStore />
            <AboutLink />
            <GlobalSales />
        </div>
        </>
    )
}
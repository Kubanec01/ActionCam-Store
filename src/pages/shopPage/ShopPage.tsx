import { ShopHero } from "./home/hero/ShopHero"
import { CamerasStore } from "./home/camerasStore/CamerasStore"
import { GlobalSales } from "./home/globalSales/GlobalSales"
import { AboutLink } from "./home/aboutLink/AboutLink"
import { ShopNavbar } from "./home/shopNavbar/ShopNavbar"


function ShopPage() {


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

export default ShopPage
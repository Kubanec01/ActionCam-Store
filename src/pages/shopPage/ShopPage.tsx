import { ShoppingCartProvider } from "../../components/context/ShoppingCartContext"
import { ShopNavbar } from "../../components/navbars/shopNavbar/ShopNavbar"
import { ShopHero } from "./hero/ShopHero"
import { CamerasStore } from "./home/camerasStore/CamerasStore"


export function ShopPage() {


    return (
        <>
        <div className="overflow-hidden">
            <ShopNavbar />
            <ShopHero />
            <CamerasStore />
        </div>
        </>
    )
}
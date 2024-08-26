import { ShopNavbar } from "../../components/navbars/shopNavbar/ShopNavbar"
import { ShopHero } from "./ShopHero"


export function ShopPage() {
    return (
        <div className="overflow-hidden">
            <ShopNavbar />
            <ShopHero />
        </div>
    )
}
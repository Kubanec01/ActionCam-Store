import { ShopNavbar } from "../../components/navbars/shopNavbar/ShopNavbar"
import { Products } from "./home/products"
import { ShopHero } from "./ShopHero"


export function ShopPage() {
    return (
        <div className="overflow-hidden">
            <ShopNavbar />
            <ShopHero />
            <Products />
        </div>
    )
}
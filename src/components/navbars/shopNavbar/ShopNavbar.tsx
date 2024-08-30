import { Button, Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import style from "./shopNavbar.module.css";
import { IoCameraOutline } from "react-icons/io5";
import { AiOutlineStar } from "react-icons/ai";
import { HiOutlineHome } from "react-icons/hi2";
import { AiOutlineQuestion } from "react-icons/ai";
import { PiShoppingCartLight } from "react-icons/pi";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { useState } from "react";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import { productsList } from "../../../data/productsList";
import emptyCartImg from "../../../assets/empty-cart-img.png"

export function ShopNavbar() {
  // STYLES
  const link = `${style.link}`;
  const linkIcon = "mx-auto text-3xl";

  const { cartProductsCount, cartProducts } = useShoppingCart();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const productsCount = cartProductsCount;

  const priceCalc = cartProducts.reduce((total, currProduct) => {
    const product = productsList.find((p) => p.id === currProduct.id);
    return total + (product?.price || 0) * currProduct.count;
  }, 0);
  const totalPrice = Math.round((priceCalc * 100)) / 100;

  return (
    <Navbar className="fixed z-[1100] w-full px-2">
      <Container
        style={{
          borderRadius: "10px 10px 20px 20px",
          backdropFilter: "blur(10px)",
        }}
        className={`${isOpen ? style.openBar : style.closedBar}
         max-w-[1000px] mx-auto flex flex-col justify-between mt-[1.25rem] bg-[#1a19198f]
        border-2 border-[#f1f1f193] overflow-hidden`}
      >
        <Nav className="mx-auto w-[90%] h-[90px] flex items-center justify-center text-[#ffffffac] text-lg gap-32">
          <a className={`${link} text-center`} href="#">
            <IoCameraOutline className={linkIcon} />
            Cameras
          </a>
          <a className={link} href="#">
            <AiOutlineStar className={linkIcon} />
            Accessories
          </a>
          <Link className={link} to="/about">
            <AiOutlineQuestion className={linkIcon} />
            About
          </Link>
          <Link className={link} to="/">
            <HiOutlineHome className={linkIcon} />
            Home
          </Link>
          <div className="relative">
            <Button
              onClick={() => setIsOpen((prevState) => !prevState)}
              className={`${style.shoppingCartIcon}`}
            >
              {isOpen ? (
                <IoReturnUpBackOutline className="mx-auto text-[2.8rem]" />
              ) : (
                <PiShoppingCartLight className="mx-auto text-[2.8rem]" />
              )}
            </Button>
            {productsCount > 0 ? (
              <span
                className="absolute bg-[#5b29d0] text-white border-2 border-[#1a1919] rounded-[100%] w-[26px] h-[26px] 
           text-sm top-0 -right-2 flex justify-center items-center font-medium"
              >
                {productsCount < 100 ? productsCount : "99+"}
              </span>
            ) : (
              ""
            )}
          </div>
        </Nav>
        {isOpen ? (
          <div className="w-full h-[84%]">
            <div className="h-[88%] flex justify-normal mx-4 ">
              <ul
                className={`${style.shoppingCartList} w-full h-full overflow-y-scroll pr-2`}
              >
                {productsCount > 0 ? 
                cartProducts.map((p) => {
                  return <CartItem key={p.id} {...p} />;
                })
                :
                <div className="w-[60%] h-[80%] mx-auto">
                <img
                className="opacity-[0.09] w-full h-full object-cover"
                src={emptyCartImg} alt="empty-cart-img" />
              </div>
              }
              </ul>
            </div>
            <div className="h-full flex justify-end">
              <p className="text-white text-3xl mr-6 mt-5">{`$${totalPrice}`}</p>
            </div>
          </div>
        ) : (
          ""
        )}
      </Container>
    </Navbar>
  );
}

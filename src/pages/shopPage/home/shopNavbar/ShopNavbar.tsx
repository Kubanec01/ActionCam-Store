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
import { CartItem } from "./CartItem";
import emptyCartImg from "../../../../assets/empty-cart-img.png";
import { useTranslation } from "react-i18next";
import { useShoppingCart } from "../../../../context/ShoppingCartContext";
import { productsList } from "../../../../data/productsList";
import { useScreenSize } from "../../../../hooks/useScreenSize";

export function ShopNavbar() {
  const { t } = useTranslation();

  // STYLES
  const link = `${style.link}`;
  const linkIcon = "mx-auto text-3xl";

  const { cartProductsCount, cartProducts } = useShoppingCart();
  const screenWindow = useScreenSize();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const productsCount = cartProductsCount;

  const priceCalc = cartProducts.reduce((total, currProduct) => {
    const product = productsList.find((p) => p.id === currProduct.id);
    return total + (product?.price || 0) * currProduct.count;
  }, 0);
  const totalPrice = Math.round(priceCalc * 100) / 100;

  return (
    <Navbar className="lg:fixed z-[1100] w-full px-2">
      {screenWindow > 870 ? (
        <Container
          style={{
            borderRadius: "10px 10px 20px 20px",
            backdropFilter: "blur(10px)",
          }}
          className={`${isOpen ? style.openBar : style.closedBar}
         max-w-[1000px] mx-auto flex flex-col justify-between mt-[1.25rem] bg-[#1a19198f]
        border-2 border-[#f1f1f193] overflow-hidden`}
        >
          <Nav className="mx-auto w-[90%] h-[5.625rem] flex items-center justify-center text-[#ffffffac] text-lg gap-32">
            <a className={`${link} text-center`} href="#cameras-section">
              <IoCameraOutline className={linkIcon} />
              {t("navbar.cameras")}
            </a>
            <a className={link} href="#accessories-section">
              <AiOutlineStar className={linkIcon} />
              {t("navbar.accessories")}
            </a>
            <Link className={link} to="/about">
              <AiOutlineQuestion className={linkIcon} />
              {t("navbar.about")}
            </Link>
            <Link className={link} to="/">
              <HiOutlineHome className={linkIcon} />
              {t("navbar.home")}
            </Link>
            <div className="relative">
              <Button
                onClick={() => setIsOpen((isOpen) => !isOpen)}
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
                  className="absolute bg-[#5b29d0] text-white border-2 border-[#1a1919] rounded-[100%] w-[1.625rem] aspect-square 
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
                  {productsCount > 0 ? (
                    cartProducts.map((p) => {
                      return <CartItem key={p.id} {...p} />;
                    })
                  ) : (
                    <div className="w-[60%] h-[80%] mx-auto">
                      <img
                        className="opacity-[0.09] w-full h-full object-cover"
                        src={emptyCartImg}
                        alt="empty-cart-img"
                      />
                    </div>
                  )}
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
      ) : (
        <Container
          style={{
            borderRadius: "10px 10px 20px 20px",
            backdropFilter: "blur(10px)",
          }}
          className={`${isOpen ? style.mdOpenBar : style.mdClosedBar}
       w-[90%] mx-auto flex flex-col justify-between mt-[1.25rem] bg-[#1a19198f]
      border-2 border-[#f1f1f193] overflow-hidden`}
        >
          <Nav className="mx-auto w-[90%] h-[5.625rem] flex items-center justify-between text-[#ffffffac] text-lg">
            <div className="flex gap-20 w-[50%]">
              <Link to="/about">
                <AiOutlineQuestion className="sm:text-[2.7rem] text-[2.5rem]" />
              </Link>
              <Link to="/">
                <HiOutlineHome className="sm:text-[2.7rem] text-[2.5rem]" />
              </Link>
            </div>
            <div className="relative">
              <Button
                onClick={() => setIsOpen((isOpen) => !isOpen)}
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
                  className="absolute bg-[#5b29d0] text-white border-2 border-[#1a1919] rounded-[100%] w-[1.625rem] aspect-square 
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
                  {productsCount > 0 ? (
                    cartProducts.map((p) => {
                      return <CartItem key={p.id} {...p} />;
                    })
                  ) : (
                    <div className="w-full h-full flex justify-start items-end">
                      <h1 className="text-4xl text-[#ffffffbc] mb-[40px] font-light">
                        Oops! It looks like your cart is empty.
                      </h1>
                    </div>
                  )}
                </ul>
              </div>
              <div className="h-full flex justify-end">
                <p className="text-white md:text-3xl text-2xl mr-6 mt-2">{`$${totalPrice}`}</p>
              </div>
            </div>
          ) : (
            ""
          )}
        </Container>
      )}
    </Navbar>
  );
}

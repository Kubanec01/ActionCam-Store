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

export function ShopNavbar() {
  // STYLES
  const link = `${style.link}`;
  const linkIcon = "mx-auto text-3xl";

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const productsCount = 2;

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
                className="absolute bg-[#e12d2d] text-white border-2 border-[#1a1919] rounded-[100%] w-[26px] h-[26px] 
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
            <div className="h-[88%] flex justify-normal border mx-4">
              <ul className="border w-full overflow-y-scroll">
                {/* nechapem tejto funkcionalite dojebanej */}
              </ul>
            </div>
            <div className="h-full flex justify-end">
              <p className="text-white text-3xl mr-6 mt-5">56</p>
            </div>
          </div>
        ) : (
          ""
        )}
      </Container>
    </Navbar>
  );
}

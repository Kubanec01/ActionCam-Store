import { Container, Nav } from "react-bootstrap";
import logoImg from "../../../../assets/logo-img.png";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useState } from "react";
import style from "./homeNavbar.module.css";
import { useTranslation } from "react-i18next";
import { useScreenSize } from "../../../../hooks/useScreenSize";
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { useScrollStatus } from "../../../../hooks/useScrollStatus";

export function HomeNavbar() {
  const { t } = useTranslation();

  // STYLES
  const link = `${style.link}`;
  const smScreenLink = `${style.smScreenLink}`;
  const smScreenLinks = "w-[50%] flex flex-col text-2xl sm:gap-4 gap-5";
  
  const [isOpen, setIsOpen] = useState(false);
  const windowWidth = useScreenSize();
  const isAtTop = useScrollStatus()


  return (
    <div>
      {windowWidth > 925 ? (
        <Navbar className="fixed z-[1000] w-full px-2">
          {isAtTop ? (
            <Container className="2xl:w-[70%] max-w-[1300px] mx-auto flex justify-between h-[9.375rem]">
              <Navbar.Brand className="flex items-center w-[18.75rem]">
                <img className="object-cover w-full" src={logoImg} alt="" />
              </Navbar.Brand>
              <Nav className="flex justify-center items-center max-w-[400px] mr-[2.5rem] gap-16">
                <Link to="shop" className="text-[#ffffffdc] text-2xl">
                  {t("navbar.shop")}
                </Link>
                <Link to="about" className="w text-[#ffffffdc] text-2xl">
                  {t("navbar.about")}
                </Link>
                <button
                  onClick={() => {
                    window.location.href = "mailto: jakub.z.roman@gmail.com";
                  }}
                  className="border-2 rounded-2xl w-[8.75rem] h-[3.125rem] text-white  text-2xl"
                >
                  {t("navbar.contactUs")}
                </button>
              </Nav>
            </Container>
          ) : (
            <Container
              style={{
                borderRadius: "10px 10px 20px 20px",
                backdropFilter: "blur(10px)",
              }}
              className={`${style.container} max-w-[1000px] mx-auto flex justify-between h-[5rem] mt-[1.25rem] bg-[#1a191964] border-2 border-[#ffffff2e]`}
            >
              <Nav className="mx-auto w-[90%] flex items-center justify-center text-[#ffffffac] text-lg gap-20">
                {/* page links */}
                <a className={link} href="#accessories">
                  {t("navbar.accessories")}
                </a>
                <a className={link} href="#application">
                  {t("navbar.application")}
                </a>
                <a className={link} href="#new-product">
                  {t("navbar.upcoming")}
                </a>
                {/* routes links */}
                <Link className={link} to="shop">
                  {t("navbar.shop")}
                </Link>
                <Link className={link} to="about">
                  {t("navbar.about")}
                </Link>
                <a className={link} href="mailto:jakub.z.roman@gmail.com">
                  {t("navbar.contactUs")}
                </a>
              </Nav>
            </Container>
          )}
        </Navbar>
      ) : (
        <Navbar
          style={{
            backdropFilter: "blur(10px)",
          }}
          className="z-[1000] w-full fixed h-[7.5rem] bg-[#000000c3]"
        >
          <Container className="w-full h-full mx-auto flex justify-between items-center">
            <Navbar.Brand className="w-[40%] h-full pl-2">
              <img
                className="w-full h-full object-cover opacity-85"
                src={logoImg}
                alt="goPro-logo-img"
              />
            </Navbar.Brand>
            <div className="h-full w-[20%] flex justify-center items-center">
              <button
                onClick={() => setIsOpen((isOpen) => !isOpen)}
                className="text-white text-5xl"
              >
                {!isOpen ? <HiBars3BottomRight /> : <IoReturnUpBackOutline />}
              </button>
            </div>
            <Nav
              className={`${
                isOpen ? style.activeNavbar : style.inactiveNavbar
              } absolute z-[1000] w-full h-[16.25rem] bg-[#000000c3] p-2`}
            >
              <div className="sm:w-[60%] w-[80%] mx-auto flex justify-between mt-10 relative
              before:absolute before:w-[120%] before:h-[0.125rem] before:rounded-xl before:bg-[#ffffff39] before:-left-[8%] before:-top-12
              after:absolute after:w-[80%] after:h-[0.125rem] after:rounded-xl after:bg-[#ffffff39] after:left-[10%] after:-bottom-12">
                {/* page links */}
                <div className={smScreenLinks}>
                  <a className={smScreenLink} href="#accessories">
                    {t("navbar.accessories")}
                  </a>
                  <a className={smScreenLink} href="#application">
                    {t("navbar.application")}
                  </a>
                  <a className={smScreenLink} href="#new-product">
                    {t("navbar.upcoming")}
                  </a>
                </div>
                {/* routes links */}
                <div className={`${smScreenLinks}  items-end`}>
                  <Link className={smScreenLink} to="shop">
                    {t("navbar.shop")}
                  </Link>
                  <Link className={smScreenLink} to="about">
                    {t("navbar.about")}
                  </Link>
                  <a
                    className={smScreenLink}
                    href="mailto:jakub.z.roman@gmail.com"
                  >
                    {t("navbar.contactUs")}
                  </a>
                </div>
              </div>
            </Nav>
          </Container>
        </Navbar>
      )}
    </div>
  );
}

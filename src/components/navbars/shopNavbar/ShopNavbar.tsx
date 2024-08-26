import { Button, Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import style from "./shopNavbar.module.css";
import { IoCameraOutline } from "react-icons/io5";
import { AiOutlineStar } from "react-icons/ai";
import { HiOutlineHome } from "react-icons/hi2";
import { AiOutlineQuestion } from "react-icons/ai";
import { PiShoppingCartLight } from "react-icons/pi";

export function ShopNavbar() {
  // STYLES
  const link = `${style.link}`;
  const linkIcon = "mx-auto text-3xl";

  return (
    <Navbar className="fixed z-[1100] w-full">
      <Container
        style={{
          borderRadius: "10px 10px 20px 20px",
          backdropFilter: "blur(10px)",
        }}
        className="max-w-[1000px] mx-auto flex justify-between mt-[1.25rem] bg-[#1a19198f] border-2 border-[#f1f1f193]"
      >
        <Nav className="mx-auto w-[90%] h-[90px] flex items-center justify-center text-[#ffffffac] text-lg gap-32">
          {/* page links */}
          <a className={`${link} text-center`} href="#">
            <IoCameraOutline className={linkIcon} />
            Cameras
          </a>
          {/* routes links */}
          <a className={link} href="#">
            <AiOutlineStar className={linkIcon} />
            Accessories
          </a>
          <Link className={link} to="/">
            <AiOutlineQuestion className={linkIcon} />
            About
          </Link>
          <Link className={link} to="/">
            <HiOutlineHome className={linkIcon} />
            Home
          </Link>
          <Button>
            <PiShoppingCartLight  className="mx-auto text-[2.8rem]" />
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

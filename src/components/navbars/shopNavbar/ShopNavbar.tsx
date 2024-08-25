import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import image1 from "../../../assets/logo-img.png";
import { MdOutlineCameraAlt } from "react-icons/md";
import { LiaToolsSolid } from "react-icons/lia";
import { CiSquareQuestion } from "react-icons/ci";
import { RiHome2Line } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";

export function ShopNavbar() {
  return (
    <Navbar
      style={{
        backdropFilter: "blur(10px)",
      }}
      className="w-full h-[140px] bg-[#24242491] fixed"
    >
      <Container className="flex justify-between w-[60%] mx-auto h-full items-center">
        {/* IMAGE */}
        <NavbarBrand className="w-[33.3%]">
          <img className="object-cover w-[60%]" src={image1} alt="logo-img" />
        </NavbarBrand>
        {/* LINKS */}
        <ul className="text-white flex justify-between items-center gap-20 ">
          <li className="flex flex-col items-center text-lg font-light">
            <MdOutlineCameraAlt  className="text-4xl" />
            Products
          </li>
          <li className="flex flex-col items-center text-lg font-light">
            <LiaToolsSolid className="text-4xl" />
            Accessories
          </li>
          <li className="flex flex-col items-center text-lg font-light">
            <CiSquareQuestion  className="text-4xl" />
            About
          </li>
          <li className="flex flex-col items-center text-lg font-light">
            <RiHome2Line className="text-4xl" />
            Home
          </li>
        </ul>
        {/* SHOPPING CART */}
        <div className="w-[33.3%] flex justify-end">
          <button className="text-white text-4xl mr-12">
            <FiShoppingCart />
          </button>
        </div>
      </Container>
    </Navbar>
  );
}

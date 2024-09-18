import { AllProducts } from "../types";
import gopro12Img from "../assets/gopro-12-img.png";
import gopro11Img from "../assets/gopro-11-cart-img2.png";
import gopro10Img from "../assets/gopro-10-cart-img.png";
import gopro11MiniImg from "../assets/gopro-11-mini-img.png";
import accessoryImg1 from "../assets/accessory1-img.png";
import accessoryImg2 from "../assets/gopro-lige-jacket-img.png";
import accessoryImg3 from "../assets/camera-light-img.png";
import accessoryImg4 from "../assets/extension-pole-img.png";
import accessoryImg5 from "../assets/volta-img.png";
import accessoryImg6 from "../assets/fetch-dog-img.png";
import { useTranslation } from "react-i18next";

export function productsList() {
  const { t } = useTranslation();

  const products: AllProducts[] = [
    {
      id: "gopro12",
      image: gopro12Img,
      name: "GoPro HERO12 Black",
      desc: t("productList.goPro12"),
      price: 359.99,
      type: "camera",
    },
    {
      id: "gopro11",
      image: gopro11Img,
      name: "GoPro HERO11 Black",
      desc: t("productList.goPro11"),
      price: 349.99,
      type: "camera",
    },
    {
      id: "gopro10",
      image: gopro10Img,
      name: "GoPro HERO10 Black",
      desc: t("productList.goPro10"),
      price: 249.99,
      type: "camera",
    },
    {
      id: "gopro11Mini",
      image: gopro11MiniImg,
      name: "GoPro HERO11 Black Mini",
      desc: t("productList.goPro11Mini"),
      price: 249.99,
      type: "camera",
    },
    {
      id: "headStrap",
      image: accessoryImg1,
      name: "Head Strap 2.0",
      desc: t("productList.headStrap"),
      price: 24.99,
      type: "accessory",
    },
    {
      id: "lifeJacket",
      image: accessoryImg2,
      name: "Floaty",
      desc: t("productList.lifeJacket"),
      price: 29.99,
      type: "accessory",
    },
    {
      id: "lightMod",
      image: accessoryImg3,
      name: "Light Mod",
      desc: t("productList.lightMod"),
      price: 49.99,
      type: "accessory",
    },
    {
      id: "extensionPole",
      image: accessoryImg4,
      name: "Extension Pole",
      desc: t("productList.extensionPole"),
      price: 89.99,
      type: "accessory",
    },
    {
      id: "volta",
      image: accessoryImg5,
      name: "Volta",
      desc: t("productList.volta"),
      price: 89.99,
      type: "accessory",
    },
    {
      id: "fetch-dog-harness",
      image: accessoryImg6,
      name: "Fetch Dog Harness",
      desc: t("productList.fetchDogHarness"),
      price: 49.99,
      type: "accessory-complement",
    },
  ];

  return products;
}

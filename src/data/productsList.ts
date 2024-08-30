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


export const productsList: AllProducts[] = [
  {
    id: "gopro12",
    image: gopro12Img,
    name: "GoPro HERO12 Black",
    desc: "HERO12 Black offers HDR 5.3K/4K video, HyperSmooth 6.0 stabilization, a 177° field-of-view, improved thermal performance, Bluetooth audio support, and pro-level features in a rugged, waterproof design.",
    price: 359.99,
  },
  {
    id: "gopro11",
    image: gopro11Img,
    name: "GoPro HERO11 Black",
    desc: "HERO11 Black automatically delivers highlight videos to your phone. Its large sensor enhances image quality, and HyperSmooth 5.0 ensures steady shots with AutoBoost and Horizon Lock.",
    price: 349.99,
  },
  {
    id: "gopro10",
    image: gopro10Img,
    name: "GoPro HERO10 Black",
    desc: "HERO10 Black is a highly versatile camera, equipped with the revolutionary GP2 processor. It captures 5.3K video at higher frame rates, takes 23MP photos, offers enhanced performance in low-light conditions, and features game-changing HyperSmooth 4.0 video stabilization in all modes.",
    price: 249.99,
  },
  {
    id: "gopro11Mini",
    image: gopro11MiniImg,
    name: "GoPro HERO11 Black Mini",
    desc: "HERO11 Black Mini offers top-notch video performance in a smaller, lighter design. It features a durable outer shell, dual mounting fingers for versatile mounting, and the same large image sensor for easy vertical shots. Highlight videos are automatically sent to your phone.",
    price: 249.99,
  },
];

export const accessoriesList: AllProducts[] = [
  {
    id: "headStrap",
    image: accessoryImg1,
    name: "Head Strap 2.0",
    desc: "Head Strap 2.0 offers three setups: use the headband with the top strap for stability, the headband alone for a low-profile look, or the removable clip for versatile mounting on caps, belts, and more. The main headband also enables mounting on stationary objects.",
    price: 24.99,
  },
  {
    id: "lifeJacket",
    image: accessoryImg2,
    name: "Floaty",
    desc: "This easy-to-spot accessory keeps your HERO camera afloat and adds protective padding. The wraparound design allows access to your camera buttons, front LCD screen, back touch screen, and folding fingers for easy mounting. Floaty also includes a tether point for added security.",
    price: 29.99,
  },
  {
    id: "lightMod",
    image: accessoryImg3,
    name: "Light Mod",
    desc: "Add compact yet powerful LED lighting to your next adventure. With Light Mod, you can illuminate your subject with wide, smooth, even light and capture ultra crisp footage. Light Mod attaches to HERO cameras via Media Mod (sold separately), or works as a handy standalone light for use with GoPro mounts.",
    price: 49.99,
  },
  {
    id: "extensionPole",
    image: accessoryImg4,
    name: "Extension Pole",
    desc: "This extension pole stretches to 48in (122cm) and collapses to 10in (25cm), featuring a detachable wireless remote for easy photo-taking and recording. Made of durable, lightweight aluminum, it's waterproof for capturing activities in any condition.",
    price: 89.99,
  },
  {
    id: "volta",
    image: accessoryImg5,
    name: "Extension Pole",
    desc: "This extension pole stretches to 48in (122cm) and collapses to 10in (25cm), featuring a detachable wireless remote for easy photo-taking and recording. Made of durable, lightweight aluminum, it's waterproof for capturing activities in any condition.",
    price: 89.99,
  },
];

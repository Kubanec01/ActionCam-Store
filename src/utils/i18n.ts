import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      home: {
        cameraTitle: "Ultra Light",
        cameraDescription:
          "Record your experiences in 5.3K footage at up to 60 fps and you can record 120 fps video in 4K. Only 153g will capture your life without you even realizing you're wearing it.",
        experiencesTitle: "Small And Smaller",
        experiencesDescription:
          "Get incredible HERO11 Black video performance in a smaller, lighter, simpler design. HERO11 Black Mini’s smaller size makes it more comfortable to wear when capturing point-of-view footage, and dual mounting fingers boost your body and helmet mounting options.",
        experiencesDesc2:
          "Yes, Yes and Yes! A tough outer shell takes legendary GoPro durability to a whole new level. It features the same large image sensor that lets you share vertical shots to social media with ease, and you’ll get incredible highlight videos sent to your phone automatically.",
        videoAccessoryDescTitle: "More is More",
        videoAccessoryDescDesc:
          "With <1>accessories</1> for every sport, you will find the right one for you. From simple lights, through microphones to stabilizers, you will be able to push your limits for a better <2>experience</2>.",
          headAccessoryTitle1:
          "Deal, on <br />the perfect <br />adventure gear.",
          headAccessoryDesc1:
          "Gear up with must-have mounts for hiking, snorkeling and more. This kit features The Head Strap 2.0, perfect for immersive point-of-view shots.",
          lifeJacketTitle:
          "<1>Life Jacket</1> For <br/> Every Situation.",
          lifeJacketDesc:
          "Keep your camera afloat and never worry about losing it with Floaty for GoPro. The high-visibility orange color is easy to spot in the water, while the wraparound design provides easy access to buttons and mounting fingers. Floaty is perfect for snorkeling, surfing, wakeboarding or just splashing around at the beach.",
        lifeJacketButton: "See More",
        ledTitle: "Compact, Powerful, LED",
        ledDesc:
          "Add compact yet powerful LED lighting to your next adventure. With Light Mod, you can illuminate your subject with wide, smooth, even light and capture ultra crisp footage. Light Mod attaches to HERO cameras via Media Mod (sold separately), or works as a handy standalone light for use with GoPro mounts.",
        appTitle: "Capture, Edit, Share",
        appDesc:
          "Transform your adventures into cinematic masterpieces with GoPro Editor App. Seamlessly cut, trim, and stitch your footage with our intuitive interface, designed to make video editing as easy as tapping a few buttons. Enhance your clips using professional tools such as slow motion, time-lapse, and stunning effects, bringing out the best in every moment.",
          newProductTitle:
          "New year with a new <br/> <1>experience</1>",
          newProductDesc:
          "Get ready to capture the world like never before with our groundbreaking camera, arriving September 2024. Whether you're a seasoned professional or an aspiring creator, this is the tool that will redefine your storytelling.",
        newProductProps: {
          1: "GP3 Software",
          2: "8K resolution",
          3: "HyperSmooth 7.0",
          4: "Longer Battery Life",
        },
      },
      footer: {
        footerTitle: "Capture the Thrill",
        footerQuote:
          '"Adventure is not in the destination, but in the moments you dare to capture."',
      },
      navbar: {
        accessories: "Accessories",
        application: "Application",
        upcoming: "Upcoming",
        shop: "Shop",
        about: "About",
        contactUs: "Contact Us",
        ourStory: "Our Story",
        home: "Home",
        cameras: "Cameras",
      },
      about: {
        homeTitle: "Conquer Heights and Depths",
        homeDesc:
          "Built to endure the extremes, this camera thrives both above the clouds and beneath the waves. Capture every moment with unwavering reliability, whether you're scaling mountains or exploring ocean depths.",
        adventureBars: {
          1: {
            title: "Stunning View",
            desc: "Built for durability and clarity in any environment.",
          },
          2: {
            title: "Waterproof Wonders",
            desc: "Waterproof and built for extreme conditions and stunning clarity underwater.",
          },
          3: {
            title: "360 View",
            desc: "Capture every angle in stunning 360 degrees. See it all, miss nothing.",
          },
          title: "Ultimate Versatility",
          desc: "Crafted to meet the demands of any sport, whether you're tackling extreme adventures or engaging in everyday activities. Gopro offers unmatched adaptability, ensuring high-quality performance and reliability in every environment.",
        },
        adventureVideo: {
          title: "From Extremes to Everyday",
          desc: "GoPro started as the ultimate camera for extreme sports. Over time, it’s evolved to capture every sport and adventure, bringing professional-quality video to all.",
        },
        cameraTitle: "For Every <1>Moment</1>",
        cameraDesc:
          "GoPro's are undeniably great for recording sport; whether it be skiing, running, skateboarding, climbing or mountain-biking, GoPros can be used to create amazing Point Of View videos as well as help you to record and make a note of your technique when carrying out your routines. Although GoPros were originally introduced as mountable action cameras, their size and video quality make them good travel cameras as well. In terms of durability, they are waterproof (as in you can record under water at shallow depths) and much tougher than a phone or camera.",
        videoButton: "See More",
      },
    },
  },
  sk: {
    translation: {
      home: {
        cameraTitle: "Ultra Light",
        cameraDescription:
          "Record your experiences in 5.3K footage at up to 60 fps and you can record 120 fps video in 4K. Only 153g will capture your life without you even realizing you're wearing it.",
      },
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;

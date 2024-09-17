import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
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
        emptyCart: "Oops! It looks like your cart is empty.",
      },
      home: {
        heroTitle: "Capture your passion",
        heroDesc: "Don't keep your experiences to yourself. <br /> Record, Share, Enjoy.",
        cameraTitle: "Ultra Light",
        cameraDescription:
          "Record your experiences in 5.3K footage at up to 60 fps and you can record 120 fps video in 4K. Only 153g will capture your life without you even realizing you're wearing it.",
        experiencesTitle: "Small And Smaller",
        experiencesDescription:
          "Get incredible HERO11 Black video performance in a smaller, lighter, simpler design. HERO11 Black Mini’s smaller size makes it more comfortable to wear when capturing point-of-view footage, and dual mounting fingers boost your body and helmet mounting options.",
        experiencesTitle2: "Smaller, Simpler <br /> but the same Performance?",
        experiencesDesc2:
          "Yes, Yes and Yes! A tough outer shell takes legendary GoPro durability to a whole new level. It features the same large image sensor that lets you share vertical shots to social media with ease, and you’ll get incredible highlight videos sent to your phone automatically.",
        videoAccessoryDescTitle: "More is More",
        videoAccessoryDescDesc:
          "With <1>accessories</1> for every sport, you will find the right one for you. From simple lights, through microphones to stabilizers, you will be able to push your limits for a better <2>experience</2>.",
        headAccessoryTitle1: "Deal, on <br />the perfect <br />adventure gear.",
        headAccessoryDesc1:
          "Gear up with must-have mounts for hiking, snorkeling and more. This kit features The Head Strap 2.0, perfect for immersive point-of-view shots.",
        lifeJacketTitle: "<1>Life Jacket</1> For <br/> Every Situation.",
        lifeJacketDesc:
          "Keep your camera afloat and never worry about losing it with Floaty for GoPro. The high-visibility orange color is easy to spot in the water, while the wraparound design provides easy access to buttons and mounting fingers. Floaty is perfect for snorkeling, surfing, wakeboarding or just splashing around at the beach.",
        lifeJacketButton: "See More",
        ledTitle: "Compact, Powerful, LED",
        ledDesc:
          "Add compact yet powerful LED lighting to your next adventure. With Light Mod, you can illuminate your subject with wide, smooth, even light and capture ultra crisp footage. Light Mod attaches to HERO cameras via Media Mod (sold separately), or works as a handy standalone light for use with GoPro mounts.",
        appTitle: "Capture, Edit, Share",
        appDesc:
          "Transform your adventures into cinematic masterpieces with GoPro Editor App. Seamlessly cut, trim, and stitch your footage with our intuitive interface, designed to make video editing as easy as tapping a few buttons. Enhance your clips using professional tools such as slow motion, time-lapse, and stunning effects, bringing out the best in every moment.",
        newProductTitle: "New year with a new <br/> <1>experience</1>",
        newProductDesc:
          "Get ready to capture the world like never before with our groundbreaking camera, arriving September 2024. Whether you're a seasoned professional or an aspiring creator, this is the tool that will redefine your storytelling.",
        newProductProps: {
          1: "GP3 Software",
          2: "8K resolution",
          3: "HyperSmooth 7.0",
          4: "Longer Battery Life",
        },
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
      shop: {
        heroTitle: "Capture Anything, <1>Anywhere</1>",
        heroVideoTitle: "Awaken the <1>Beast Within</1>",
        heroVideoDes:
          "Unleash raw power. Feel the adrenaline, embrace the wild, and let the beast within take control!",
        cameraFeatureTitle: "Nocturnal <1>Brilliance<1/>",
        cameraFeatureDesc:
          "Unlock the beauty of night with exceptional lens clarity. Perfect for capturing vibrant details and deep contrasts in the darkest conditions.",
        itemButton: "Add To Card",
        camerasStoreTitle:
          "Ultimate <br/> <1>Camera</1> <br/> <2>Collection</2>",
        accessoriesStoreTitle:
          "Essential <br/> <1>Camera</1> <br/> <2>Accessories</2>",
        accessoryComplementTitle:
          "Experience Adventures <br/> Together With a <br/> <1>New POV</1>.",
        aboutLinkTitle: "Want to know <br/> more <1>about</1> the camera?",
        aboutLinkButton: "See Specs",
        globalSalesTitle: "Over 3 million sales for 2023",
        globalSalesButton: "Upcoming",
      },
      productList: {
        goPro12:
          "HERO12 Black offers HDR 5.3K/4K video, HyperSmooth 6.0 stabilization, a 177° field-of-view, improved thermal performance, Bluetooth audio support, and pro-level features in a rugged, waterproof design.",
        goPro11:
          "HERO11 Black automatically delivers highlight videos to your phone. Its large sensor enhances image quality, and HyperSmooth 5.0 ensures steady shots with AutoBoost and Horizon Lock.",
        goPro10:
          "HERO10 Black is a highly versatile camera, equipped with the revolutionary GP2 processor. It captures 5.3K video at higher frame rates, takes 23MP photos, offers enhanced performance in low-light conditions, and features game-changing HyperSmooth 4.0 video stabilization in all modes.",
        goPro11Mini:
          "HERO11 Black Mini offers top-notch video performance in a smaller, lighter design. It features a durable outer shell, dual mounting fingers for versatile mounting, and the same large image sensor for easy vertical shots. Highlight videos are automatically sent to your phone.",
        headStrap:
          "Head Strap 2.0 offers three setups: use the headband with the top strap for stability, the headband alone for a low-profile look, or the removable clip for versatile mounting on caps, belts, and more. The main headband also enables mounting on stationary objects.",
        lifeJacket:
          "This easy-to-spot accessory keeps your HERO camera afloat and adds protective padding. The wraparound design allows access to your camera buttons, front LCD screen, back touch screen, and folding fingers for easy mounting. Floaty also includes a tether point for added security.",
        lightMod:
          "Add compact yet powerful LED lighting to your next adventure. With Light Mod, you can illuminate your subject with wide, smooth, even light and capture ultra crisp footage. Light Mod attaches to HERO cameras via Media Mod (sold separately), or works as a handy standalone light for use with GoPro mounts.",
        extensionPole:
          "This extension pole stretches to 48in (122cm) and collapses to 10in (25cm), featuring a detachable wireless remote for easy photo-taking and recording. Made of durable, lightweight aluminum, it's waterproof for capturing activities in any condition.",
        volta:
          "This extension pole stretches to 48in (122cm) and collapses to 10in (25cm), featuring a detachable wireless remote for easy photo-taking and recording. Made of durable, lightweight aluminum, it's waterproof for capturing activities in any condition.",
        fetchDogHarness:
          "Capture the world from your dog’s point of view. This harness features camera mounts on the back + chest for a variety of perspectives—from bone-chewing, digging and front-paw action, to over-the-head shots of playing, running, fetch + more. Soft, padded construction keeps your pet comfortable. Fully adjustable to fit dogs from 20 to 120 lbs (9 to 54kg).",
      },
    },
  },
  sk: {
    translation: {
      footer: {
        footerTitle: "Zachyťte vzrušenie",
        footerQuote:
          '"Dobrodružstvo nie je v cieli, ale vo chvíľach, ktoré sa odvážite zachytiť."',
      },
      navbar: {
        accessories: "Príslušenstvo",
        application: "Aplikácia",
        upcoming: "Pripravované",
        shop: "Obchod",
        about: "Info",
        contactUs: "Kontakt",
        ourStory: "Náš príbeh",
        home: "Domov",
        cameras: "Kamery",
        emptyCart: "Oops! Zdá sa, že váš košík je prázdny.",
      },
      home: {
        heroTitle: "Zachyťte svoju vášeň",
        heroDesc: "Nenechávajte si svoje skúsenosti pre seba. <br /> Nahrávajte, zdieľajte, užívajte si.",
        cameraTitle: "Ultra ľahké",
        cameraDescription:
          "Zaznamenajte svoje zážitky v 5,3K stopáži rýchlosťou až 60 fps a 120 fps video v 4K. Len 153 g zachytí váš život bez toho, aby ste si uvedomili, že ho ju na sebe.",
        experiencesTitle: "Malá a Menšia",
        experiencesDescription:
          "Získajte neuveriteľný výkon videa HERO11 Black v menšom, ľahšom a jednoduchšom dizajne. Menšia veľkosť HERO11 Black Mini umožňuje pohodlnejšie nosenie pri snímaní záberov z uhla pohľadu a dvojité upevňovacie prsty rozširujú možnosti montáže na telo a prilbu.",
        experiencesTitle2: "Menší, jednoduchší <br /> ale rovnaký výkon?",
        experiencesDesc2:
          "Áno, Áno a Áno! Pevný vonkajší plášť posúva legendárnu odolnosť GoPro na úplne novú úroveň. Je vybavený rovnakým veľkým obrazovým snímačom, ktorý vám umožní jednoducho zdieľať vertikálne zábery so sociálnymi médiami a získate neuveriteľné zvýraznené videá automaticky odoslané do vášho telefónu.",
        videoAccessoryDescTitle: "Viac Je Viac",
        videoAccessoryDescDesc:
          "S <1>doplnkami</1> pre každý šport nájdete to pravé pre vás. Od jednoduchých svetiel, cez mikrofóny až po stabilizátory, budete môcť posúvať svoje limity pre lepší <2>zážitok</2>.",
        headAccessoryTitle1: "Ponuka na <br />perfektné <br />dobrodružné vybavenie.",
        headAccessoryDesc1:
          "Vybavte sa držiakmi, ktoré musíte mať na turistiku, šnorchlovanie a ďalšie. Ideálne pre pohlcujúce zábery z vašeho uhla pohľadu.",
        lifeJacketTitle: "<1>Záchranná vesta</1> pre <br/> každú situáciu.",
        lifeJacketDesc:
          "Udržujte svoju kameru nad vodou a nikdy sa nebojte, že ju stratíte s Floaty pre GoPro. Vysoko viditeľnú oranžovú farbu je možné vo vode ľahko rozpoznať, zatiaľ čo obopínajúci dizajn poskytuje ľahký prístup k tlačidlám a montážnym prstom. Floaty je ideálny na šnorchlovanie, surfovanie, wakeboarding alebo len tak čľapkanie sa na pláži.",
        lifeJacketButton: "Zobraziť viac",
        ledTitle: "Kompaktný, výkonný, LED",
        ledDesc:
          "Pridajte do svojho ďalšieho dobrodružstva kompaktné, ale výkonné LED osvetlenie. S režimom Light Mod môžete osvetliť svoj objekt širokým, hladkým a rovnomerným svetlom a zachytiť mimoriadne ostré zábery. Light Mod sa pripája ku kamerám HERO cez Media Mod (predáva sa samostatne) alebo funguje ako praktické samostatné svetlo na použitie s držiakmi GoPro.",
        appTitle: "Zachyťte, upravte, zdieľajte",
        appDesc:
          "Premeňte svoje dobrodružstvá na filmové majstrovské diela s aplikáciou GoPro Editor. Bezproblémovo strihajte, orezávajte a spájajte svoje zábery pomocou nášho intuitívneho rozhrania, ktoré je navrhnuté tak, aby editovanie videa bolo také jednoduché ako stlačenie niekoľkých tlačidiel. Vylepšite svoje klipy pomocou profesionálnych nástrojov, ako sú spomalené zábery, časozberné efekty a úžasné efekty, čím získate to najlepšie z každého okamihu.",
        newProductTitle: "Nový rok s novým <br/> <1>zážitkom</1>",
        newProductDesc:
          "Pripravte sa zachytiť svet ako nikdy predtým s naším prelomovým fotoaparátom, ktorý príde v septembri 2024. Či už ste skúsený profesionál alebo začínajúci tvorca, toto je nástroj, ktorý predefinuje vaše rozprávanie.",
        newProductProps: {
          1: "GP3 Softvér",
          2: "8K rozlíšenie",
          3: "HyperSmooth 7.0",
          4: "Dlhšia životnosť batérie",
        },
      },
      about: {
        homeTitle: "Dobyte výšky a hĺbky",
        homeDesc:
          "Tento fotoaparát, navrhnutý tak, aby odolával extrémnym podmienkam, funguje spoľahlivo ako nad oblakmi, tak aj pod vlnami. Zachytí každý okamih s neochvejnou presnosťou, či už sa vydávate do hôr, alebo skúmate hlbiny oceánu.",
        adventureBars: {
          1: {
            title: "Ohromujúci výhľad",
            desc: "Postavené pre odolnosť a prehľadnosť v akomkoľvek prostredí.",
          },
          2: {
            title: "Vodotesné zázraky",
            desc: "Vodotesné a vyrobené pre extrémne podmienky a ohromujúcu čistotu pod vodou.",
          },
          3: {
            title: "360-stupňové zobrazenie",
            desc: "Zachyťte každý uhol v ohromujúcich 360 stupňoch. Pozrite si to všetko, nič vám neunikne.",
          },
          title: "Maximálna všestrannosť",
          desc: "Vyrobené tak, aby spĺňali požiadavky akéhokoľvek športu, či už zdolávate extrémne dobrodružstvá alebo sa zapájate do každodenných aktivít. Gopro ponúka bezkonkurenčnú prispôsobivosť, zaisťuje vysokokvalitný výkon a spoľahlivosť v každom prostredí.",
        },
        adventureVideo: {
          title: "Od extrémov po každodennosť",
          desc: "GoPro začala ako ultimátna kamera pre extrémne športy. Postupom času sa vyvinula tak, aby zachytila každý šport a dobrodružstvo a všetkým priniesol video v profesionálnej kvalite.",
        },
        cameraTitle: "Pre Každý <1>Moment</1>",
        cameraDesc:
          "GoPro sú nepopierateľne skvelé na nahrávanie športu; či už ide o lyžovanie, beh, skateboarding, horolezectvo alebo jazdu na horskom bicykli, GoPro možno použiť na vytváranie úžasných videí z Point of View, ako aj na pomoc pri zaznamenávaní vašej techniky pri vykonávaní vašich rutín. Hoci boli GoPro pôvodne predstavené ako montovateľné akčné kamery, ich veľkosť a kvalita videa z nich robia aj dobré cestovné kamery. Pokiaľ ide o odolnosť, sú vodotesné (ako v nich môžete nahrávať pod vodou v malých hĺbkach) a oveľa odolnejšie ako telefón alebo fotoaparát.",
        videoButton: "Zobraziť viac",
      },
      shop: {
        heroTitle: "Zachyťte Čokoľvek, <1>Kdekoľvek</1>",
        heroVideoTitle: "Prebuďte <1>v Sebe Beštiu</1>",
        heroVideoDes:
          "Uvoľnite surovú silu. Pocíťte adrenalín, objímte divočinu a nechajte zviera v sebe prevziať kontrolu!",
        cameraFeatureTitle: "Nočná <1>Brilancia<1/>",
        cameraFeatureDesc:
          "Odomknite krásu noci s výnimočnou čistotou šošovky. Ideálne na zachytenie živých detailov a hlbokých kontrastov v najtemnejších podmienkach.",
        itemButton: "Pridať do košíka",
        camerasStoreTitle:
          "Ultimátna <br/> <1>Kolekcia</1> <br/> <2>Kamier</2>",
        accessoriesStoreTitle:
          "Doplnkové <br/> <1>Kamerové</1> <br/> <2>Príslušenstvo</2>",
        accessoryComplementTitle:
          "Zažite dobrodružstvá <br/> Spolu s  <br/> <1>Novým POV</1>.",
        aboutLinkTitle: "Chcete sa <br/> dozvedieť <1>viac</1> o kamere?",
        aboutLinkButton: "Zistiť Viac",
        globalSalesTitle: "Viac ako 3 milióny predajov za rok 2023",
        globalSalesButton: "Čoskoro",
      },
      productList: {
        goPro12:
          "HERO12 Black offers HDR 5.3K/4K video, HyperSmooth 6.0 stabilization, a 177° field-of-view, improved thermal performance, Bluetooth audio support, and pro-level features in a rugged, waterproof design.",
        goPro11:
          "HERO11 Black automatically delivers highlight videos to your phone. Its large sensor enhances image quality, and HyperSmooth 5.0 ensures steady shots with AutoBoost and Horizon Lock.",
        goPro10:
          "HERO10 Black is a highly versatile camera, equipped with the revolutionary GP2 processor. It captures 5.3K video at higher frame rates, takes 23MP photos, offers enhanced performance in low-light conditions, and features game-changing HyperSmooth 4.0 video stabilization in all modes.",
        goPro11Mini:
          "HERO11 Black Mini offers top-notch video performance in a smaller, lighter design. It features a durable outer shell, dual mounting fingers for versatile mounting, and the same large image sensor for easy vertical shots. Highlight videos are automatically sent to your phone.",
        headStrap:
          "Head Strap 2.0 offers three setups: use the headband with the top strap for stability, the headband alone for a low-profile look, or the removable clip for versatile mounting on caps, belts, and more. The main headband also enables mounting on stationary objects.",
        lifeJacket:
          "This easy-to-spot accessory keeps your HERO camera afloat and adds protective padding. The wraparound design allows access to your camera buttons, front LCD screen, back touch screen, and folding fingers for easy mounting. Floaty also includes a tether point for added security.",
        lightMod:
          "Add compact yet powerful LED lighting to your next adventure. With Light Mod, you can illuminate your subject with wide, smooth, even light and capture ultra crisp footage. Light Mod attaches to HERO cameras via Media Mod (sold separately), or works as a handy standalone light for use with GoPro mounts.",
        extensionPole:
          "This extension pole stretches to 48in (122cm) and collapses to 10in (25cm), featuring a detachable wireless remote for easy photo-taking and recording. Made of durable, lightweight aluminum, it's waterproof for capturing activities in any condition.",
        volta:
          "This extension pole stretches to 48in (122cm) and collapses to 10in (25cm), featuring a detachable wireless remote for easy photo-taking and recording. Made of durable, lightweight aluminum, it's waterproof for capturing activities in any condition.",
        fetchDogHarness:
          "Capture the world from your dog’s point of view. This harness features camera mounts on the back + chest for a variety of perspectives—from bone-chewing, digging and front-paw action, to over-the-head shots of playing, running, fetch + more. Soft, padded construction keeps your pet comfortable. Fully adjustable to fit dogs from 20 to 120 lbs (9 to 54kg).",
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },

    detection: {
      order: ["navigator"], 
      caches: ["localStorage"], 
    },
  });

export default i18n;

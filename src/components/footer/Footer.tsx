import { GrInstagram } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { FaSquareFacebook } from "react-icons/fa6";
import style from "./footer.module.css";
import { useTranslation } from "react-i18next";

export function Footer() {
  const {t} = useTranslation()
  return (
    <div className="bg-[#0a0a0a] w-full p-4 mt-[1.25rem]">
      <div className=" my-[3.125rem] xl:w-[60%] w-[80%] max-w-[1200px] mx-auto flex md:flex-row flex-col justify-center">
        {/* LEFT */}
        <div>
          <h2 className="text-[#fffffff8] text-3xl mb-2 relative md:text-left text-center">
            {t('footer.footerTitle')}
          </h2>
          <p
            className="text-[#ffffff6b] md:text-xl text-lg md:w-[75%] relative md:text-left text-center
          after:bg-[#ffffff2b] after:rounded-xl md:after:w-[90%] after:w-[100%] after:h-[2.5px] after:absolute after:-bottom-4 after:left-0"
          >
            {t('footer.footerQuote')}
          </p>
          <ul className="flex md:justify-start justify-center flex-row text-3xl gap-4 mt-[2.5rem]">
            <li>
              <a href="https://www.instagram.com/_jay.valendine_/" target="_blank">
                <GrInstagram className={`${style.icon}`} />
              </a>
            </li>
            <li>
              <a href="https://github.com/Kubanec01" target="_blank">
                <FaGithub className={`${style.icon}`} />
              </a>
            </li>
            <li>
              <a href="#">
                <FaLinkedin className={`${style.icon}`} />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/jakub.roman.351" target="_blank">
                <FaSquareFacebook className={`${style.icon}`} />
              </a>
            </li>
          </ul>
        </div>
        {/* RIGHT */}
        <div className="flex justify-center lg:items-start md:items-end items-center text-xl lg:text-base flex-col lg:gap-4 md:mt-0 mt-10">
          <button
            style={{
              borderRadius: "15px 2px",
            }}
            className={`${style.button} lg:border-2  border-[#ffffff56] text-[#ffffff99] flex justify-center items-center w-[12.5rem] h-[3.125rem]`}
          >
            <FaSquarePhone className="text-2xl mr-2 text-[#244ad5]" />
            <a href="tel:+421903871518">+421 903 871 518</a>
          </button>
          <button
            style={{
              borderRadius: "2px 15px",
            }}
            className={`${style.button} lg:border-2 border-[#ffffff56] text-[#ffffff99] flex justify-center items-center lg:w-[18.75rem] h-[3.125rem]`}
          >
            <CgMail className="text-3xl mr-2 text-[#244ad5]" />
            <a href="mailto:jakub.z.roman@gmail.com">jakub.z.roman@gmail.com</a>
          </button>
        </div>
      </div>
    </div>
  );
}

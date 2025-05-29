import Logo from "../../assets/Logo.png";
import { Link } from "react-scroll";
import { FaHeart } from "react-icons/fa";

const FooterMain = () => {
  return (
    <div>
      <div className="w-full h-[1px] bg-gray-400"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col gap-2 md:flex-row md:gap-0 justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link
              to="hero"
              smooth={true}
              spy={true}
              duration={500}
              offset={-70}
              className="text-xl font-bold flex gap-2 items-center cursor-pointer"
            >
              <img src={Logo} alt="Logo" className="w-8 h-8" />
              Abu Bakr Ahmed
            </Link>
          </div>
          <p className="text-sm flex items-center font-medium">
            <span className="text-zinc-200">Made with</span>
            <FaHeart className="mx-1.5 text-[#B01E28] animate-pulse" />
            <span className="text-zinc-200">by</span>
            <a
              href="https://github.com/abubakr-29"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1.5 text-blue-400 underline underline-offset-4 decoration-2 hover:text-blue-300 transition-colors duration-200 font-semibold"
            >
              this guy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterMain;

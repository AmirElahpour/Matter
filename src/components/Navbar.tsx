import { useContext, useEffect, useState } from "react";
import Icon from "../assets/Vector.png";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { AnimatePresence, easeInOut } from "motion/react";
import { motion } from "motion/react";
import { MatterContext } from "@/context/MatterContext";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { handleTheme, isDark } = useContext(MatterContext);

  useEffect(() => {
    let lastScroll = window.scrollY;
    const handleNav = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 100) {
        setIsNavOpen(false);
        setIsMenuOpen(false);
      } else {
        setIsNavOpen(true);
      }
      lastScroll = currentScroll;
    };
    window.addEventListener("scroll", handleNav);
    return () => window.removeEventListener("scroll", handleNav);
  }, []);

  const navLinks = ["Overview", "Company", "Updates", "Twitter"];
  const rightLinks = ["Log in", "Get Matter"];

  return (
    <nav
      className={`fixed w-full dark:text-white bg-white/90 dark:bg-darkBG/90 transition-transform duration-200 backdrop:blur-md shadow-xl ${
        isNavOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl px-4 md:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex justify-center items-center gap-4">
            {/* brand */}
            <a href="#" className="flex justify-center bg-darkBG px-2 py-2 rounded-2xl dark:rounded-none items-center gap-2 md:border-r border-none border-gray-900 pr-4 cursor-pointer">
              <img src={Icon} alt="Icon" className="w-9 h-8" />
              <h1 className="text-xl font-semibold text-white">Matter</h1>
            </a>
            {/* left links */}
            <div className="hidden md:flex md:space-x-2 lg:space-x-4">
              {navLinks.map((link, i) => (
                <a
                  key={i}
                  href="#"
                  className={`${
                    i === 0 ? "dark:text-white" : "text-gray-400"
                  } hover:dark:text-gray-200 hover:text-gray-600 py-2 px-3 transition-colors duration-300`}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          {/* right links */}
          <div className="flex">
            <motion.button
              whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
              className="cursor-pointer mr-2"
              onClick={handleTheme}
            >
              {isDark ? <Sun /> : <Moon />}
            </motion.button>

            <div className="hidden md:flex gap-4 items-center">
              {rightLinks.map((link, i) => (
                <a
                  key={i}
                  href="#"
                  className={`${
                    i === 1 &&
                    "bg-purplee border-2 border-purplee hover:bg-white/90 hover:dark:bg-darkBG text-white hover:text-black"
                  } rounded-full py-2 px-4 text-sm transition-all duration-300 `}
                >
                  {link}
                </a>
              ))}
            </div>
            <div className="flex md:hidden justify-center items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex p-2 rounded-md dark:text-gray-300 focus:outline-none"
              >
                {isMenuOpen ? (
                  <IoMdClose className="text-4xl" />
                ) : (
                  <IoIosMenu className="text-4xl" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isMenuOpen ? "auto" : 0, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              ease: easeInOut,
            }}
            className="w-full md:hidden bg-white dark:bg-darkBG "
          >
            <motion.div className="px-2 sm:px-3 pt-2 pb-3 space-y-1 ">
              {navLinks.concat(rightLinks).map((link, i) => (
                <motion.a
                  key={i}
                  className={`${
                    i === 5 ? "text-purplee" : "text-gray-900 dark:text-white"
                  } ${
                    i === 4 && "border-t border-gray-600"
                  } flex text-base px-3 py-2 font-medium`}
                >
                  {link}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

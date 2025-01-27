import { useState } from "react";
import Icons from "./Icons";
import List from "./List";
import Logo from "./Logo";
import MenuButton from "./MenuButton";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex justify-between items-center border-b-2 shadow-lg border-blue-500 py-4 px-6 md:px-8 lg:px-8 xl:px-16 xl:py-7 2xl:px-32 2xl:py-8 ${
        isMenuOpen
          ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-md"
          : "bg-gradient-to-r from-blue-500 to-blue-700 text-white"
      } z-50 transition-colors duration-300`}
    >
      <Logo Name="DWI NUR CAHYA" />
      <MenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <div
        className={`fixed top-16 left-0 w-full h-screen text-white flex flex-col items-center justify-start transform transition-transform duration-500 md:static md:flex md:h-auto md:transform-none ${
          isMenuOpen
            ? "translate-x-0 bg-gradient-to-r from-blue-500 to-blue-700"
            : "-translate-x-full md:translate-x-0"
        }`}
      >
        <List toggleMenu={closeMenu} isMenuOpen={isMenuOpen} />
        {isMenuOpen && (
          <div className="mt-16">
            <Icons />
          </div>
        )}
      </div>
      <div className="hidden md:flex">
        <Icons />
      </div>
    </nav>
  );
};

export default Navbar;

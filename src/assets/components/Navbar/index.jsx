import { useState } from "react";
import Icons from "./Icons";
import List from "./List";
import Logo from "./Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center py-4 px-6 md:px-24 bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-sm z-50">
      <Logo Name="DWI NUR CAHYA" />
      <button
        className="text-white text-2xl md:hidden"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? "✖" : "☰"}
      </button>
      {/* Hamburger menu */}
      <div
        className={`fixed top-16 left-0 w-full h-[90vh] bg-gradient-to-r from-blue-500 to-blue-700 text-white flex flex-col items-center justify-start transform transition-transform duration-500 md:static md:flex md:h-auto md:transform-none ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <List toggleMenu={toggleMenu} />
      </div>
      {/* Icons only on desktop */}
      <div className="hidden md:flex">
        <Icons />
      </div>
    </nav>
  );
};

export default Navbar;

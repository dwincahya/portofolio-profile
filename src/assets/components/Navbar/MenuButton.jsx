const MenuButton = ({ isMenuOpen, toggleMenu }) => {
  return (
    <button
      className="relative w-10 h-10 flex items-center justify-center md:hidden"
      onClick={toggleMenu}
      aria-label="Toggle Menu"
    >
      <span
        className={`absolute h-1 w-8 bg-white rounded transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-3"
        }`}
      ></span>
      <span
        className={`absolute h-1 w-8 bg-white rounded transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-0" : "opacity-100"
        }`}
      ></span>
      <span
        className={`absolute h-1 w-8 bg-white rounded transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-3"
        }`}
      ></span>
    </button>
  );
};

export default MenuButton;

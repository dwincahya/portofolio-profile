const MenuButton = ({ isMenuOpen, toggleMenu }) => {
    return (
      <button
        className="text-white text-2xl md:hidden"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? "✖" : "☰"}
      </button>
    );
  };
  
  export default MenuButton;
  
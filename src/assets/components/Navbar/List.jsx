import { NavLink } from "react-router-dom";

const List = ({ isMenuOpen, toggleMenu }) => {
  return (
    <ul
      className={`${
        isMenuOpen
          ? "flex flex-col space-y-6 text-lg font-medium items-start w-full"
          : "hidden md:flex md:flex-row md:space-x-8 md:items-center md:space-y-0"
      }`}
    >
      {[
        { name: "Home", path: "/home" },
        { name: "Skills", path: "/skills" },
        { name: "Projects", path: "/projects" },
        { name: "Experiences", path: "/experience" },
        { name: "Contact", path: "/contact" },
      ].map(({ name, path }) => (
        <li
          key={name}
          className={`${
            isMenuOpen ? "w-full border-b border-gray-300 pb-2" : ""
          }`}
        >
          <NavLink
            to={path}
            onClick={toggleMenu}
            className={({ isActive }) =>
              `block ${
                isMenuOpen
                  ? "hover:text-yellow-300 transition"
                  : "text-white md:hover:text-yellow-400 transition"
              }`
            }
          >
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default List;

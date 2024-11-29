import { NavLink } from "react-router-dom";

const List = ({ isMenuOpen, toggleMenu }) => {
  return (
    <ul
      className={`${
        isMenuOpen
          ? "flex flex-col space-y-8 text-lg font-medium items-center w-full mt-8"
          : "hidden md:flex md:flex-row md:space-x-12 lg:space-x-16 md:items-center"
      }`}
    >
      {[
        { name: "Home", path: "/" },
        { name: "Skills", path: "/skills" },
        { name: "Projects", path: "/projects" },
        { name: "Experiences", path: "/experience" },
        { name: "Contact", path: "/contact" },
      ].map(({ name, path }) => (
        <li key={name}>
          <NavLink
            to={path}
            onClick={toggleMenu}
            className={({ isActive }) =>
              `block ${
                isActive
                  ? "text-yellow-300" 
                  : "text-white transition-colors duration-200"
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

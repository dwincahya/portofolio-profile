import { NavLink } from "react-router-dom";

const List = ({ isMenuOpen, toggleMenu }) => {
  return (
    <ul
      className={`${
        isMenuOpen
          ? "flex flex-col space-y-8 text-xl font-medium items-center w-full mt-6"
          : "hidden md:flex md:flex-row md:space-x-8 xl:text-xl lg:space-x-12  2xl:text-3xl md:items-center"
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
                  : "text-white transition-colors duration-200 hover:text-yellow-400"
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

import { NavLink } from "react-router-dom";

const List = ({ toggleMenu }) => {
  const links = [
    { name: "Home", path: "/" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Experiences", path: "/experience" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <ul className="flex flex-col items-center space-y-6 text-lg font-medium md:flex-row md:space-x-8 md:space-y-0 md:items-center text-center">
      {links.map(({ name, path }) => (
        <li key={name}>
          <NavLink
            to={path}
            onClick={toggleMenu}
            className={({ isActive }) =>
              `transition-colors duration-300 ${
                isActive
                  ? "text-green-400 font-bold"
                  : "text-slate-100 hover:text-green-400"
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

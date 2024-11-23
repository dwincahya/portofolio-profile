import { NavLink } from "react-router-dom";

const List = () => {
  return (
    <div>
      <ul className="flex space-x-8 text-sm font-medium text-gray-700">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-600 " : "hover:text-blue-600 transition"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive ? "text-blue-600 " : "hover:text-blue-600 transition"
            }
          >
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "text-blue-600 " : "hover:text-blue-600 transition"
            }
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/experience"
            className={({ isActive }) =>
              isActive ? "text-blue-600 " : "hover:text-blue-600 transition"
            }
          >
            Experiences
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-blue-600 " : "hover:text-blue-600 transition"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default List;

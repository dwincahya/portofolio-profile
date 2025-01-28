import { NavLink } from "react-router-dom";

const Logo = ({ Name }) => {
  return (
    <div className="text-2xl font-bold tracking-wide text-white md:text-xl lg:text-2xl 2xl:text=3xl whitespace-nowrap">
      <NavLink to="/">{Name}</NavLink>
    </div>
  );
};

export default Logo;

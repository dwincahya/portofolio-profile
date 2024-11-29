import { NavLink } from "react-router-dom";

const Logo = ({ Name }) => {
  return (
    <div className="text-2xl font-bold tracking-widest text-white md:text-xl lg:text-2xl">
      <NavLink to="/">{Name}</NavLink>
    </div>
  );
};

export default Logo;

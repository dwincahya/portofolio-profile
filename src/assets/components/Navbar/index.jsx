import Icons from "./Icon";
import List from "./List";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center py-4 px-24 bg-white shadow-sm border-b border-gray-400 z-50">
      <Logo Name="DWI NUR CAHYA"/>
      <List />
      <Icons />
    </nav>
  );
};

export default Navbar;

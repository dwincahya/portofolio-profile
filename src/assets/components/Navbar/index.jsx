import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center py-4 px-24 bg-white shadow-sm border-b border-gray-400 z-50">
      <div className="text-xl font-bold tracking-widest text-black">
        <a href="/">DWI NUR CAHYA</a>
      </div>

      <ul className="flex space-x-8 text-sm font-medium text-gray-700">
        <li className="hover:text-blue-600 cursor-pointer">
          <a href="/">Home</a>
        </li>
        <li className="hover:text-blue-600 cursor-pointer">
          <a href="/skills">Skills</a>
        </li>
        <li className="hover:text-blue-600 cursor-pointer">
          <a href="#projects">Projects</a>
        </li>
        <li className="hover:text-blue-600 cursor-pointer">
          <a href="#experiences">Experiences</a>
        </li>
        <li className="hover:text-blue-600 cursor-pointer">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="flex space-x-5 text-gray-700">
        <a
          href="https://github.com/dwincahya"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition"
        >
          <FaGithub size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/dwiccah/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition"
        >
          <FaLinkedin size={28} />
        </a>
        <a
          href="https://instagram.com/dwiccah"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition"
        >
          <FaInstagram size={28} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

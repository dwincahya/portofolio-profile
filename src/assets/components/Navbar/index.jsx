import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-white shadow-sm">
      <div className="text-2xl font-bold tracking-widest text-black">
        DWI NUR CAHYA
      </div>

      <ul className="flex space-x-8 text-sm font-medium text-gray-700">
        <li className="hover:text-blue-600 cursor-pointer">Home</li>
        <li className="hover:text-blue-600 cursor-pointer">Skills</li>
        <li className="hover:text-blue-600 cursor-pointer">Projects</li>
        <li className="hover:text-blue-600 cursor-pointer">Experients</li>
        <li className="hover:text-blue-600 cursor-pointer">Contact</li>
      </ul>

      <div className="flex space-x-4 text-gray-700">
        <a
          href="https://github.com/dwincahya"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/dwiccah/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="https://instagram.com/dwiccah"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition"
        >
          <FaInstagram size={20} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

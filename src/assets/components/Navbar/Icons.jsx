import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Icons = () => {
  return (
    <div className="flex space-x-8 text-gray-100">
      <a
        href="https://github.com/dwincahya"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-yellow-300 transition"
      >
        <FaGithub size={28} />
      </a>
      <a
        href="https://www.linkedin.com/in/dwiccah/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-yellow-300 transition"
      >
        <FaLinkedin size={28} />
      </a>
      <a
        href="https://instagram.com/dwiccah"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-yellow-300 transition"
      >
        <FaInstagram size={28} />
      </a>
    </div>
  );
};

export default Icons;

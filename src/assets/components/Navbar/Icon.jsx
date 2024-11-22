import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";


const Icons = () => {
  return (
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
  )
}

export default Icons
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Icons = ({ className = "" }) => {
  const socialLinks = [
    {
      href: "https://github.com/dwincahya",
      icon: <FaGithub size={28} />,
    },
    {
      href: "https://www.linkedin.com/in/dwiccah/",
      icon: <FaLinkedin size={28} />,
    },
    {
      href: "https://instagram.com/dwiccah",
      icon: <FaInstagram size={28} />,
    },
  ];

  return (
    <div className={`flex space-x-6 text-white ${className}`}>
      {socialLinks.map(({ href, icon }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400 transition-transform transform hover:scale-110"
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default Icons;

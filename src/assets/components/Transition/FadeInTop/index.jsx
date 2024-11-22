import { useState, useEffect } from "react";
import PropTypes from "prop-types"; 

const FadeInTop = ({ children, delay, duration}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all ease-in-out transform ${
        isVisible
          ? `opacity-100 translate-y-0 duration-${duration}`
          : "opacity-0 -translate-y-5"
      }`}
    >
      {children}
    </div>
  );
};

FadeInTop.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
  duration: PropTypes.number,
};

export default FadeInTop;

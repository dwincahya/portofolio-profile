import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 10) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 p-3 rounded-full shadow-lg bg-blue-500 text-white z-50 transition-all duration-500 ${
        isVisible
          ? "animate-fadeUp opacity-100"
          : "opacity-0 pointer-events-none"
      }`}
    >
      ↑
    </button>
  );
};

export default ScrollToTopButton;

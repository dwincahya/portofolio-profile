import { useEffect, useState } from "react";

const useSequentialAnimation = (length, delay = 100) => {
  const [animatedIndices, setAnimatedIndices] = useState([]);

  useEffect(() => {
    const timeouts = [];
    for (let i = 0; i < length; i++) {
      timeouts.push(
        setTimeout(() => {
          setAnimatedIndices((prev) => [...prev, i]);
        }, i * delay)
      );
    }
    return () => timeouts.forEach((timeout) => clearTimeout(timeout));
  }, [length, delay]);

  return animatedIndices;
};

export default useSequentialAnimation;

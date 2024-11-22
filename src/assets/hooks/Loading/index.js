import { useState, useEffect } from "react";

const useLoading = (delay = 500) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => setLoading(false), delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  return loading;
};

export default useLoading;

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const usePageLoading = (delay = 500) => {
  const location = useLocation(); // Mendapatkan rute aktif
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(null); // Menyimpan halaman yang dirender

  useEffect(() => {
    setLoading(true); // Mulai loading saat rute berubah

    // Simulasikan loading dengan delay
    const timer = setTimeout(() => {
      setLoading(false);
      setCurrentPage(location.pathname); // Update halaman yang aktif setelah loading selesai
    }, delay);

    return () => clearTimeout(timer); // Bersihkan timeout jika komponen di-unmount
  }, [location, delay]);

  return { loading, currentPage };
};

export default usePageLoading;

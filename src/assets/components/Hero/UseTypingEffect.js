import { useState, useEffect, useMemo } from "react";

const useTypingEffect = (
  texts,
  typingSpeed = 150,
  deletingSpeed = 50,
  delay = 1000
) => {
  const [displayText, setDisplayText] = useState(""); // Teks yang sedang tampil
  const [fullTextIndex, setFullTextIndex] = useState(0); // Indeks teks saat ini
  const [isDeleting, setIsDeleting] = useState(false); // Mode mengetik atau menghapus

  const fullTexts = useMemo(() => texts, [texts]); // Memastikan array tetap stabil

  useEffect(() => {
    const currentText = fullTexts[fullTextIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Mengetik teks
        if (displayText.length < currentText.length) {
          setDisplayText((prev) => currentText.slice(0, prev.length + 1));
        } else {
          // Jika selesai mengetik, tunggu sebentar lalu mulai menghapus
          setTimeout(() => setIsDeleting(true), delay);
        }
      } else {
        // Menghapus teks
        if (displayText.length > 0) {
          setDisplayText((prev) => prev.slice(0, -1));
        } else {
          // Jika selesai menghapus, pindah ke teks berikutnya
          setIsDeleting(false);
          setFullTextIndex((prevIndex) => (prevIndex + 1) % fullTexts.length);
        }
      }
    };

    // Timer untuk mengetik/menghapus
    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer); // Bersihkan timer
  }, [
    displayText,
    isDeleting,
    fullTextIndex,
    fullTexts,
    typingSpeed,
    deletingSpeed,
    delay,
  ]);

  return displayText;
};

export default useTypingEffect;

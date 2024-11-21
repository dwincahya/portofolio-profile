import { useState, useEffect, useMemo } from "react";
import img from "../../img/profile.png";

const Hero = () => {
  const [displayText, setDisplayText] = useState(""); // Teks yang sedang tampil
  const [fullTextIndex, setFullTextIndex] = useState(0); // Indeks teks saat ini
  const [isDeleting, setIsDeleting] = useState(false); // Mode mengetik atau menghapus
  const [delay, setDelay] = useState(150); // Kecepatan mengetik atau menghapus

  // Array teks yang akan ditampilkan
  const fullTexts = useMemo(() => ["Software Engineer", "Web Developer"], []);

  useEffect(() => {
    const currentText = fullTexts[fullTextIndex]; // Teks yang sedang ditampilkan

    const handleTyping = () => {
      if (!isDeleting) {
        // Mengetik teks
        if (displayText.length < currentText.length) {
          setDisplayText((prev) => currentText.slice(0, prev.length + 1));
        } else {
          // Jika selesai mengetik, tunggu sebentar lalu mulai menghapus
          setTimeout(() => setIsDeleting(true), 1000);
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

    // Mengatur interval mengetik atau menghapus
    const timer = setTimeout(handleTyping, isDeleting ? 50 : delay);

    return () => clearTimeout(timer); // Bersihkan interval
  }, [displayText, isDeleting, fullTextIndex, fullTexts, delay]);

  return (
    <div className="mt-20 ml-24 flex flex-col-reverse lg:flex-row items-center justify-between px-8 py-16 bg-white space-y-8 lg:space-y-0 lg:space-x-8">
      {/* Kotak teks */}
      <div className="bg-blue-600 text-white rounded-lg shadow-lg p-8 max-w-md">
        <h1 className="text-4xl font-bold mb-4">Hi, I'm Cahya.</h1>
        <h2 className="text-2xl font-semibold mb-6">
          {displayText}
          <span className="animate-blink">|</span>
        </h2>
        <p className="mb-4">
          I have a deep passion for technology and a constant drive to learn new things.
        </p>
        <p className="mb-4">
          I enjoy the process of building something from scratch, from conceptualizing an idea to implementing it into a tangible product.
        </p>
        <p className="mb-6">
          I believe that technology can be used to make the world a better place.
        </p>
        <button className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
          Check out my CV
        </button>
      </div>

      {/* Gambar dan dekorasi */}
      <div className="relative flex-shrink-0">
        <div className="absolute -top-16 -left-72 w-52 h-52 bg-gradient-to-br from-blue-500 to-blue-400 rounded-lg z-0"></div>
        <div className="absolute top-24 -left-28 w-52 h-52 bg-gradient-to-br from-blue-500 to-blue-400 rounded-lg z-0"></div>

        <img
          src={img}
          alt="Person"
          className="relative -left-48 -top-6 z-10 w-72 h-72 object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;

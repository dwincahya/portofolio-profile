import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import useSequentialAnimation from "@/assets/hooks/useSequentialAnimation";

const CertificateCard = ({ data }) => {
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Animasi hanya dipicu sekali
    threshold: 0.2,    // 20% dari komponen harus terlihat untuk memicu animasi
  });

  // Aktifkan animasi saat inView menjadi true
  React.useEffect(() => {
    if (inView) {
      setTriggerAnimation(true);
    }
  }, [inView]);

  const animatedIndices = useSequentialAnimation(data.length, 100);

  return (
    <div ref={ref} className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 my-10 md:my-20 text-center">
      <div className="text-xl md:text-2xl font-semibold mb-8 md:mb-16">CERTIFICATE</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 pb-5 gap-8 sm:gap-16 md:gap-20 lg:gap-24 xl:gap-28 2xl:gap-32 justify-items-center">
        {data.map((certificate, index) => (
          <div
            key={index}
            className={`bg-white shadow-md shadow-gray-400 rounded-lg overflow-hidden transform transition-transform duration-500 ${
              triggerAnimation && animatedIndices.includes(index) ? "animate-fadeUp" : "opacity-0"
            } hover:shadow-lg hover:shadow-gray-700 hover:scale-105 pb-3 cursor-pointer w-full sm:w-[300px] md:w-[340px] lg:w-[400px]`}
            onClick={() => window.open(certificate.file, "_blank")}
          >
            <img
              src={certificate.image}
              alt={certificate.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{certificate.title}</h3>
              <p className="text-gray-600 text-sm">{certificate.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificateCard;

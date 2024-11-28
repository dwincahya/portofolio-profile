import certificates from "./certif";

const CertificateCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 pb-10 gap-16 justify-items-center">
      {certificates.map((certificate, index) => (
        <div
          key={index}
          className="bg-white shadow-md shadow-gray-400 rounded-lg overflow-hidden transform transition duration-300 hover:shadow-lg hover:shadow-gray-700 hover:scale-105 cursor-pointer"
          style={{ width: "540px", height: "340px" }} 
          onClick={() => window.open(certificate.file, "_blank")}
        >
          <img
            src={certificate.image}
            alt={certificate.title}
            className="w-full h-[252px] object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">{certificate.title}</h3>
            <p className="text-gray-600 text-sm">{certificate.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CertificateCard;

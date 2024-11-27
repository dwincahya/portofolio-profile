import certificates from "./certif";

const CertificateCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 pb-10 gap-4 justify-items-center">
      {certificates.map((certificate, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:shadow-xl hover:shadow-gray-500 hover:scale-105 cursor-pointer"
          style={{ width: "372px", height: "292px" }} 
          onClick={() => window.open(certificate.file, "_blank")}
        >
          <img
            src={certificate.image}
            alt={certificate.title}
            className="w-full h-[180px] object-cover"
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

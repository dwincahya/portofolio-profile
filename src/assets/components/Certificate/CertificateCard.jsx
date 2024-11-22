import certificates from "./certif";

const CertificateCard = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {certificates.map((certificate, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg overflow-hidden w-[40%] mx-4 my-4 transform transition duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
          onClick={() => window.open(certificate.file, "_blank")} 
        >
          <img
            src={certificate.image}
            alt={certificate.title}
            className="w-full h-56 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">{certificate.title}</h3>
            <p className="text-gray-600">{certificate.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CertificateCard;

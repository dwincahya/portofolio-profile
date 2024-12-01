import CertificateCard from "./CertificateCard";
import certificates from "@/assets//Data/certif";


const Certificate = () => {
  return (
    <div className="items-center mx-24 my-20 justify-center text-center">
      <div className="text-2xl font-semibold mb-16">CERTIFICATE</div>
      <CertificateCard data={certificates} />
    </div>
  );
};

export default Certificate;

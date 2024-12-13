import CertificateCard from "./CertificateCard";
import certificates from "@/assets/Data/certif";

const Certificate = () => {
  return (
    <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 my-10 md:my-20 text-center">
      <div className="text-xl md:text-2xl font-semibold mb-8 md:mb-16">CERTIFICATE</div>
      <CertificateCard data={certificates} />
    </div>
  );
};

export default Certificate;

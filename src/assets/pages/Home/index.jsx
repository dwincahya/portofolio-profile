import Hero from "@/assets/components/Hero"
import CertificateCard from "@/assets/components/CertificateCard"
import DataCertif from "@/assets/Data/DataCertif"

const Home = () => {
  return (
    <div className="my-10 md:my-12 lg:my-14 xl:my-16 2xl:my-28">
        <Hero />
        <CertificateCard data={DataCertif}/>
    </div>
  )
}

export default Home
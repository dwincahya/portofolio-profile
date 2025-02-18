import Card from "./Card";
import PhotoProfile from "./Profile";

const Hero = () => {
  return (
    <div className="z-50 mt-20 md:mt-24 lg:mt-28 xl:mt-32">
      <div className="max-w-screen-lg mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-center gap-24 xl:gap-32">
      <Card
            Header="Hi, I'm Cahya."
            Description1="I have a deep passion for technology and a constant drive to learn new things."
            Description2="I enjoy the process of building something from scratch, from conceptualizing an idea to implementing it into a tangible product."
            Description3="I believe that technology can be used to make the world a better place."
            buttonName="Check out my CV"
            buttonLink="/CV/CV-DwiNurCahya.pdf"
          />
        <div className="max-w-md w-full">
        <PhotoProfile />
        </div>
      </div>
    </div>
  );
};

export default Hero;

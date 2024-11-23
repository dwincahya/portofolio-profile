import Card from "./Card";
import Profile from "./Profile";

const Hero = () => {
  return (
    <div className="mt-20 ml-24 flex flex-col-reverse lg:flex-row items-center justify-between px-8 py-16 bg-white space-y-8 lg:space-y-0 lg:space-x-8">
      <Card
        Header="Hi, I'm Cahya."
        Description1="I have a deep passion for technology and a constant drive to learn new things."
        Description2="I enjoy the process of building something from scratch, from conceptualizing an idea to implementing it into a tangible product."
        Description3="I believe that technology can be used to make the world a better place."
        buttonName="Check out my CV"
      />
      <Profile />
    </div>
  );
};

export default Hero;

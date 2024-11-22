import Card from "./Card";
import Profile from "./Profile";

const Hero = () => {
  return (
    <div className="mt-20 ml-24 flex flex-col-reverse lg:flex-row items-center justify-between px-8 py-16 bg-white space-y-8 lg:space-y-0 lg:space-x-8">
      <Card />
      <Profile />
    </div>
  );
};

export default Hero;

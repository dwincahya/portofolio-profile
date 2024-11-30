import img from "../../img/profile.png";

const PhotoProfile = () => {
  return (
    <div className="relative flex-shrink-0 flex items-center justify-center">
      <div className="absolute top-14 left-6 w-32 h-32 lg:top-6 lg:left-16 lg:w-48 lg:h-48 bg-gradient-to-br from-blue-700 to-blue-400 rounded-lg z-0"></div>
      <div className="absolute bottom-4 w-32 h-32 right-6 lg:top-36 lg:left-64 lg:w-48 lg:h-48 bg-gradient-to-br from-blue-400 to-blue-700 rounded-lg z-0"></div>
      <img
        src={img}
        alt="Person"
        className="relative z-10 w-72 left-5 bottom-14 lg:left-20 lg:-top-24 lg:w-96 h-auto object-cover"
      />
    </div>
  );
};

export default PhotoProfile;

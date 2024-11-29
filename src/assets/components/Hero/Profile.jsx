import img from "../../img/profile.png";

const PhotoProfile = () => {
  return (
    <div className="relative flex-shrink-0 flex items-center justify-center">
      <div className="absolute top-6 right-72 w-60 h-60 bg-gradient-to-br from-blue-500 to-blue-400 rounded-lg z-0"></div>
      <div className="absolute top-36 right-14 w-60 h-60 bg-gradient-to-br from-blue-500 to-blue-400 rounded-lg z-0"></div>
      <img
        src={img}
        alt="Person"
        className="relative z-10 right-20 -top-16 w-96 h-auto object-cover"
      />
    </div>
  );
};

export default PhotoProfile;

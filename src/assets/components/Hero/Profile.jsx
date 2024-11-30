import img from "../../img/profile.png";

const PhotoProfile = () => {
  return (
    <div className="relative flex-shrink-0 flex items-center justify-center">
      <div className="absolute top-6 right-46 w-48 h-48 bg-gradient-to-br from-blue-700 to-blue-400 rounded-lg z-0"></div>
      <div className="absolute top-36 left-64 w-48 h-48 bg-gradient-to-br from-blue-400 to-blue-700 rounded-lg z-0"></div>
      <img
        src={img}
        alt="Person"
        className="relative z-10 left-24 -top-24 w-96 h-auto object-cover"
      />
    </div>
  );
};

export default PhotoProfile;

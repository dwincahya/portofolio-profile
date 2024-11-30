import img from "../../img/profile.png";

const PhotoProfile = () => {
  return (
    <div className="relative flex-shrink-0 flex items-center justify-center">
      <div className="absolute top-6 right-46 w-60 h-60 bg-gradient-to-br from-blue-600 to-blue-300 rounded-lg z-0"></div>
      <div className="absolute top-36 left-72 w-60 h-60 bg-gradient-to-br from-blue-300 to-blue-600 rounded-lg z-0"></div>
      <img
        src={img}
        alt="Person"
        className="relative z-10 left-28 -top-24 w-96 h-auto object-cover"
      />
    </div>
  );
};

export default PhotoProfile;

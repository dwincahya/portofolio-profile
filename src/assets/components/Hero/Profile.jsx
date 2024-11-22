import img from "../../img/profile.png";

const Profile = () => {
  return (
    <div className="relative flex-shrink-0">
      <div className="absolute -top-16 -left-72 w-52 h-52 bg-gradient-to-br from-blue-500 to-blue-400 rounded-lg z-0"></div>
      <div className="absolute top-24 -left-28 w-52 h-52 bg-gradient-to-br from-blue-500 to-blue-400 rounded-lg z-0"></div>

      <img
        src={img}
        alt="Person"
        className="relative -left-48 -top-6 z-10 w-72 h-72 object-cover"
      />
    </div>
  );
};

export default Profile;

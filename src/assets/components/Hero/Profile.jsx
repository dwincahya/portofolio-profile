import img from "@/assets/img/profile.jpg";

const PhotoProfile = () => {
  return (
    <div className="flex-shrink-0 flex items-center justify-center my-10 md:mx-8">
      <div className="max-w-96 bg-gradient-to-r from-blue-500 via-blue-700 to-purple-600 rounded-full p-2">
        <div className="rounded-full overflow-hidden flex items-center justify-center">
          <img
            src={img}
            alt="Person"
            className="md:w-96 h-auto w-56 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoProfile;

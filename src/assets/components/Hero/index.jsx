import img from "../../img/profile.png";

const Hero = () => {
  return (
    <div className=" flex flex-col-reverse lg:flex-row items-center justify-between px-8 py-16 bg-white space-y-8 lg:space-y-0 lg:space-x-8">
      <div className="bg-blue-600 text-white rounded-lg shadow-lg p-8 max-w-md">
        <h1 className="text-4xl font-bold mb-4">Hi, I'm Cahya.</h1>
        <h2 className="text-2xl font-semibold mb-6">Software Engineer</h2>
        <p className="mb-4">
          I have a deep passion for technology and a constant drive to learn new
          things.
        </p>
        <p className="mb-4">
          I enjoy the process of building something from scratch, from
          conceptualizing an idea to implementing it into a tangible product.
        </p>
        <p className="mb-6">
          I believe that technology can be used to make the world a better
          place.
        </p>
        <button className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
          Check out my CV
        </button>
      </div>

      <div className="relative flex-shrink-0">
        <div className="absolute -top-16 -left-72 w-52 h-52 bg-gradient-to-br from-blue-500 to-blue-400 rounded-lg z-0"></div>
        <div className="absolute top-24 -left-28 w-52 h-52 bg-gradient-to-br from-blue-500 to-blue-400 rounded-lg z-0"></div>

        <img
          src={img}
          alt="Person"
          className="relative -left-48 -top-6 z-10 w-72 h-72 object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;

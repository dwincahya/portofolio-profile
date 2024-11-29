import useTypingEffect from "./UseTypingEffect";

const Card = ({
  Header,
  Description1,
  Description2,
  Description3,
  buttonName,
  buttonLink,
}) => {
  const displayText = useTypingEffect(["Software Engineer", "Web Developer"]);

  return (
    <div className="bg-blue-600 text-white md:rounded-lg shadow-lg p-6 sm:p-8 lg:p-10 shadow-slate-800 w-full max-w-full lg:max-w-md">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
        {Header}
      </h1>
      <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-6">
        {displayText}
        <span className="animate-blink">|</span>
      </h2>
      <p className="text-sm sm:text-base lg:text-lg mb-4">{Description1}</p>
      <p className="text-sm sm:text-base lg:text-lg mb-4">{Description2}</p>
      <p className="text-sm sm:text-base lg:text-lg mb-6">{Description3}</p>
      <button
        className="bg-gray-900 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-gray-800 transition"
        onClick={() => window.open(buttonLink, "_blank")}
      >
        {buttonName}
      </button>
    </div>
  );
};

export default Card;

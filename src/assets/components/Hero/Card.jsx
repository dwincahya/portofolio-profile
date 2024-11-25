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
    <div className="bg-blue-600 text-white rounded-lg shadow-lg p-8 max-w-md">
      <h1 className="text-4xl font-bold mb-4">{Header}</h1>
      <h2 className="text-2xl font-semibold mb-6">
        {displayText}
        <span className="animate-blink">|</span>
      </h2>
      <p className="mb-4">{Description1}</p>
      <p className="mb-4">{Description2}</p>
      <p className="mb-6">{Description3}</p>
      <button className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
      onClick={() => window.open(buttonLink, "_blank")}>
        {buttonName}
      </button>
    </div>
  );
};

export default Card;

import useTypingEffect from "./UseTypingEffect";

const Card = () => {
  const displayText = useTypingEffect(["Software Engineer", "Web Developer"]);

  return (
    <div className="bg-blue-600 text-white rounded-lg shadow-lg p-8 max-w-md">
        <h1 className="text-4xl font-bold mb-4">Hi, I'm Cahya.</h1>
        <h2 className="text-2xl font-semibold mb-6">
          {displayText}
          <span className="animate-blink">|</span>
        </h2>
        <p className="mb-4">
          I have a deep passion for technology and a constant drive to learn new
          things.
        </p>
        <p className="mb-4">
          I enjoy the process of building something from scratch, from
          conceptualizing an idea to implementing it into a tangible product.
        </p>
        <p className="mb-6">
          I believe that technology can be used to make the world a better place.
        </p>
        <button className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
          Check out my CV
        </button>
    </div>
  );
};

export default Card;

import useSequentialAnimation from "@/assets/hooks/useSequentialAnimation"; 

const CardPorto = ({ data }) => {
  const animatedIndices = useSequentialAnimation(data.length, 100);

  return (
    <div className="flex flex-col gap-6 p-6 md:p-8 lg:p-16 min-h-screen">
      {data.map((item, index) => (
        <div
          key={item.id}
          className={`flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-500 ${
            animatedIndices.includes(index) ? "animate-fadeUp" : "opacity-0"
          } hover:scale-105 hover:shadow-lg`}
        >
          <div className="flex-shrink-0 w-full md:w-1/3">
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-90"
              />
            </a>
          </div>

          <div className="flex flex-col justify-center p-6 w-full md:w-2/3">
            <h1 className="text-2xl font-bold text-gray-800">{item.title}</h1>
            <p className="text-gray-600 mt-2">{item.description}</p>
            <div className="mt-4">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
              >
                Go to Website
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardPorto;

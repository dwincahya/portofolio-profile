
const CardPorto = ({ data }) => {
  return (
    <div className="flex flex-col gap-6 p-6  min-h-screen">
      {data.map((item) => (
        <div
          key={item.id}
          className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden animate-fadeUp"
        >
          <div className="flex-shrink-0 w-full md:w-1/3">
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </a>
          </div>

          <div className="flex flex-col justify-center p-6 w-full md:w-2/3">
            <h1 className="text-2xl font-bold text-gray-800">{item.title}</h1>
            <p className="text-gray-600 mt-2">{item.description}</p>
            <div className="mt-4">
              <button className="text-sm font-semibold bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors">
                Go to Website
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardPorto;

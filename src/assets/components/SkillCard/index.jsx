import useSequentialAnimation from "@/assets/hooks/useSequentialAnimation";

const SkillCard = ({ data }) => {
  const animatedIndices = useSequentialAnimation(data.length, 100);

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        {data && data.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {data.map((skill, index) => (
              <div
                key={index}
                className={`bg-white text-center rounded-lg shadow-lg p-6 transition-transform duration-500 transform ${
                  animatedIndices.includes(index) ? "animate-fadeUp" : "opacity-0"
                } hover:scale-105 hover:shadow-xl`}
              >
                <div className="flex justify-center items-center text-blue-950 text-5xl mb-4">
                  <skill.icon />
                </div>
                <h3 className="text-lg font-bold text-black mb-4">
                  {skill.title}
                </h3>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-red-600">No skills data available</p>
        )}
      </div>
    </div>
  );
};

export default SkillCard;

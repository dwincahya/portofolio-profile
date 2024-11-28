import SkillData from "./SkillData";

const SkillCard = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-6 lg:px-16">
        {SkillData && SkillData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SkillData.map((skill, index) => (
              <div
                key={index}
                className="bg-white text-center rounded-lg shadow-lg p-6 transition transform hover:scale-105 hover:shadow-xl"
              >
                <div className="flex justify-center items-center text-blue-800 text-5xl mb-4">
                  <skill.icon />
                </div>
                <h3 className="text-lg font-bold text-blue-800 mb-4">
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
import skills from "./skills"; 

const SkillCard = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white text-center rounded-lg shadow-lg p-6 transition transform hover:scale-105 hover:shadow-xl"
            >
              <div className="text-blue-600 text-4xl mb-4">{skill.icon}</div>
              <h3 className="text-lg font-bold text-blue-800 mb-4">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;

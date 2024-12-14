import useSequentialAnimation from "@/assets/hooks/useSequentialAnimation";

const List = ({ data }) => {
  const animatedIndices = useSequentialAnimation(data.length, 100);

  return (
    <div className="experience-list py-12 px-4 md:px-6 lg:px-8">
      {data.map((experience, index) => (
        <div
          key={experience.id}
          className={`bg-white shadow-md rounded-lg p-6 mb-8 border border-gray-200 hover:shadow-lg transition-all duration-500 transform ${
            animatedIndices.includes(index) ? "animate-fadeUp" : "opacity-0 "
          }`}
        >
          <h3 className="text-xl font-semibold text-black">
            {experience.title} - {experience.company}
          </h3>
          <p className="text-sm font-medium text-gray-500 mt-1">
            {experience.category} - {experience.startDate} to {experience.endDate}, {experience.location}
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
            {Array.isArray(experience.description) ? (
              experience.description.map((point, i) => <li key={i}>{point}</li>)
            ) : (
              <li>{experience.description}</li>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default List;

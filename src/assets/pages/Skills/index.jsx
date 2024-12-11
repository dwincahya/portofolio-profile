import SkillCard from "@/assets/components/SkillCard";
import SkillData from "@/assets/Data/SkillData";

const Skills = () => {
  return (
    <div className="items-center my-12 md:my-14 lg:my-16 justify-center text-center">
      <SkillCard data={SkillData} />
    </div>
  );
};

export default Skills;

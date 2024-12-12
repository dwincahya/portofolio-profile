import SkillCard from "@/assets/components/SkillCard";
import SkillData from "@/assets/Data/SkillData";

const Skills = () => {
  return (
    <div className="items-center my-10 md:my-12 lg:my-14 xl:my-16 2xl:my-28 justify-center text-center">
      <SkillCard data={SkillData} />
    </div>
  );
};

export default Skills;

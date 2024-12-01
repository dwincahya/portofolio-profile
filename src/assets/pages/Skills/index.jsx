import SkillCard from "@/assets/components/SkillCard";
import Header from "./Header";
import SkillData from "@/assets/Data/SkillData";

const Skills = () => {
  return (
    <div className="items-center pt-32 justify-center text-center">
      <Header title="My Skills" />
      <SkillCard data={SkillData} />
      <SkillCard data={SkillData} />
    </div>
  );
};

export default Skills;

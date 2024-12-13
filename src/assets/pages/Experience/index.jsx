import List from "@/assets/components/List"
import experienceData from "@/assets/Data/Experience"

const Experience = () => {
  return (
    <div className="my-10 md:my-12 lg:my-14 xl:my-16 2xl:my-28">
      <List data={experienceData}/>
    </div>
  )
}

export default Experience
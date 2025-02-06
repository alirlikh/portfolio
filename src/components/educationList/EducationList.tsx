import { educations } from "@/Data/data"
import EducationCard from "../educationCard/educationCard"

function EducationList() {
  return (
    <>
      {educations?.map((education: any, index: number) => (
        <EducationCard key={education.id} education={education} index={index} />
      ))}
    </>
  )
}
export default EducationList

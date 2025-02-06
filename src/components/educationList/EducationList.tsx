import { educations } from "@/Data/data"
import EducationCard from "../../components/educationCard/EducationCard"

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

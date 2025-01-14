import ProjectCard from "../projectCard/ProjectCard"
import { projects } from "@/Data/data"

export default function ProjectList() {
  return (
    <div className="py-40 mx-auto flex flex-row items-center justify-center flex-wrap">
      {projects.map((project, index) => {
        return <ProjectCard key={index} project={project} />
      })}
    </div>
  )
}

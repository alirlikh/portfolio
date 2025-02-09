import ProjectCard from "../projectCard/ProjectCard"
import { projects } from "@/Data/data"
import { motion } from "framer-motion"

export default function ProjectList() {
  const animationVariants = {
    initial: {
      y: -100,
      opacity: 0
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        staggerChildren: 0.5,
        delayChildren: 0.3
      }
    }
  }
  return (
    <motion.div
      variants={animationVariants}
      initial={"initial"}
      animate={"animate"}
      className="py-40 mx-auto flex flex-row items-center justify-center flex-wrap"
    >
      {projects.map((project, index) => {
        return <ProjectCard key={index} project={project} />
      })}
    </motion.div>
  )
}

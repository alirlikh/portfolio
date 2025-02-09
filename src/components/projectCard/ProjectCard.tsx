import Image from "next/image"
import { animate, motion } from "framer-motion"
import { Github } from "../icons/github"
import { Earth } from "../icons/earth"

export type Project = {
  id: number
  name: string
  githubUrl: string
  demoUrl: string
  image: string
}

export default function ProjectCard({ project }: { project: Project }) {
  const { image, githubUrl, demoUrl, name } = project

  const variants = {
    initial: { y: -100, opacity: 0 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        staggerChildren: 0.5,
        delayChildren: 0.1
      }
    }
  }

  return (
    <>
      <motion.div
        className="max-w-96  rounded-[40px] bg-gray-800 w-full mx-8 mt-20 border-2 border-gray-700"
        whileHover={{ y: -10 }}
        variants={variants}
      >
        {/* image */}
        <div className="w-5/6 mx-auto place-items-center -mt-12 relative h-52  ">
          <Image
            priority
            src={image}
            alt={`${name} project image`}
            fill
            className="object-cover rounded-[40px] border-2   border-dashed p-2 border-purple-300 "
          />
        </div>
        {/* content */}
        <div className="mx-auto p-3 mt-5 text-center space-y-6 mb-3">
          <h4 className=" font-bold text-3xl capitalize py-3 underline underline-offset-[16px] decoration-purple-300 ">
            {name}
          </h4>
          {/* button */}
          <div>
            <ul className="flex flex-row justify-center items-center *:m-2">
              <li>
                <a target="_blank" href={githubUrl} rel="noopener noreferrer" aria-label="#">
                  <Github />
                </a>
              </li>

              <li>
                <a target="_blank" href={demoUrl} rel="noopener noreferrer" aria-label="#">
                  <Earth />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </>
  )
}

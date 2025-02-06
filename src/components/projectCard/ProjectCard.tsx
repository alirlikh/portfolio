import Image from "next/image"
import { motion } from "framer-motion"
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
  return (
    <>
      <motion.div
        className="max-w-96  rounded-[40px] bg-gray-800 w-full mx-8 mt-20 border-2 border-gray-700"
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            delay: 0.2
            // duration: 0.7
          }
        }}
        whileHover={{ y: -5, opacity: 1 }}
      >
        {/* image */}
        <div className="w-5/6 mx-auto place-items-center -mt-12 relative h-52  ">
          <Image
            priority
            src={image}
            alt={`${name} project image`}
            fill
            className="object- rounded-[40px] border-2   border-dashed p-2 border-purple-300 "
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

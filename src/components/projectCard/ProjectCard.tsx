import Image from "next/image"
import { Github } from "../icons/github"
import NavLink from "../link/NavLink"
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
    <div
      className="max-w-96  rounded-lg bg-gray-800 w-full mx-8 mt-20 border-2 border-gray-700"
      //    initial={{ y: -100, opacity: 0 }}
      //    animate={{ y: 0, opacity: 1 }}
      //    whileHover={{ y: 100, opacity: 1 }}
    >
      {/* image */}
      <div className="w-5/6 mx-auto -mt-12 relative h-52  ">
        <Image
          src={image}
          alt={`${name} project image`}
          fill
          className="object-cover rounded-lg drop-shadow-[0px_5px_3px_rgba(var(--color-purple-300),0.5)] "
        />
      </div>
      {/* content */}
      <div className="mx-auto p-3 mt-5 text-center space-y-6 mb-3">
        <h4 className=" font-bold text-3xl capitalize py-3 underline underline-offset-[16px] decoration-purple-300 decoration-dashed">
          {name}
        </h4>
        {/* button */}
        <div>
          <ul className="flex flex-row justify-center items-center *:m-2">
            <li>
              <NavLink href={githubUrl} passHref legacyBehavior>
                <a target="_blank" rel="noopener noreferrer" aria-label="#">
                  <Github />
                </a>
              </NavLink>
            </li>

            <li>
              <NavLink href={demoUrl} passHref legacyBehavior>
                <a target="_blank" rel="noopener noreferrer" aria-label="#">
                  <Earth />
                </a>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

import { Github } from "../icons/github"
import { Linkdin } from "../icons/linkdin"
import { Mail } from "../icons/mail"
import NavLink from "../link/NavLink"

export default function Footer() {
  const date = new Date()

  return (
    <div className="flex flex-col items-start m-4 px-4 md:px-12 mt-16 ">
      <div className="w-full py-2 bg-gray-850 px-4 rounded-full flex flex-row justify-between items-center max-w-screen-2xl mx-auto">
        <p className="text-gray-400 text-sm m-2">Follow me</p>
        <div className="flex flex-row items-center w-24 justify-around">
          <NavLink href={"https://github.com/alirlikh"} passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" aria-label="github">
              <Github></Github>
            </a>
          </NavLink>
          <NavLink href={"https://linkedin.com/in/alireza-jalili"} passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" aria-label="linkdin">
              <Linkdin></Linkdin>
            </a>
          </NavLink>
          <NavLink href={"mailto:alirezajalili.pm@gmail.com"} passHref legacyBehavior>
            <a href="mailto:alirezajalili.pm@gmail.com" aria-label="mail">
              <Mail></Mail>
            </a>
          </NavLink>
        </div>
      </div>
      <div className="m-3">
        <span className="text-sm text-gray-400 p-2">Made with 👨‍💻🤦‍♂️❤️️</span>
      </div>
    </div>
  )
}

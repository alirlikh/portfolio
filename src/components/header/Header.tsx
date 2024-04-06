import NavLink from "../link/NavLink"
import { Github } from "../icons/github"
import { Linkdin } from "../icons/linkdin"
import { Mail } from "../icons/mail"
import { Figma } from "../icons/figma"

export default function Header() {
  return (
    <header className="fixed p-3 left-1/2 transform -translate-x-1/2  max-w-80 bottom-2 md:max-w-[622px] md:top-0 md:bottom-auto">
      <nav className="bg-gray-300 backdrop-blur-xl rounded-full px-5 py-1 h-[70px] overflow-auto no-scrollbar">
        <ul className="flex flex-row p-2 justify-between *:mx-3 *:p-1 *:my-1 ">
          <li>
            <NavLink href={"/"}>Alireza</NavLink>
          </li>
          <li>
            <NavLink href={"/experience"}>experience</NavLink>
          </li>
          <li>
            <NavLink href={"/education"}>education</NavLink>
          </li>
          <li className="w-32">
            <div className="hidden md:flex flex-row  items-center justify-between ">
              <NavLink href={"https://www.google.com"} passHref legacyBehavior>
                <a target="_blank" rel="noopener noreferrer">
                  <Figma></Figma>
                </a>
              </NavLink>
              <NavLink href={"https://www.google.com"} passHref legacyBehavior>
                <a target="_blank" rel="noopener noreferrer">
                  <Linkdin></Linkdin>
                </a>
              </NavLink>
              <NavLink href={"https://www.google.com"} passHref legacyBehavior>
                <a target="_blank" rel="noopener noreferrer">
                  <Github></Github>
                </a>
              </NavLink>
              <NavLink href={"mailto:john@example.com"} passHref legacyBehavior>
                <a href="mailto:john@example.com">
                  <Mail></Mail>
                </a>
              </NavLink>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  )
}

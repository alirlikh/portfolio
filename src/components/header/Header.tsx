import NavLink from "../link/NavLink"
import { Github } from "../icons/github"
import { Linkdin } from "../icons/linkdin"
import { Mail } from "../icons/mail"
import { Figma } from "../icons/figma"

export default function Header() {
  return (
    <header className="fixed p-3 left-1/2 transform -translate-x-1/2  max-w-80 bottom-2 md:max-w-[620px] md:top-0">
      <nav className="bg-gray-300 backdrop-blur-xl rounded-full px-5 py-1 h-[70px] overflow-auto no-scrollbar">
        <ul className="flex flex-row p-2 justify-between *:mx-3 *:p-1 *:my-1 *:transition-all  *:duration-150 *:delay-50">
          <li className="hover:brightness-[0.6]">
            <NavLink href={"/"}>Alireza</NavLink>
          </li>
          <li className="hover:brightness-[0.6]">
            <NavLink href={"/experience"}>experience</NavLink>
          </li>
          <li className="hover:brightness-[0.6]">
            <NavLink href={"/education"}>education</NavLink>
          </li>
          <li className="w-32">
            <div className="hidden md:flex flex-row  items-center justify-between  *:transition-all  *:duration-150 *:delay-50  ">
              <NavLink href={"#"} className="hover:brightness-[0.6]">
                <Figma></Figma>
              </NavLink>
              <NavLink href={"#"} className="hover:brightness-[0.6]">
                <Github></Github>
              </NavLink>
              <NavLink href={"#"} className="hover:brightness-[0.6]">
                <Linkdin></Linkdin>
              </NavLink>
              <NavLink href={"#"} className="hover:brightness-[0.6]">
                <Mail></Mail>
              </NavLink>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  )
}

import NavLink from "../link/NavLink"
import { Github } from "../icons/github"
import { Linkdin } from "../icons/linkdin"
import { Mail } from "../icons/mail"
import { Figma } from "../icons/figma"

export default function Header() {
  return (
    <header className="p-3 fixed  left-1/2 transform -translate-x-1/2 ">
      <nav className="bg-gray-700 backdrop-blur-lg rounded-full px-5 py-1 ">
        <ul className="flex flex-row p-2 justify-between ">
          <li className="m-3 p-1">
            <NavLink href={"/"}>Alireza</NavLink>
          </li>
          <li className="m-3 p-1">
            <NavLink href={"/education"}>education</NavLink>
          </li>
          <li className="m-3 p-1">
            <NavLink href={"/experience"}>experience</NavLink>
          </li>
          <li className="m-3 w-32 p-1">
            <div className="flex flex-row items-center justify-between">
              <NavLink href={"#"}>
                <Figma></Figma>
              </NavLink>
              <NavLink href={"#"}>
                <Github></Github>
              </NavLink>
              <NavLink href={"#"}>
                <Linkdin></Linkdin>
              </NavLink>
              <NavLink href={"#"}>
                <Mail></Mail>
              </NavLink>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  )
}

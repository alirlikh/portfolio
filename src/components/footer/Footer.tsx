import { Github } from "../icons/github"
import { Linkdin } from "../icons/linkdin"
import { Mail } from "../icons/mail"
import NavLink from "../link/NavLink"

export default function Footer() {
  interface Icon {
    id: number
    name: string
    href: string
    icon: JSX.Element
  }

  const iconList: Icon[] = [
    {
      id: 1,
      name: "Linkdin",
      href: "https://linkedin.com/in/alireza-jalili",
      icon: <Linkdin />
    },
    { id: 2, name: "Github", href: "https://github.com/alirlikh", icon: <Github /> },
    {
      id: 3,
      name: "Mail",
      href: "mailto:alirezajalili.pm@gmail.com",
      icon: <Mail />
    }
  ]

  return (
    <div className="flex flex-col items-start m-4 px-4 md:px-12 mt-16 ">
      <div className="w-full py-2 bg-gray-850 px-4 rounded-full flex flex-row justify-between items-center max-w-screen-2xl mx-auto">
        <p className="text-gray-400 text-sm m-2">Follow me</p>
        <div className="flex flex-row items-center w-24 justify-around">
          {iconList?.map((item: Icon) => (
            <NavLink href={item.href} passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer" aria-label={item.name}>
                {item.icon}
              </a>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="m-3">
        <span className="text-sm text-gray-400 p-2">Made with 👨‍💻🤦‍♂️❤️️</span>
      </div>
    </div>
  )
}

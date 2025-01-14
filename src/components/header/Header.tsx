import NavLink from "../link/NavLink"
import { Github } from "../icons/github"
import { Linkdin } from "../icons/linkdin"
import { Mail } from "../icons/mail"

export default function Header() {
  interface Menu {
    id: number
    title: string
    href: string
    isIcon: boolean
    icon?: JSX.Element
  }

  const menuItem: Menu[] = [
    { id: 1, title: "Alireza", href: "/", isIcon: false },
    { id: 2, title: "project", href: "/project", isIcon: false },
    { id: 3, title: "experience", href: "/experience", isIcon: false },
    { id: 4, title: "education", href: "/education", isIcon: false },
    {
      id: 5,
      title: "Linkdin",
      href: "https://linkedin.com/in/alireza-jalili",
      isIcon: true,
      icon: <Linkdin />
    },
    { id: 6, title: "Github", href: "https://github.com/alirlikh", isIcon: true, icon: <Github /> },
    {
      id: 7,
      title: "Mail",
      href: "mailto:alirezajalili.pm@gmail.com",
      isIcon: true,
      icon: <Mail />
    }
  ]
  return (
    <header className="fixed p-3 left-1/2 transform -translate-x-1/2  max-w-80 bottom-2 md:max-w-[622px] md:top-0 md:bottom-auto z-10 ">
      <nav className="bg-gray-scale/35  backdrop-blur-xl rounded-full px-5 py-2 h-[83px] overflow-auto no-scrollbar">
        <ul className="flex flex-row p-2 justify-between  items-center ">
          {menuItem?.map((item: Menu) =>
            !item.isIcon ? (
              <li className="mx-3 p-1 my-1 flex-grow flex-1 flex-shrink " key={item.id}>
                <NavLink href={item.href}>{item.title}</NavLink>
              </li>
            ) : (
              <li
                key={item.id}
                className="hidden md:flex flex-row  items-center justify-between m-0 p-1"
              >
                <a
                  target="_blank"
                  href={item.href}
                  rel="noopener noreferrer"
                  aria-label={item.title}
                >
                  {item.icon}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>
    </header>
  )
}

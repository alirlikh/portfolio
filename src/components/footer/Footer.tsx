import { Github } from "../icons/github"
import { Linkdin } from "../icons/linkdin"
import { Mail } from "../icons/mail"

export default function Footer() {
  return (
    <div className="flex flex-col items-start m-4 ">
      <div className="w-full py-2 bg-gray-850 px-4 rounded-full flex flex-row justify-between items-center">
        <p className="text-gray-400 text-sm m-2">Follow me</p>
        <div className="flex flex-row items-center w-24 justify-around">
          <Github />
          <Linkdin />
          <Mail />
        </div>
      </div>
      <div className="m-3">
        <span className="text-sm text-white p-2">alireza 2024</span>
      </div>
    </div>
  )
}

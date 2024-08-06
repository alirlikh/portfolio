import React from "react"
import { cvUrl } from "@/Data/data"
import { ArrowRight } from "../icons/arrow-right"

function DownloadButton() {
  return (
    <div className="text-nowrap btn bg-white text-gray-900 rounded-full text-center font-bold  px-6 py-1 relative w-48 h-12">
      <div className=" flex row justify-center items-center absolute right-6 top-0   hover:right-2  group transition-all duration-300 delay-75">
        <ArrowRight
          className={"opacity-5 group-hover:opacity-100 transition-opacity duration-200 delay-75"}
        />
        <a download href={cvUrl} className=" cursor-pointer mx-3 px-2 ml-0">
          Download CV
        </a>
      </div>
    </div>
  )
}

export default DownloadButton

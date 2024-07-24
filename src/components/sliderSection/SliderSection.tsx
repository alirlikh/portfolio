import React from "react"
import Slider from "@/components/slider/Slider"

function SliderSection() {
  const date = new Date()
  return (
    <section className=" flex flex-col items-center my-28 md:flex-row md:justify-between mx-auto md:mt-56 ">
      <div className="flex items-center justify-center p-2 my-6 w-[10%] md:basis-[20%]">
        <p className="flex flex-col md:text-start text-gray-400 text-[16px] font-normal text-center">
          + {date.getFullYear() - 2023} years
          <span className="text-white font-bold text-[80px] text-center p-1 leading-[100px]">
            XP
          </span>
          developping
        </p>
      </div>
      <div className=" w-full md:w-[80%] p-8">
        <Slider></Slider>
      </div>
    </section>
  )
}

export default SliderSection

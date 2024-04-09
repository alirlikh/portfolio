import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { FreeMode, Pagination } from "swiper/modules"

import { JsSlider } from "../icons/jsSlider"
import { NextSlider } from "../icons/nextSlider"
import { ReactSlider } from "../icons/reactSlider"

export default function Slider() {
  const imageSrc = [
    { src: JsSlider, color: "#C3C99E" },
    { src: NextSlider, color: "#C2C2C2" },
    { src: ReactSlider, color: "#7D9CA5" }
  ]

  return (
    <Swiper
      breakpoints={{
        480: {
          slidesPerView: 1.2
        },
        768: {
          slidesPerView: 2.2
        }
      }}
      spaceBetween={20}
      pagination={{
        clickable: true
      }}
      modules={[Pagination]}
      className="mySwiper"
      style={
        {
          //    "--swiper-pagination-color": "#FFBA08",
          //    "--swiper-pagination-bullet-inactive-color": "#999999",
          //    "--swiper-pagination-bullet-inactive-opacity": "1",
          //    "--swiper-pagination-bullet-size": "16px",
          //    "--swiper-pagination-bullet-horizontal-gap": "6px"
        }
      }
    >
      {imageSrc.map((item: any, index: number) => (
        <SwiperSlide key={index}>
          <div
            className="flex h-[280px] rounded-[60px] justify-start items-center p-10 *:m-3"
            style={{ backgroundColor: item.color }}
          >
            <item.src></item.src>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

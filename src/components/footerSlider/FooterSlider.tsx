import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { FreeMode, Pagination } from "swiper/modules"
import Image from "next/image"
import { technology } from "@/Data/skills"

export default function FooterSlider() {
  return (
    <Swiper
      breakpoints={{
        480: {
          slidesPerView: 1.2
        },
        768: {
          slidesPerView: 3.2
        }
      }}
      spaceBetween={100}
      freeMode={true}
      loop={true}
      className="mySwiper"
    >
      <ul>
        {technology?.map((slide: any) => (
          <SwiperSlide>
            <li
              className="flex flex-col items-start border-2 border-gray-700 rounded-[12px] px-7 pb-9 pt-6"
              key={slide.id}
            >
              <h3 className="p-3 mx-3 text-nowrap">{slide.name}</h3>
              <ul className="flex flex-col p-0 ml-3 *:my-1 *:p-1">
                {slide.items?.map((item: any, index: number) => (
                  <li className="flex flex-row justify-start items-center " key={index}>
                    <span className="bg-gray-700 rounded-full p-3 mr-5">
                      <Image src={item.url} width={20} height={20} alt={item.name}></Image>
                    </span>
                    {item.name}
                  </li>
                ))}
              </ul>
            </li>
          </SwiperSlide>
        ))}
      </ul>
    </Swiper>
  )
}

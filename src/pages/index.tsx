import Image from "next/image"
import avatar from "../../public/images/avatar.svg"
import Link from "next/link"
import Slider from "@/components/slider/Slider"
import FooterSlider from "@/components/footerSlider/FooterSlider"

export default function Home() {
  return (
    <>
      <section className=" py-2 px-6 md:px-28 flex flex-col-reverse items-center lg:flex-row md:justify-between md:mt-28">
        <div className="flex flex-col w-full  md:max-w-4xl ">
          <div className="flex flex-col items-center m-2 mb-6 lg:items-start">
            <h2 className="text-4xl font-normal md:text-7xl md:font-bold my-4 p-2">Title</h2>
            <p className="text-gray-400 p-2 mx-3 text-center md:text-start">
              Lorem Ipsum is simply dummy text of the{" "}
              <span className="font-bold text-lg text-white">printing</span> printing and{" "}
              <span className="font-bold text-lg text-white">typesetting industry</span> typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged
            </p>
          </div>
          <div className="flex flex-col items-center m-2 mt-8 *:my-4 *:mx-2 md:flex-row text-nowrap">
            <span>
              <Link
                href={"#"}
                className="btn bg-white text-gray-900 rounded-full py-3 px-12 text-center font-bold m-2"
              >
                Download CV
              </Link>
            </span>
            <span className="text-purple-300">
              <Link href={"/experience"} className="py-3 px-12c m-2">
                See experiences
              </Link>
            </span>
          </div>
        </div>
        <div className="my-6 mx-auto p-2  md:m-0 ">
          <Image
            src={avatar}
            alt="profile image"
            className="mx-auto aspect-auto max-w-36 md:max-w-56 lg:max-w-80 "
          />
        </div>
      </section>
      <section className=" flex flex-col items-center my-28 md:flex-row md:justify-between mx-auto md:mt-56 ">
        <div className="flex items-center justify-center p-2 my-6 w-[10%] md:basis-[20%]">
          <p className="flex flex-col md:text-start text-gray-400 text-[16px] font-normal text-center">
            4 years
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
      <section className="p-2 my-48">
        <div className="flex flex-col justify-center items-center *:p-3 *:my-7 md:*:my-4 *:font-extrabold *:text-[80px] *:leading-[130px]">
          <h2 className="text-violet-300">Codding</h2>
          <h2 className="text-violet-500">Javascript</h2>
          <h2 className="text-violet-700">React</h2>
          <h2 className="text-violet-900">Coffe</h2>
        </div>
      </section>
      <section className="mt-60 mb-20">
        <div className="md:my-16 my-9 sm:my-10 flex justify-center items-center  sm:text-[30px] md:text-[50px] text-[20px] text-center ">
          <h2 className="sm:max-w-[350px] md:max-w-[500px]  max-w-[300px] md:leading-[80px]">
            The technologies I’ve been using...
          </h2>
        </div>
        <FooterSlider></FooterSlider>
      </section>
    </>
  )
}

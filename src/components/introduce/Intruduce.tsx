import { motion } from "framer-motion"
import Image from "next/image"
import avatar from "../../../public/images/avatar.svg"
import Link from "next/link"
import React from "react"
import { cvUrl } from "@/Data/data"
import DownloadButton from "@/components/downloadButton/DownloadButton"

function Introduce() {
  return (
    <section className=" py-2 px-6 md:px-28 flex flex-col-reverse items-center lg:flex-row md:justify-between md:mt-28">
      <motion.div
        className="flex flex-col w-full  md:max-w-4xl items-center lg:items-baseline"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          duration: 0.7
        }}
      >
        <div className="flex flex-col items-center m-2 mb-6 lg:items-start">
          <h2 className="text-4xl font-normal md:text-7xl my-4 mx-3 p-2 md:mt-[80px]">
            Hi, I’m Alireza
          </h2>
          <p className="text-gray-400 p-2 mx-3 text-center md:text-start max-w-[500px]">
            who a <span className="font-bold text-lg text-white"> frontend developer </span>
            {/* <span className="font-bold text-lg text-white"></span> */}
            with a passion for creating dynamic and user-friendly websites. With a focus on clean,
            efficient code , I strive to build engaging digital experiences
          </p>
        </div>
        <div className="flex flex-col items-center m-2 mt-8 *:my-4 *:mx-2 md:flex-row text-nowrap">
          <DownloadButton />
          <span className="text-purple-300">
            <Link href={"/experience"} className="py-3 px-12c m-2">
              See experiences
            </Link>
          </span>
        </div>
      </motion.div>
      <motion.div
        className="my-6 mx-auto p-2  md:m-0 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <Image
          src={avatar}
          priority
          alt="profile image"
          className="mx-auto aspect-auto max-w-36 md:max-w-56 lg:max-w-80 scale-150 "
        />
        <motion.div
          className="text-3xl cursor-pointer -left-[11px] -bottom-[4px] z-10 absolute w-[160px] md:w-[280px] md:text-6xl md:left-[-30px] md:bottom-[-12px]  "
          // animate={isWaving ? { rotate: [0, 14, -8, 14, -4, 10, 0] } : { rotate: 0 }}
          animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
          transition={{
            duration: 2,
            delay: 0.3
          }}
          // onClick={handleWave}
        >
          👋
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Introduce

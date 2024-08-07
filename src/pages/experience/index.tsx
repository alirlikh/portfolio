import Link from "next/link"
import { useRouter } from "next/router"
import { experiences } from "@/Data/data"
import { motion } from "framer-motion"
import DownloadButton from "../../components/downloadButton/DownloadButton"

export default function Experience() {
  const router = useRouter()
  function handleBackButton(): any {
    router.back()
  }

  return (
    <section className="p-4 px-8 md:px-12">
      <button onClick={handleBackButton} className="btn mb-10 mt-1 pt-0 p-2">
        {"< back"}
      </button>
      <div className="flex flex-col items-center ">
        <motion.div
          className="flex flex-col items-center *:m-4 mb-16 text-center max-w-screen-md"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.1,
            duration: 0.7
          }}
        >
          <p className="text-gray-300 text-center p-3 text-[24px] font-light leading-[48px] ">
            {"< "}Explore my frontend development journey, Each project represents a milestone in my
            growth, highlighting the technologies and challenges I&apos;ve encountered and the
            lessons I&apos;ve learned as a{" "}
            <span className="text-white text-[24px] font-bold  leading-[48px]">
              Front-End Software Engineer {" />"}
            </span>
          </p>
          <DownloadButton />
        </motion.div>

        {experiences?.map((item: any) => (
          <div
            key={item.id}
            className="flex flex-col bg-gray-800 rounded-[40px] px-6 py-10 *:m-3 *:p-2 md:flex-row max-w-screen-2xl mx-auto md:justify-between my-6"
          >
            <div className=" flex-shrink-0 order-1  ">
              <h4 className="text-2xl font-semibold ">{item.jobTitle}</h4>
              <h5 className="text-purple-300 text-[28px] font-semibold">{item.contract}</h5>
              <span className="text-gray-400">
                <time className="block">
                  {item.startTime} - {item.endTime}{" "}
                </time>
                <span className="block">{item.location}</span>
              </span>
            </div>
            <div className="flex-shrink basis-[70%] order-2">
              <h4 className="text-purple-300 text-2xl font-bold mb-2">{item.companyName}</h4>
              <div className="p-2 text-gray-400">
                {item.dutyDesc?.map((duties: any) => (
                  <span key={duties.id}>
                    <h4 className="font-extrabold text-[19px]">{duties.name}</h4>
                    <ul className="list-disc px-5">
                      {duties?.duty.map((duty: any, index: number) => (
                        <li className="mx-2" key={index}>
                          {duty}
                        </li>
                      ))}
                    </ul>
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

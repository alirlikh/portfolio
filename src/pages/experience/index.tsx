import Link from "next/link"
import { useRouter } from "next/router"
import { experiences } from "@/Data/data"
import { motion } from "framer-motion"
import DownloadButton from "../../components/downloadButton/DownloadButton"
import ExperienceCard from "@/components/experienceCard/ExperienceCard"

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

        {experiences?.map((item: any) => <ExperienceCard key={item.id} experience={item} />)}
      </div>
    </section>
  )
}

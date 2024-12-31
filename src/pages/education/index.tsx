import Link from "next/link"
import { useRouter } from "next/router"
import { educations } from "@/Data/data"
import { motion } from "framer-motion"

export default function Education() {
  const router = useRouter()
  function handleBackButton(): any {
    router.back()
  }

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      x: 100
    },
    animate: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.35 * index,
        duration: 0.7
      }
    })
  }

  return (
    <section className="p-4 px-8 md:px-12">
      <button onClick={handleBackButton} className="btn mb-20 mt-1 pt-0 p-2">
        {"< back"}
      </button>

      {educations?.map((item: any, index: number) => (
        <motion.div
          key={item.id}
          className="flex flex-col items-start py-4 my-8 md:py-6 px-6 border-2 border-gray-700 rounded-[40px] md:flex-row md:justify-between md:items-center md:mb-0 md:mt-12  max-w-screen-2xl mx-auto"
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          custom={index}
          viewport={{
            once: true
          }}
        >
          <div className="flex flex-col p-1 mx-4 *:p-1 *:pl-0">
            <h3 className="text-[20px] md:text-[28px] md:leading-10 font-semibold mt-2 mb-2 md:mb-3 leading-7">
              {item.degree + " of " + item.degreeTitle}
            </h3>
            <p className="text-purple-300  leading-6 text-[14px] md:text-[16px]">{item.college}</p>
            <span className="text-gray-400 text-[14px] md:text-[16px]">
              <time>
                {item.startTime} - {item.GraduateTime}
              </time>
            </span>
          </div>
          {!item.certifcate ? null : (
            <div className="text-green-300 p-3 text-[20px] leading-5 m-4 ">
              <Link href={"#"} passHref legacyBehavior>
                <a href="#">View Certifcate</a>
              </Link>
            </div>
          )}
        </motion.div>
      ))}
    </section>
  )
}

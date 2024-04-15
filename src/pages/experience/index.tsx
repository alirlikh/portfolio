import Link from "next/link"
import { useRouter } from "next/router"
import { experiences } from "@/Data/data"

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
        <div className="flex flex-col items-center *:m-4 mb-16 text-center max-w-screen-md">
          <p className="text-gray-300 text-center p-3 text-[24px] font-light leading-[48px] ">
            Lorem Ipsum is simply dummy text of the printing printing and typesetting industry
            typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
            <span className="text-white text-[24px] font-bold  leading-[48px]">specimen book.</span>
          </p>
          <span className="text-nowrap">
            <Link
              href={"#"}
              className="btn bg-white text-gray-900 rounded-full py-3 px-12 text-center font-bold m-2"
            >
              Download CV
            </Link>
          </span>
        </div>

        {experiences?.map((item: any) => (
          <div className="flex flex-col bg-gray-800 rounded-[40px] px-6 py-10 *:m-3 *:p-2 md:flex-row max-w-screen-2xl mx-auto md:justify-between my-6">
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
            <div key={item.id} className="flex-shrink basis-[70%] order-2">
              <h4 className="text-purple-300 text-2xl font-bold ">{item.companyName}</h4>
              <p className="p-1 md:mr-32 text-gray-400">{item.dutyDesc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

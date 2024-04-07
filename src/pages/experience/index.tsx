import Link from "next/link"
import { useRouter } from "next/router"

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
          <p className="text-gray-200 text-center p-3 ">
            Lorem Ipsum is simply dummy text of the printing printing and typesetting industry
            typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
            <span className="text-white text-lg font-bold">specimen book.</span>
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
        <div className="flex flex-col bg-gray-800 rounded-[40px] px-6 py-10 *:m-3 *:p-2 md:flex-row max-w-screen-2xl mx-auto md:justify-between my-6">
          <div className=" flex-shrink-0 order-1">
            <h4 className="text-2xl font-semibold ">full-stack</h4>
            <h5 className="text-purple-300 text-[28px] font-semibold">contarct</h5>
            <span>
              <time className="block">18 jul - 12 dec </time>
              <span className="block">germany</span>
            </span>
          </div>
          <div className="flex-shrink basis-[70%] order-2">
            <h4 className="text-purple-300 text-2xl font-bold ">company name</h4>
            <p className="p-1">
              Lorem Ipsum is simply dummy text of the printing printing and typesetting industry
              typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged
            </p>
          </div>
        </div>
        {/* 1111 */}
        <div className="flex flex-col bg-gray-800 rounded-[40px] px-6 py-10 *:m-3 *:p-2 md:flex-row max-w-screen-2xl mx-auto md:justify-between my-6">
          <div className=" flex-shrink-0 order-1">
            <h4 className="text-2xl font-semibold ">full-stack</h4>
            <h5 className="text-purple-300 text-[28px] font-semibold">contarct</h5>
            <span>
              <time className="block">18 jul - 12 dec </time>
              <span className="block">germany</span>
            </span>
          </div>
          <div className="flex-shrink basis-[70%] order-2">
            <h4 className="text-purple-300 text-2xl font-bold ">company name</h4>
            <p className="p-1">
              Lorem Ipsum is simply dummy text of the printing printing and typesetting industry
              typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

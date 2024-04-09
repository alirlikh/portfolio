import Link from "next/link"
import { useRouter } from "next/router"

export default function Education() {
  const router = useRouter()
  function handleBackButton(): any {
    router.back()
  }

  return (
    <section className="p-4 px-8 md:px-12">
      <button onClick={handleBackButton} className="btn mb-20 mt-1 pt-0 p-2">
        {"< back"}
      </button>
      <div className="flex flex-col items-start py-4 my-8 md:py-6 px-6 border-2 border-gray-700 rounded-[40px] md:flex-row md:justify-between md:items-center md:mb-0 md:mt-12 max-w-screen-2xl mx-auto">
        <div className="flex flex-col p-1 mx-4 *:p-1 *:pl-0">
          <h3 className="text-[28px] leading-10 font-semibold mt-2">title</h3>
          <p className="text-purple-300  leading-6">test university</p>
          <span className="text-gray-400">
            <time>18 juan - 10 dec</time>
          </span>
        </div>
        <div className="text-green-300 p-3 text-[20px] leading-5 m-4 ">
          <Link href={"#"} passHref legacyBehavior>
            <a href="#">View Certifcate</a>
          </Link>
        </div>
      </div>
      {/* /pdsfkvg */}
      <div className="flex flex-col items-start py-4 my-8 md:py-6 px-6 border-2 border-gray-700 rounded-[40px] md:flex-row md:justify-between md:items-center md:mb-0 md:mt-12  max-w-screen-2xl mx-auto">
        <div className="flex flex-col p-1 mx-4 *:p-1 *:pl-0">
          <h3 className="text-[28px] leading-10 font-semibold mt-2">title</h3>
          <p className="text-purple-300  leading-6">test university</p>
          <span className="text-gray-400">
            <time>18 juan - 10 dec</time>
          </span>
        </div>
        <div className="text-green-300 p-3 text-[20px] leading-5 m-4 ">
          <Link href={"#"} passHref legacyBehavior>
            <a href="#">View Certifcate</a>
          </Link>
        </div>
      </div>
    </section>
  )
}

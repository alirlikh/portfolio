import Link from "next/link"
import { useRouter } from "next/router"

export default function Education() {
  const router = useRouter()
  function handleBackButton(): any {
    router.back()
  }

  return (
    <section className="p-4 px-8 md:px-12">
      <button onClick={handleBackButton} className="btn mb-10 mt-1 pt-0 p-2">
        {"< back"}
      </button>
      <div className="flex flex-col items-start py-4 my-8 md:py-11 px-6 border-2 border-gray-300 rounded-[40px] md:flex-row md:justify-between md:items-center md:my-12">
        <div className="flex flex-col p-3 mx-4 *:p-1 *:pl-0">
          <h3 className="text-lg font-semibold">title</h3>
          <p className="text-purple-300">test university</p>
          <span className="text-gray-400">
            <time>18 juan - 10 dec</time>
          </span>
        </div>
        <div className="text-green-300 p-3 text-xl m-4 ">
          <Link href={"#"} passHref legacyBehavior>
            <a href="#">View Certifcate</a>
          </Link>
        </div>
      </div>
      {/* 111 */}
      <div className="flex flex-col items-start py-4 my-8 md:py-11 px-6 border-2 border-gray-300 rounded-[40px] md:flex-row md:justify-between md:items-center md:my-12">
        <div className="flex flex-col p-3 mx-4 *:p-1 *:pl-0">
          <h3 className="text-lg font-semibold">title</h3>
          <p className="text-purple-300">test university</p>
          <span className="text-gray-400">
            <time>18 juan - 10 dec</time>
          </span>
        </div>
        <div className="text-green-300 p-3 text-xl m-4 ">
          <Link href={"#"} passHref legacyBehavior>
            <a href="#">View Certifcate</a>
          </Link>
        </div>
      </div>
      {/* 222 */}
      <div className="flex flex-col items-start py-4  my-8 md:py-11 px-6 border-2 border-gray-300 rounded-[40px] md:flex-row md:justify-between md:items-center md:my-12">
        <div className="flex flex-col p-3 mx-4 *:p-1 *:pl-0">
          <h3 className="text-lg font-semibold">title</h3>
          <p className="text-purple-300">test university</p>
          <span className="text-gray-400">
            <time>18 juan - 10 dec</time>
          </span>
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"
// import avatar from "../../public/avatar.png"
import profile from "../../public/profile.png"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <section className="py-2 px-6 md:px-10 flex flex-col-reverse items-center md:flex-row md:justify-between">
        <div className="flex flex-col w-full md:w-1/2 md:max-w-4xl">
          <div className="flex flex-col items-center m-2 mb-5 md:items-start">
            <h2 className="text-7xl font-bold my-4 p-2">Title</h2>
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
          <div className="flex flex-col items-center m-2 mt-5 *:my-3 *:mx-2 md:flex-row ">
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
        <div className="my-6 mx-auto p-2 md:max-w-md md:m-0 ">
          <Image
            src={profile}
            alt="profile image"
            className="mx-auto aspect-auto max-w-36 md:max-w-56 lg:max-w-80"
          />
        </div>
      </section>
      {/* <section>silder</section>
      <section className="p-2">
        <div className="flex flex-col justify-center items-center *:p-2 *:my-7 md:*:my-4 *:font-extrabold *:text-6xl">
          <h2 className="text-violet-300">Codding</h2>
          <h2 className="text-violet-500">Javascript</h2>
          <h2 className="text-violet-700">React</h2>
          <h2 className="text-violet-900">Coffe</h2>
        </div>
      </section> */}
    </>
  )
}

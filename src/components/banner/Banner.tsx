import React from "react"

function Banner() {
  return (
    <section className="p-2 my-48">
      <div className="flex flex-col justify-center items-center *:p-3 *:my-7 md:*:my-4 *:font-extrabold *:text-[80px] *:leading-[130px]">
        <h2 className="text-violet-300">Coding</h2>
        <h2 className="text-violet-500">Javascript</h2>
        <h2 className="text-violet-700">React</h2>
        <h2 className="text-violet-900">Coffe</h2>
      </div>
    </section>
  )
}

export default Banner

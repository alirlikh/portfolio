function ExperienceCard({ experience }: { experience: any }) {
  return (
    <>
      <div className="flex flex-col bg-gray-800 rounded-[40px] px-6 py-10 *:m-3 *:p-2 md:flex-row max-w-screen-2xl mx-auto md:justify-between my-6">
        <div className=" flex-shrink-0 order-1  ">
          <h4 className="text-2xl font-semibold ">{experience.jobTitle}</h4>
          <h5 className="text-purple-300 text-[28px] font-semibold">{experience.contract}</h5>
          <span className="text-gray-400">
            <time className="block">
              {experience.startTime} - {experience.endTime}{" "}
            </time>
            <span className="block">{experience.location}</span>
          </span>
        </div>
        <div className="flex-shrink basis-[70%] order-2">
          <h4 className="text-purple-300 text-2xl font-bold mb-2">{experience.companyName}</h4>
          <div className="p-2 text-gray-400">
            {experience.dutyDesc?.map((duties: any) => (
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
    </>
  )
}
export default ExperienceCard

export default function Footer() {
  return (
    <div className="flex flex-col items-start m-4 ">
      <div className="w-full py-2 bg-gray-850 px-4 rounded-full flex flex-row justify-between items-center">
        <p className="text-gray-400 text-sm m-2">Follow me</p>
        <div className="flex flex-row m-2">
          <div className="bg-green-700 w-2 m-2">1</div>
          <div className="bg-yellow-300 w-2 m-2">2</div>
          <div className="bg-yellow-300 w-2 m-2">3</div>
        </div>
      </div>
      <div className="m-3">
        <span className="text-sm text-white p-2">alireza 2024</span>
      </div>
    </div>
  )
}

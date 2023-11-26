import { arrowUp } from "../assets"

const GetStarted = () => {
  return (
    <div className="h-[140px] w-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer">
      <div className="flex justify-center items-center flex-col bg-primary w-[100%] h-[100%] rounded-full hover:bg-slate-800">
        <div className="flex justify-start items-center">
          <p className="font-poppins font-medium text-[18px] leading-[23px]">
            <span className="text-gradient">Get</span>
          </p>
          <img src={arrowUp} className="w-[23px] h-[23px] object-contain ml-2" alt="arrowUp" />
        </div>
        <div className="flex justify-start items-center">
          <p className="font-poppins font-medium text-[18px] leading-[23px]">
            <span className="text-gradient">Started.</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default GetStarted

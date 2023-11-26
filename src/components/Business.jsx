import { features } from "../constants"
import Button from "./Button"
const Business = () => {
  return (
    <section id="features" className="flex md:flex-row flex-col sm:px-16 px-6">
      {/* LEFT SIDE */}
      {/* <div className="flex-1 flex flex-col justify-start items-center"> */}
      <div className="flex-1 flex-rol justify-center items-star">
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76px] leading-[66px] w-full">
          You do the business, <br className="sm:block hidden" />
          we&#39;ll handle the money.{" "}
        </h2>
        <p className="font-poppins text-dimWhite text-[18px] w-full text-justify leading-[30px]">With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
        <Button />
      </div>
      {/* RIGHT SIDE */}
      <div className="flex-1 flex-rol justify-center items-start ml-5">
      {features.map(feature => (
        <div key={feature.id} className="flex-1 flex p-6 hover:bg-slate-800 hover:rounded-[24px]">
          <div className="flex justify-center items-center mr-3 ">
            <img src={feature.icon} alt="" />
          </div>
          <div className="flex-1 flex flex-col justify-center items-start">
            <h3 className="font-poppins text-white font-semibold ">{feature.title}</h3>
            <p className="font-poppins text-dimWhite font-normal text-[18px]">{feature.content}</p>
          </div>
        </div>
      ))}
      </div>
    </section>
  )
}

export default Business

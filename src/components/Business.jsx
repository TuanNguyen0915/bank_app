import { features } from "../constants"
import Button from "./Button"


// hover:bg-slate-800 hover:rounded-[20px]
const FeatureCard = ({feature}) => {
  return (
    <div className="flex-1 flex py-6 px-4 feature-card hover:rounded-[20px]">
      <div className="w-[64px] h-[64px] flex justify-center items-center ss:mr-5 rounded-full bg-dimBlue">
        <img src={feature.icon} className="w-[50%] h-[50%]" />
      </div>
      <div className="flex-1 flex flex-col justify-center items-start">
        <h3 className="font-poppins text-white text-[18px] font-semibold leading-[24px] mb-1">{feature.title}</h3>
        <p className="font-poppins text-dimWhite text-[16px] w-full">{feature.content}</p>
      </div>
    </div>
  )
}

const Business = () => {
  return (
    <section id="features" className="flex md:flex-row flex-col px-6 w-full">
      {/* LEFT SIDE */}
      {/* <div className="flex-1 flex flex-col justify-start items-center"> */}
      <div className="flex-1 flex-rol justify-center items-star">
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76px] leading-[66px] w-full">
          You do the business, <br className="sm:block hidden" />
          we&#39;ll handle the money.{" "}
        </h2>
        <p className="font-poppins text-dimWhite text-[18px] w-full text-justify leading-[30px]">
          With the right credit card, you can improve your financial life by building credit, earning rewards and saving
          money. But with hundreds of credit cards on the market.
        </p>
        <Button styles="mt-10" />
      </div>
      {/* RIGHT SIDE */}
      <div className="flex-1 flex-rol justify-center items-start xs:ml-5 ss:mt-0 mt-10 ">
        {features.map((feature) => (
          <FeatureCard feature={feature} key={feature.id} />
        ))}
      </div>
    </section>
  )
}

export default Business

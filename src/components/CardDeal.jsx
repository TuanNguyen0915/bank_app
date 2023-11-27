import { card } from "../assets"
import Button from "./Button"
const CardDeal = () => {
  return (
    <section className="flex-1 flex md:flex-row flex-col mt-[10rem]">
      {/* LEFT SIDE */}
      <div className="flex-1 flex-col justify-center items-start">
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76px] leading-[66px] w-full">
          Find a better card deal in few easy step.
        </h2>
        <p className="font-poppins text-dimWhite font-normal text-[18px] w-4/5 leading-[30px]">
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button styles="mt-4" />
      </div>
      {/* RIGHT SIDE */}
      <div className="flex-1 flex justify-center items-start w-full">
        <img src={card} alt="card" className="w-[100%] h-[100%]"/>
      </div>
    </section>
  )
}

export default CardDeal

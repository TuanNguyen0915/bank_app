import { bill, apple, google } from "../assets"

const Billing = () => {
  return (
    <section className="flex-1 flex md:flex-row flex-col-reverse justify-center items-center mt-[5rem]">
      {/* LEFT SIDE */}
      <div className="flex-1 flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative">
        <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>
      {/* RIGHT SIDE */}
      <div className="flex-1 flex justify-center items-start flex-col">
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76px] leading-[66px] w-full">
          Easily control your
        </h2>
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76px] leading-[66px] w-full">
          billing & invoicing.
        </h2>
        <p className="font-poppins text-dimWhite text-[18px] w-full text-justify leading-[30px]">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus
          aliporttitor integer platea placerat.
        </p>
        <div className="mt-4 flex-1 flex justify-start items-center w-3/4">
          <img src={apple} alt="apple" className="mr-10"/>
          <img src={google} alt="google" />
        </div>
      </div>
    </section>
  )
}

export default Billing

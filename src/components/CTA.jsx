import Button from "./Button"

const CTA = () => {
  return (
    <section className="flex-1 flex md:flex-row flex-col justify-center items-center mt-10">
      <div className="flex sm:flex-row flex-col justify-center items-center bg-black-gradient-2 box-shadow w-4/5 rounded-[20px]">
        <div className="w-[60%] m-10">
          <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76px] leading-[66px] w-full">
            Let&#39;s try our service now!
          </h2>
          <p className="text-dimWhite sm:w-[60%]">
          Everything you need to accept card payments and grow your business anywhere on the planet.
          </p>
        </div>
        <div className="flex justify-center sm:items-center items-start w-[40%] sm:ml-10 ml-0 sm:mt-0 mt-10">
          <Button />
        </div>
      </div>
    </section>
  )
}

export default CTA

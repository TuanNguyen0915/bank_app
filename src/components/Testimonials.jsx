import { feedback } from "../constants"
import FeedBackCard from "./FeedBackCard"

const Testimonials = () => {
  return (
    <section className="flex-1 flex flex-col justify-center items-start w-full mt-[10rem]">
      <div className="flex-1 flex md:flex-row flex-col md:justify-start justify-center md:items-center items-start w-full">
        <h2 className="font-poppins font-semibold text-white xs:text-[48px] text-[40px] xs:leading-[76px] leading-[66px] w-full">
          What people are saying about us
        </h2>
        <div className="w-full md:mt-0 mt-6">
          <p className="font-poppins text-dimWhite font-[18px] max-w-[450px] text-justify leading-[30px]">
            Everything you need to accept card payments and grow your business anywhere on the planet.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((fb) => (
          <FeedBackCard key={fb.id} fb={fb} />
        ))}
      </div>
    </section>
  )
}

export default Testimonials

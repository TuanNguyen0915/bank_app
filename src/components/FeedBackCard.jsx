import { quotes } from "../assets"

const FeedBackCard = ({fb}) => {
  return (
    (
      <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
        <img src={quotes} alt="quotes" className="w-[42px] h-[27px] object-contain"/>
        <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">
          {fb.content}
        </p>
        <div className="flex flex-row">
          <img src={fb.img} alt={fb.name} className="w-[48px] h-[48px] rounded-full"/>
          <div className="flex flex-col ml-4">
            <h4 className="text-white">{fb.name}</h4>
            <h4 className="text-dimWhite">{fb.title}</h4>
          </div>
        </div>
      </div>
    )
  )
}

export default FeedBackCard
import {
  Billing,
  Business,
  Button,
  CardDeal,
  Clients,
  CTA,
  FeedBackCard,
  Footer,
  GetStarted,
  Hero,
  NavBar,
  Stats,
  Testimonials,
} from "./components"
const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className="sm:px-16 px-6 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
          <NavBar />
        </div>
      </div>

      <div className="bg-primary sm:px-16 px-6 flex justify-center items-start">
        <div className="xl:max-w-[1280px] w-full">
          <Hero />
        </div>
      </div>

      <div className="bg-primary sm:px-16 px-6 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
          <Stats />
          <Business /> 
          <Billing />
          <CardDeal />
        </div>
      </div>
    </div>
  )
}

export default App

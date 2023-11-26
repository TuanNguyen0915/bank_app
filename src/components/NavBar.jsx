import { useState } from "react"
import { close, logo, menu } from "../assets"

const NavBar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoo-bank" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        <li className="font-poppins font-normal cursor-pointer text-[16px] text-white mr-10">
          <a href="">Home</a>
        </li>
        <li className="font-poppins font-normal cursor-pointer text-[16px] text-white mr-10">
          <a href="">Features</a>
        </li>
        <li className="font-poppins font-normal cursor-pointer text-[16px] text-white mr-10">
          <a href="">Product</a>
        </li>
        <li className="font-poppins font-normal cursor-pointer text-[16px] text-white">
          <a href="">Clients</a>
        </li>
      </ul>
      {/* mobile responsive */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          onClick={() => setToggle(!toggle)}
          className="w-[28px] h-[28px] object-contain"
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            <li className="font-poppins font-normal cursor-pointer text-[16px] text-white mb-10">
              <a href="">Home</a>
            </li>
            <li className="font-poppins font-normal cursor-pointer text-[16px] text-white mb-10">
              <a href="">Features</a>
            </li>
            <li className="font-poppins font-normal cursor-pointer text-[16px] text-white mb-10">
              <a href="">Product</a>
            </li>
            <li className="font-poppins font-normal cursor-pointer text-[16px] text-white">
              <a href="">Clients</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar

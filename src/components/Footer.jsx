import { logo } from "../assets"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <section className="flex flex-col justify-center items-center sm:py-16 py-6">
      {/* FIRST DIV */}
      <div className="flex justify-center items-start md:flex-row flex-col mb-8 w-full">
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img src={logo} alt="logo" className="w-[266px] h-[72px] object-contain" />
          <p className="font-poppins font-normal, text-dimWhite text-[18px] leading-[30px] mt-4 max-w-[310px]">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        <div className="flex-[1.5] w-full flex flew-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerLink) => (
            <div key={footerLink.id} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">{footerLink.title}</h4>
              <ul className="list-none mt-4">
                {footerLink.links.map((link, idx) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                      idx !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* SECOND DIV */}
      <div
        className="flex justify-between items-center md:flex-row flex-col-reverse pt-6 border-t-[1px] border-t-[#3f3r45] w-full"
      >
        <p className="font-poppins font-medium text-[18px] leading-[28px] text-white text-left md:mt-0 mt-6">
          2023 Tuan Nguyen. All Rights Reserved.
        </p>
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, idx) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer
            ${idx !== socialMedia.length - 1 ? "mr-6" : "mr-0"}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Footer

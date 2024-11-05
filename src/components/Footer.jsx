import { socials } from "../constants"


const Footer = () => {
  return (
    <div className="bg-[#7ad1c0] flex flex-col justify-center items-center py-10 space-y-10">
        <h1 className="text-4xl font-barlow font-black text-[#25564b] ">
            sunnyside
        </h1>
        <div className="flex justify-center items-center ">
                <ul className="flex space-x-8 font-barlow text-lg font-medium text-[#25564b]">
                    <li><a href="#" className="
                    hover:text-white transition duration-300 ease-in-out 
                    ">About</a></li>
                    <li><a href="#" className="
                    hover:text-white transition duration-300 ease-in-out 
                    ">Services</a></li>
                    <li><a href="#" className="
                    hover:text-white transition duration-300 ease-in-out 
                    ">Projects</a></li>
                </ul>
            </div>

        <div className="flex justify-center items-center space-x-8 pb-10">
            {socials.map((social) => {
                return (
                    <a href="#" key={social.id}>
                         <img src={social.icon} alt="" className="w-6 h-6 hover:filter hover:brightness-0 hover:invert transition duration-500 ease-in-out" />
                    </a>
                )
            })}
        </div>
    </div>
  )
}

export default Footer

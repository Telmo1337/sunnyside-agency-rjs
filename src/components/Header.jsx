import logo from "../assets/images/logo.svg";
import { links } from "../constants/index.js";

const Header = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center p-5 px-6 md:px-20">
            {/* Logo Section */}
            <div className="flex justify-center md:justify-start mb-4 md:mb-0">
                <a href="#" className="hover:scale-95 transition duration-300 ease-in-out">
                    <img src={logo} alt="logo" className="w-20 md:w-auto" />
                </a>
            </div>

            {/* Links Section */}
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 text-center">
                {links.map((link) => (
                    <a
                        key={link.id}
                        href={link.url}
                        className="font-fraunces text-white font-semibold text-base md:text-lg tracking-widest
                                   hover:text-[#23303e] transition duration-300 ease-in-out"
                    >
                        {link.text}
                    </a>
                ))}

                <a
                    href="#"
                    className="text-base md:text-lg font-fraunces text-[#23303e] font-semibold border-2 border-transparent bg-white tracking-widest rounded-full px-5 py-2
                               hover:bg-transparent hover:text-white hover:border-white transition duration-300 ease-in-out"
                >
                    Contact
                </a>
            </div>
        </div>
    );
}

export default Header;

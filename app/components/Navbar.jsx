import { assets } from "../../assets/assets";
import Image from "next/image";
import React, { useRef, useState } from "react";
import "tailwindcss";

const liclasses = 'rounded-full px-4 py-2 transition-transform transform hover:scale-105 hover:bg-gray-200'
const aclasses = 'text-grey-700 hover:text-green-900 transition'

const Navbar = () => {
    const sideMenuRef = useRef();
    const [menuOpen, setMenuOpen] = useState(false);
    const openMenu = () => setMenuOpen(true);
    const closeMenu = () => setMenuOpen(false);

    return(

       <>
        <div className="fixed top-0 right-0 w-full -z-10 h-24">
            <Image src={assets.header_bg_color} alt='' fill className="object-cover"/>
        </div>
        
        <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center 
                        justify-between z-50 " >
            <a href="#top">
                <Image src={assets.logo} alt='' className="w-28
                cursor-pointer mr-14"/>
                </a>
                <ul className="font-ovo hidden md:flex gap-6 lg:gap-4 rounded-full px-12 py-3 ">
                    {["Home", "About", "Services", "My Work", "Contact Me"].map((item, index) => (
                        <li key={index} className={liclasses}>
                            <a href={`#${item.toLowerCase().replace(/\s+/g, '')}`} className={aclasses}>
                                {item} 
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="flex items-center gap-4 lg:gap-6 ">
                    <button>
                        <Image src={assets.moon_icon} alt="" className="w-6 h-6 cursor-pointer hover:scale-105 hover:bg-gray-200" />
                    </button>
                    <a href='#contact' className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-grey-10 rounded-full ml-4 hover:scale-105 hover:bg-gray-200">
                        Contact <Image src={assets.arrow_icon} alt="arrow-icon" className="w-3" />
                    </a>
                    <button className="block md:hidden ml-3" onClick={openMenu} >
                        <Image src={assets.menu_black} alt="" className="w-6 " />
                    </button>
                </div>

                {/* ----------------- Mobile Menu --------------- */}
                <ul className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-transform duration-500 ${menuOpen ? 'translate-x-0 right-0' : 'translate-x-full right-0'}`}>
                <div className="aboslute top-5 right-5" onClick={closeMenu}>
                    <Image src={assets.close_black} alt="" className=" w-5 cursor-pointer " />
                </div>
                {["Home", "About", "Services", "My Work", "Contact Me"].map((item, index) => (
                        <li key={index} className={liclasses} >
                            <a href={`#${item.toLowerCase().replace(/\s+/g, '')}` } 
                            className={aclasses} 
                            onClick={closeMenu}>
                                {item} 
                            </a>
                        </li>
                    ))}
                    </ul>
                
                </nav></>
    )}
export default Navbar;
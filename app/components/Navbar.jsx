import { assets } from "../../assets/assets";
import Image from "next/image";
import React from "react";
import "tailwindcss";

const liclasses = 'hover:bg-grey-200 rounded-full px-4 py-2 transition'
const aclasses = 'text-grey-700 hover:text-blue-500 transition'

const Navbar = () => {
    return(

        <>
        <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[80%]">
            <Image src={assets.header_bg_color} alt='' className="w-full"/>
        </div>
        
        <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center 
                        justify-between z-50 ">
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
                <div>
                    <a href='#contact' className="hidden lg-flex items-center gap-3 px-10 py-2.5 border border-grey-10 rounded-full ml-4">
                        Contact <Image src={assets.arrow_icon} alt="arrow-icon" className="w-3" />
                    </a>
                </div>
                
                
                </nav></>
    )}
export default Navbar;
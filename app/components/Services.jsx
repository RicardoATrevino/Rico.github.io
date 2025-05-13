import Image from "next/image";
import React from "react";
import { serviceData,assets } from "../../assets/assets";
const Services = () => {
    return (
        <div id='Services' className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-ovo">
                What I Offer
            </h4>
            <h2 className="text-center text-5xl font-ovo">
                My Services
            </h2>
            <p>
                I am a full-stack developer from California, USA. I have a passion for 
                creating beautiful and functional web applications. I specialize in React, 
                Node.js, and Rails. I am also proficient in HTML, CSS, and JavaScript. 
                I have experience with various frameworks and libraries such as Next.js,
                Express.js, and Bootstrap. I have 5 years of experience in web development 
                and worked on various projects small projects both personal and professional.
            </p>
            <div className="grid grid-cols-4 gap-6 my-10">
                {serviceData.map(({icon, title, description, link}, index )=> (
                    <div key={index} className="border border-gray-400 rounded-lg px-8 py-10 cursor-pointer hover:shadow-lg
                                                 hover-shadow-2xl hover:shadow-black/50 hover:bg-lightHover transition-all ease-in-out">
                        <Image src={icon} alt='' className='w-10'/>
                        <h3 className='text-lg my-4 text-gray-700'>
                            {title}    
                        </h3>
                        <p className='text-gray-600 text-sm leading-5'>
                            {description} 
                        </p>
                        <a href={link} className="flex items-center gap-2 text-sm mt-5" >
                        Read More 
                        <Image src={assets.arrow_icon} alt="" className="w-4" />
                        </a>
                        </div>
                    
                ))}
            </div>
        </div> 
    );
};
export default Services;
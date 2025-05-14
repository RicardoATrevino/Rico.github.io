import React from "react";
import { assets, workData } from "../../assets/assets";
import Image from "next/image";

const Work = () => {
    return (
        <div id="MyWork" className="w-full px-[12%] py-10 scroll-mt-20 ">
            <h4 className="text-center mb-2 text-lg font-ovo">
                My Portfolio
            </h4>
            <h2 className="text-center text-5xl font-ovo">

                Latest Work
            </h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
                Welcome to my portfolio! Here, you can explore a selection of my recent
                projects that showcase my skills and expertise in web development. Each 
                project reflects my skills and growing experience in the field.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:[grid-template-colimns:1fr_2fr_1fr] xl:grid-cols-4  gap-6 my-10">
                {workData.map((project,index) => (
                    <div className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative
                    cursor-pointer group " 
                        key={index} style={{backgroundImage:`url(${project.bgImage})`}}> 
                        <div className="bg-white/50 w-10/12 rounded-md absolute bottom-5
                                        left-1/2 -translate-x-1/2 py-3 px-5 flex items-center
                                        justify-between duration-500 group-hover:bottom-7"   > 
                            <div >
                                <h2 className="font-semibold">{project.title}</h2>
                                <p className="text-sm text-gray-700">{project.description}</p>
                            </div>
                            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center 
                                            shadow-[2px_2px_0_#000] bg-white group-hover:bg-lime-300 transition-colors duration-300">
  
                                <Image src={assets.send_icon} alt='' className="w-5" />                          
                            </div>
                        </div>

                    </div>
                ))}
            </div>
            <a href="" className="w-max flex items-center gap-2 justify-center text-gray-700 
                                  border-[0.5px] border-gray-700 rounded-full px-10 py-3 mx-auto my-20 
                                  hover:bg-lightHover hover:-translate-y-1 hover:shadow-md 
                                  transition-all duration-300 ease-in-out">
                Show more <Image src={assets.right_arrow_bold} alt="Right Arrow" className="w-4"/>
            </a>
        </div>
    )
}
export default Work
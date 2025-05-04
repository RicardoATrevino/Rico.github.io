import React from 'react'
import Image from "next/image";
import { assets, infolist} from "../../assets";
import { assets as imageAssets} from "../../assets/assets";

const About = () => {
    return (
        <div className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg font-ovo'>Introduction</h4>
            <h2 className='text-center text-5xl font-ovo'>About Me</h2>
            <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    <Image src={imageAssets.user_image} alt='user' className='w-full rounded-3xl'/>
                </div>
                <div className='flex-1'>
                    <p className='mb-10 max-w-2xl font-ovo'>
                        <ul>
                            {infoList.map(({icon, iconDark, title, description}, index ) => (
                                <li key={index}>
                                    <Image src={icon} alt={title} />
                                    <h3>{title}</h3>
                                    <p>{description}</p>
                                </li>
                            ))}
                        </ul>
                    </p>
                </div>
            </div>
        
        </div>
    )
}

export default About
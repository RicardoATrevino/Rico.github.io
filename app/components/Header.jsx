import React from "react";
import Image from "next/image";
import { assets } from "../../assets/assets";

const Header = () => {
  return (
    <div>
      <div>
        {/* ----------------- Add Profile Picture, replace profile_img, rename --------------- */}
        <Image src={assets.profile_img} alt="" className="rounded-full w-32" />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2x1 mb-3 font-ovo">
        Hi! I'm Ricardo, I also go by Rico! <Image src={assets.hand_icon} alt="" className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-ovo">Full-Stack software Dev based in LA</h1>
      <p>
        I'm a full-stack developer from California, USA, with 2 years of experience freelancing and briefly in Actualize
        Coding Bootcamp.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap=4 mt-4">
        <a
          href="#contact"
          className="px-5 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
        >
          contact me <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </a>
        <a
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-grey-500 flex items-center gap-2"
        >
          My Resume <Image src={assets.download_icon} alt="" className="w-4" />
        </a>
      </div>
    </div>
  );
};
export default Header;

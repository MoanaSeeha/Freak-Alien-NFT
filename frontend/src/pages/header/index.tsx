import React from "react";
import { Link } from 'react-scroll'

export interface INavItem {
  title: string,
}

const headerContent : INavItem[] = [
  { title: 'about' },
  { title: 'roadmap' },
  { title: 'team' },
  { title: 'provenance' },
  { title: 'gallery' },
  { title: 'members' }
]

const Header = () => {
  return (
    <div className=" absolute top-0 w-full z-10">
      <div className="flex flex-col">
        <div className="">

        </div>
        <nav className="w-full flex justify-evenly p-6 items-center">
          <img src={`${process.env.PUBLIC_URL}/image/fac-logo-black.svg`} alt=""  className=" w-52 hover:opacity-50 cursor-pointer transition-all"/>
          <ul className="flex text-base m-1">
            { 
              headerContent.map((header, index) => 
              <Link
                activeClass="active"
                to={header.title}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                key={index} className="capitalize inline-block border-b-4 border-[#fff0] hover:border-gray-400 transition-all py-4 px-6 cursor-pointer"
              >
                {header.title}
              </Link>
              )
            }
          </ul>
          <img src={`${process.env.PUBLIC_URL}/image/Join-Discord.png`} alt="" className=" h-10 hover:opacity-50 cursor-pointer transition-all"/>
        </nav>
      </div>
    </div>
  )

}

export default Header;
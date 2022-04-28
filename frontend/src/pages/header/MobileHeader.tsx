import React, {useState} from "react";
import { Link } from 'react-scroll'
import { Transition } from '@tailwindui/react'

interface INavItem {
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

const MobileHeader = () => {
  const[isOpen,setOpen] = useState(false);

  return (
    <div className="md:hidden lg:hidden text-[#f2f2f2] text-lg  bg-inherit w-full">
    <div className="flex flex-row space-x-2 relative items-center justify-evenly w-full" >
      <div className="" onClick = {()=>setOpen(!isOpen)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
    <Transition
      show={isOpen}
      enter="transition ease-in-out duration-300 transform"
      enterFrom="-translate-y-full"
      enterTo="translate-y-0"
      leave="transition ease-in duration-300 transform"
      leaveFrom="translate-y-0"
      leaveTo="-translate-y-full"
      className={'absolute flex flex-col top-14 bg-inherit w-[100vw] left-0 text-lg text-[#f2f2f2] z-30'}
    >
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
      </Transition>
    </div>
  )
}

export default MobileHeader;
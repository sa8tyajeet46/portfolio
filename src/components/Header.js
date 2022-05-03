import {MenuIcon,PencilAltIcon,DesktopComputerIcon,PhoneIcon} from '@heroicons/react/solid'
import {DocumentIcon,UserIcon} from '@heroicons/react/outline'
import { useState } from 'react'
import { Webgi } from './Webgi';
export default function Header(){
    const [active,setActive]=useState(false);
    return (<><div className="flex w-full justify-between items-center py-3">
        <div>
           <span className="text-2xl font-bold text-violet-700">
            Portfolio
           </span>
        </div>
        <div className="sm:flex hidden justify-between space-x-10 font-worksan text-lg font-medium ">
          <a href="#Home" className="cursor-pointer flex"><UserIcon className="w-5"></UserIcon>About</a>
          <a href="#projects" className="cursor-pointer flex"><PencilAltIcon className="w-4"></PencilAltIcon>Projects</a>
          <a href="#skills" className="cursor-pointer flex"><DesktopComputerIcon className="w-4"></DesktopComputerIcon>Skills</a>
          <a href="#contact" className="cursor-pointer flex"><PhoneIcon className="w-4"></PhoneIcon>Contact</a>
        </div>
        {!active && <div className="sm:hidden flex flex-1 justify-end ">
           <MenuIcon className="w-7 relative cursor-pointer " onClick={()=>setActive(!active)}></MenuIcon>
        </div>}
        
    </div>
    {active && <Webgi active={active} setActive={setActive}></Webgi>}</>)
}
import {MenuIcon,PencilAltIcon,DesktopComputerIcon,PhoneIcon,XIcon} from '@heroicons/react/solid'
import {DocumentIcon,UserIcon} from '@heroicons/react/outline'
export function Webgi({active,setActive}){
    return (<div className="absolute sm:hidden bg-white right-0 ">
      <div className="flex flex-col h-[100vh] w-60 justify-center items-center space-y-8">
      <div><XIcon className="w-6 absolute top-5 right-3" onClick={()=>setActive(!active)}></XIcon></div>
      <a href="#Home" className="cursor-pointer flex"><UserIcon className="w-5"></UserIcon>About</a>
          <a href="#projects" className="cursor-pointer flex"><PencilAltIcon className="w-4"></PencilAltIcon>Projects</a>
          <a href="#skills" className="cursor-pointer flex"><DesktopComputerIcon className="w-4"></DesktopComputerIcon>Skills</a>
          <a href="#contact" className="cursor-pointer flex"><PhoneIcon className="w-4"></PhoneIcon>Contact</a>
      </div>
    </div>)
}
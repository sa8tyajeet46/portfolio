import { projects } from "../data"
import {GlobeAltIcon,DocumentIcon} from '@heroicons/react/solid'
export default function Projects(){
    return(
        <div id="projects">
        <div className="w-1/4 rounded-full bg-gradient-to-r from-purple-600 bg-pink-600 h-2 mx-[-1.5rem] mb-5"></div>
        <div className="text-5xl font-semibold font-worksan mb-5">Projects</div>
        <div className="">
            {projects.map((e)=>{
           return(
           <div className="grid lg:grid-cols-2 grid-cols-1">
            <div>
                <span className="text-3xl font-semibold">
                    {e.name}
                </span><br></br>
                <div  className="mt-3 flex flex-col space-y-3">
            <a className="cursor-pointer bg-emerald-500  py-1 rounded-md text-2xl hover:bg-emerald-600 text-white w-48 flex justify-center items-center" href={e.link}><GlobeAltIcon className="w-5 mr-2"></GlobeAltIcon>check out</a>
            <a className="cursor-pointer bg-emerald-500  py-1 rounded-md text-2xl hover:bg-emerald-600 text-white w-48 flex justify-center items-center" href={e.repo}><DocumentIcon className="w-5 mr-2"></DocumentIcon>source code</a>
            </div>
            <span className="text-3xl">
                Features
            </span>
            <div className="mt-3">
            {
                e.description.map((e)=>{
                return(<li className="font-worksan font-semibold">{e}</li>)})
            }
            </div>
            <span className="text-3xl">
                Skills used
            </span>
            
            <div className=" grid grid-cols-3 sm:grid-cols-5 mt-5 gap-5">
                {
                    e.tech.map((p)=>{
                        return(<img src={p} className="w-16 mr-5"></img>)
                    })
                }
                </div> 
            </div>
            <div className="hidden lg:flex">
                <img src={e.url} className=" "></img>
            </div>
           </div>
           )
            }
            )
        }
        </div>
        </div>
    )
}
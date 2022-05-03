import { skills } from "../data";

export default function Skills(){
    return(<div className="mt-4" id="skills">
    <div className="w-1/4 rounded-full bg-gradient-to-r from-purple-600 bg-pink-600 h-2 mx-[-1.5rem] mb-5"></div>
    <div className="text-5xl font-semibold font-worksan mb-5">Skills</div>
    <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-3 gap-5">
        {skills.map((e)=>(<img src={e}></img>))}
    </div>
    </div>)
}
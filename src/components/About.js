import { contacts } from "../data";
export default function About(){
    return (  <div className="grid sm:grid-cols-2 grid-cols-1" id="Home">
    <div className="sm:py-32  text-2xl font-semibold ">
     <div className="mb-5">Hi,there i am<br></br> <span className="text-4xl  text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
         Satyajeet Tripathy
     </span></div>
     <div className="font-worksan tracking-wider">
     I am a professional fullstack web developer 
     working on MERN.
     </div>
    </div>
    <div className="sm:py-5">
     <img src="coding.png"></img>
    </div>
</div>)
}
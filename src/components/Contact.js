import { contacts } from "../data"
export default function Contact(){
    return(<div className="mt-7" id="contact">
                <div className="w-1/4 rounded-full bg-gradient-to-r from-purple-600 bg-pink-600 h-2 mx-[-1.5rem] mb-5"></div>
        <div className="text-5xl font-semibold font-worksan mb-5">Contact</div>
        <form action="https://formsubmit.co/satyajeettripathy677@gmail.com" method="POST" className="w-full max-w-xs">
            <div className="mb-5">
                <label for="email" className="font-semibold">Email</label>
        <input type="email" name="email" placeholder="Email Address" className=" appearance-none border rounded shadow-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required></input> 
            </div>
     <input type="hidden" name="_subject" value="New submission!"></input>
     <div className="mb-5">
<label className="font-semibold" for="message">Enter message</label>
    
     <textarea name="message" placeholder="Enter message" className="  form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        shadow-xl
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" required></textarea>
        </div>
     <button type="submit" className="bg-blue-700 px-3 py-2 text-white rounded-md cursor-ponter">Send</button>
           </form>
           <div className="flex justify-between space-x-5 px-5 py-8">
     {contacts.map((e)=>{
         return(<a key={e.url} href={e.link}> <img className="sm:w-20 w-12" src={e.url}></img></a>)
     })}
 
     </div>
    </div>)
}
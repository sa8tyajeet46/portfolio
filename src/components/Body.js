import About from "./About"
import Projects from "./Projects"
import Skills from "./Skills"
import Contact from "./Contact"
export default function Body(){
    return (
        <div className="w-full px-6">
          <About></About>
          <Projects></Projects>
          <Skills></Skills>
          <Contact></Contact>
        </div>
    )
}
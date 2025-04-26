import AboutPage from "./Components/AboutPage"
import Contact from "./Components/Contact"
import Experience from "./Components/Experience"
import HomePage from "./Components/HomePage"
import Projects from "./Components/Projects"

const page = () => {
  return (
    <div>
      <HomePage/>
      <AboutPage/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default page
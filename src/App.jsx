import { useState } from "react"
import { LoadingScreen } from "./components/Loading"
import { Navbar } from "./components/Navbar"
import { MobileMenu } from "./components/MobileMenu"
import { Home } from "./components/Home"
import { About } from "./components/About"
import { Projects } from "./components/Projects"
import { RevealOnScroll } from "./components/RevealOnScroll"
import { Contact } from "./components/Contact"

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)


  return (
    <>
     {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>}

      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-[#0b0c10] text-grey-100` } >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <Home />
          <About />
          <Projects />
          <Contact />
      </div>
    </>
  )
}

export default App

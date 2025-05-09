import { useEffect } from "react"


export const Navbar = ({ menuOpen, setMenuOpen }) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "invisible" : ""
    }, [menuOpen])

    return (
        <div className="fixed top-0 w-full z-40 backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home"> CHRISTINA <span className="text-green-500 font-bold">J</span></a>
                    <div className="w-7 h-5 relative cursor-pointer z-40 md:collapse  text-2xl " onClick={() => setMenuOpen((prev) => !prev)}>
                       &#9776;
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="hover:text-green-500 transition-colors">Home</a>
                        <a href="#projects" className="hover:text-green-500 transition-colors">Projects</a>
                        <a href="#about" className="hover:text-green-500 transition-colors">About</a>
                        <a href="#contact" className="hover:text-green-500 transition-colors">Contact</a>

                    </div>

                </div>

            </div>
        </div>
    )
}
import { RevealOnScroll } from "./RevealOnScroll"
import { useState } from "react"

export const About = () => {
    const languages = ["Java", "Python", "Javascript", "HTML", "CSS"]
    const frameworks = ["Django", "React"]

    const [isVisible, setIsVisible] = useState(false)

    
    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent text-center">About Me</h2>

                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">This is the part where I’m supposed to talk about how passionate I am about coding, which I <i>totally</i> am. But also? I like Red Bull. And explosions. And chimichangas... Now... guess my favorite superhero. Hit the button, you might be right. Or not. I’m not judging.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Languages</h3>
                            <div className="flex flex-wrap gap-2">
                                {languages.map((skill, key) => (
                                    <span key={key} className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(30, 130, 76, 0.2)] transition">
                                        {skill}
                                    </span>
                                ))}
                            </div>

                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frameworks</h3>
                            <div className="flex flex-wrap gap-2">
                                {frameworks.map((skill, key) => (
                                    <span key={key} className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">🎓 Education</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong>B.S. in Software Systems</strong> <br /><strong>Minor in Pyschology </strong>- University Tennessee at Chattanooga
                            </li>
                            <li>
                                Relevant Coursework: Data structures, Operating Systems, Software design, Algorithm analysis, Linear algebra
                            </li>
                        </ul>
                    </div>
                    {/* <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold">Position at ADB</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, praesentium?</p>
                            </div>

                            <div>
                                <h4 className="font-semibold">Position 2 at ABC</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, praesentium?</p>
                            </div>

                        </div>
                    </div> */}
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1" onClick={() => setIsVisible((prev) => !prev)}>
                        <h3 className="text-xl font-bold mb-4">Favorite Superhero</h3>
                        <p className={`transition-all duration-200 ease-in-out  ${!isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>Click to Reveal</p>
                        <div className={`transition-all duration-200 ease-in-out  ${isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} >
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg-pMo8f4cnP5OT0P-TmdDiVfmV8ifONyuQg&s" alt="" />
                            <p>Or anti-hero...</p>
                        </div>
                        
                    </div>

                </div>
            </div>
            </RevealOnScroll>

        </section>
    )
}
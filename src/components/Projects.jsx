import { RevealOnScroll } from "./RevealOnScroll"

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">My Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] ">
                        <h3 className="text-xl font-bold mb-2">Lego Social</h3>
                        <p className="text-gray-400 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, at.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "Django Rest Framework", "SQLite"].map((skill, key) =>(
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.1)] transition-all">
                                 {skill}
                             </span>
                            ))}
                        </div>

                        <div className="flex justify-around items-center">
                            <a href="https://github.com/cjohnson7777/LegoSocial" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Code</a>
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project</a>
                        </div>

                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] ">
                        <h3 className="text-xl font-bold mb-2">Music Store</h3>
                        <p className="text-gray-400 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, at.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["HTML", "CSS", "Javascript"].map((skill, key) =>(
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.1)] transition-all">
                                 {skill}
                             </span>
                            ))}
                        </div>

                        <div className="flex justify-around items-center">
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Code</a>
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project</a>
                        </div>

                    </div>

                </div>

                

            </div>
         </RevealOnScroll>

        </section>
    )
}
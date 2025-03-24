import { RevealOnScroll } from "./RevealOnScroll"

export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>
                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl  md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent leading-right">Hello</h1>
                    <p className="text-gray-200 text-lg mb-8 max-w-lg mx-auto">Sometimes I build apps. Sometimes I debug for hours. Always, I chase mastery—with just a hint of glorious chaos.</p>
                    <div className="flex justify-center space-x-4">
                        <a href="#projects" className="bg-green-500/50 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(0,230,64,0.4)] ">See Projects</a>

                        <a href="#contact" className="border border-green-500/50 text-green-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(0,230,64,0.4)] hover:bg-green-500/10 ">Contact Me</a>

                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}
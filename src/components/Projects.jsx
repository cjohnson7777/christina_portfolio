import { useState } from "react"
import { RevealOnScroll } from "./RevealOnScroll"
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import projectHome from '../images/projectHome.png';
import projectLegoSet from '../images/projectLegoSet.png';
import projectProfile from '../images/projectProfile.png'
import projectSearch from '../images/projectSearch.png'
import storefront from '../images/storefront.png'
import artists from '../images/artists.png'
import buyProduct from '../images/buyProduct.png'
import modal from '../images/modal.png'
import filler from '../images/filler.png'
import footer from '../images/footer.png'



export const Projects = () => {
    const [open, setOpen] = useState(false)
    const [openMusic, setOpenMusic] = useState(false)
    const [openNotes, setOpenNotes] = useState(false)

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent text-center">My Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] ">
                        <h3 className="text-xl font-bold mb-2">Lego Social</h3>
                        <p className="text-gray-400 mb-4">A full-stack web application where users can sign up, discover, like, save, and comment on Lego sets.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "Django Rest Framework", "SQLite"].map((skill, key) =>(
                                <span key={key} className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                                 {skill}
                             </span>
                            ))}
                        </div>

                        <div className="flex justify-around items-center">
                            <a target="_blank" href="https://github.com/cjohnson7777/LegoSocial" className="text-green-400 hover:text-green-300 transition-colors my-4">View Code</a>
                            <button onClick={() => setOpen(true)} className="text-green-400 hover:text-green-300 transition-colors my-4 cursor-pointer">See Pictures</button>
                            
                        </div>

                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] ">
                        <h3 className="text-xl font-bold mb-2">Music Store</h3>
                        <p className="text-gray-400 mb-4">A music store front with smooth animations, intuitive navigation, and responsive design. With a third-party API for random lyric generation for new music exploration.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["HTML", "CSS", "Javascript"].map((skill, key) =>(
                                <span key={key} className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.1)] transition-all">
                                 {skill}
                             </span>
                            ))}
                        </div>

                        <div className="flex justify-around items-center">
                            <a target="_blank" href="https://github.com/cjohnson7777/music-store" className="text-green-400 hover:text-green-300 transition-colors my-4">View Code</a>
                            <button onClick={() => setOpenMusic(true)} className="text-green-400 hover:text-green-300 transition-colors my-4 cursor-pointer">See Pictures</button>
                        </div>

                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] ">
                        <h3 className="text-xl font-bold mb-2">Notes App</h3>
                        <p className="text-gray-400 mb-4">A simple web where users can sign in and create, view, and delete notes.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "Django Rest Framework", "SQLite"].map((skill, key) =>(
                                <span key={key} className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.1)] transition-all">
                                 {skill}
                             </span>
                            ))}
                        </div>

                        <div className="flex justify-around items-center">
                            <a target="_blank" href="https://github.com/cjohnson7777/notes-app" className="text-green-400 hover:text-green-300 transition-colors my-4">View Code</a>
                            
                        </div>

                    </div>

                </div>

                

            </div>
            <LegoModal open={open} setOpen={setOpen}/>
            <MusicModal open={openMusic} setOpen={setOpenMusic}/>
            
         </RevealOnScroll>

        </section>
    )
}

export function LegoModal({ open, setOpen }){

  return (
    
    <Dialog open={open} onClose={setOpen} className="relative z-10 ">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-900/60 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto overflow-x-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
            <div className="bg-black/80 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <DialogTitle as="h3" className="text-base font-semibold text-white">
                    Project Pictures
                  </DialogTitle>
                  <div className="flex mt-2 flex-col gap-3 h-65 overflow-scroll">
                    <img className="rounded" src={projectHome} alt="project-home" />
                    <img className="rounded" src={projectProfile} alt="project-profile" />
                    <img className="rounded" src={projectSearch} alt="project-search" />
                    <img className="rounded" src={projectLegoSet} alt="project-legoset" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-black/80 px-2 py-1 sm:flex sm:flex-row-reverse sm:px-6">
              
              <button
                type="button"
                data-autofocus
                onClick={() => setOpen(false)}
                
                className="inline-flex w-full mb-2 justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-100 sm:mt-0 sm:w-auto cursor-pointer"
              >
                Close
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )

    
}

export function MusicModal({ open, setOpen }){

    return (
      
      <Dialog open={open} onClose={setOpen} className="relative z-10 ">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-900/60 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />
  
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto overflow-x-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="bg-black/80 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle as="h3" className="text-base font-semibold text-white">
                      Project Pictures
                    </DialogTitle>
                    <div className="flex mt-2 flex-col gap-3 h-65 overflow-scroll">
                      <img className="rounded" src={storefront} alt="project-store" />
                      <img className="rounded" src={artists} alt="project-profile" />
                      <img className="rounded" src={buyProduct} alt="project-search" />
                      <img className="rounded" src={modal} alt="project-legoset" />
                      <img className="rounded" src={filler} alt="project-legoset" />
                      <img className="rounded" src={footer} alt="project-legoset" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-black/80 px-2 py-1 sm:flex sm:flex-row-reverse sm:px-6">
                
                <button
                  type="button"
                  data-autofocus
                  onClick={() => setOpen(false)}
                  
                  className="inline-flex w-full mb-2 justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-100 sm:mt-0 sm:w-auto cursor-pointer"
                >
                  Close
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    )
  
      
  }

  
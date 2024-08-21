import React from 'react'

const Projects = () => {
  return (
    <section className="xl:w-screen xl:h-screen py-60 pt-80 xl:my-80">
        <h1 className="text-4xl xl:text-6xl font-bold mb-32 text-center xl:text-left px-6 xl:px-32">Projects</h1>
        <div className="flex justify-center pb-10">
            <ul className="grid xl:grid-cols-2 gap-10 w-[70%] relative">
                <li className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 z-10">
                    <a href="https://frugalearth.pythonanywhere.com/">
                        <div className="bg-[url('/assets/images/frugalearth.png')] bg-cover h-[400px] p-4 w-full">

                        </div>
                        <div className="p-6">
                            <h3 className="xl:text-2xl font-bold mb-2">Frugal Earth</h3>
                            <p className="mb-4">This is my University Capstone Project. Frugal earth is a trading platform for people looking to declutter old belongings. </p>
                            <p><span className="font-bold">Technologies Learned:</span> Django Framework, SQLite</p>
                            <a href="https://frugalearth.pythonanywhere.com/" className="text-pink hover:underline" target="_blank">View Project</a>
                        </div>
                    </a>
                </li>
                <li className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 z-10">
                    <iframe src="https://crashr.io/" className="w-full h-[400px] p-4 rounded-xl" title="Project Preview">
                    </iframe>
                    <div className="p-6">
                            <h3 className="text-2xl font-bold mb-2">Crashr</h3>
                            <p className="mb-4">Crashr is a Web3 Trading Platform.</p>
                            <p><span className="font-bold">Technologies Learned:</span> Blazor, Tailwind, MudBlazor</p>
                            <div>
                                <a href="https://crashr.io/" className="text-pink hover:underline" target="_blank">View Project</a>
                                <a href=""></a>
                            </div>
                            
                        </div>
                </li>

                <div className="absolute w-96 h-56 rounded-full filter blur-[50px] -bottom-1 left-2 bg-pink z-0"></div>
            </ul>
        </div>
        
    </section>
  )
}

export default Projects

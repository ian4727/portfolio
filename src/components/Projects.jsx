import React from 'react'

const Projects = () => {
  return (
    <section className="px-24 xl:px-32 pt-80 h-screen w-screen">
        <h1 className="text-6xl font-bold mb-32">Projects</h1>
        <ul className="grid grid-cols-2 gap-6">
            <li className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                <a href="https://frugalearth.pythonanywhere.com/">
                    <img src="/assets/images/frugalearth.png" alt="Frugal earth" />
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">Frugal Earth</h3>
                        <p className="text-gray-700 mb-4">This is my University Capstone Project. Frugal earth is a trading platform for people looking to Declutter old belongings. </p>
                        <a href="https://frugalearth.pythonanywhere.com/" className="text-blue-500 hover:underline" target="_blank">View Project</a>
                    </div>
                </a>
            </li>
            <li className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                <iframe src="https://crashr.io/" className="w-full h-[425px] p-4 rounded-xl" title="Project Preview">
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">Crashr</h3>
                        <p className="text-gray-700 mb-4">Crashr is a Web3 Trading Platform </p>
                        <a href="https://crashr.io/" className="text-blue-500 hover:underline" target="_blank">View Project</a>
                    </div>
                </iframe>
            </li>
        </ul>
    </section>
  )
}

export default Projects

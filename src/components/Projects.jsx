import React from 'react'

const Projects = () => {
  return (
    <section className="px-24 xl:px-32 pt-80 h-screen w-screen">
        <h1 className="text-6xl font-bold mb-32">Projects</h1>
        <ul className="grid grid-cols-2">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                {/* <iframe src="https://frugalearth.pythonanywhere.com/" className="w-full h-48" title="Project Preview"></iframe> */}
                <img src="/assets/images/frugalearth.png" alt="" />
                <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Frugal Earth</h3>
                    <p className="text-gray-700 mb-4">Short description of the project.</p>
                    <a href="https://frugalearth.pythonanywhere.com/" className="text-blue-500 hover:underline" target="_blank">View Project</a>
                </div>
            </div>
        </ul>
    </section>
  )
}

export default Projects

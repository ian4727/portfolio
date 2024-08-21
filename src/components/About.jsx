import React from 'react'

const About = () => {
    return (
        <section className="px-40 xl:px-32 my-80 h-screen w-screen">
            <h1 className="text-6xl font-bold mb-32">Get to know me</h1>
            <div className="text-3xl">
                <div className="transform transition-transform duration-300 hover:scale-110">
                    <a href="/assets/files/gervacio-elaine.pdf" target="_blank" rel="noopener noreferrer">
                        <div className="flex items-center">
                            <img src="/assets/images/socials/resume.png" alt="Mobile" className="w-24 " />
                            <span>Check my resume</span>
                        </div>
                    </a>
                </div>
                <div className="transform transition-transform duration-300 hover:scale-110">
                    <a href="mailto:edelhongervacio@gmail.com">
                        <div className="flex items-center">
                            <img src="/assets/images/socials/email.png" alt="Mobile" className="w-20 transform transition-transform duration-300 hover:scale-101" />
                            <span>edelhongervacio@gmail.com</span>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About

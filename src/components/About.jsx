import React from 'react'

const About = () => {
    return (
        <section className="px-6 xl:px-32 pt-60 xl:pt-80">
            <h1 className="text-4xl xl:text-6xl font-bold mb-32 text-center xl:text-left">Get to know me</h1>
            <div className="text-md xl:text-3xl flex flex-col gap-10 xl:gap-20 justify-center">
                <div className="transform transition-transform duration-300 hover:scale-110">
                    <div className="flex items-center">
                        <img src="/assets/images/socials/placeholder.png" alt="Mobile" className="w-20 transform transition-transform duration-300 hover:scale-101 ml-4 mr-6" />
                        <span>Manila, Philippines</span>
                    </div>
                </div>
                <div className="transform transition-transform duration-300 hover:scale-110">
                    <a href="mailto:edelhongervacio@gmail.com">
                        <div className="flex items-center">
                            <img src="/assets/images/socials/email.png" alt="Mobile" className="w-20 transform transition-transform duration-300 hover:scale-101 ml-4 mr-6" />
                            <span>edelhongervacio@gmail.com</span>
                        </div>
                    </a>
                </div>
                <div className="transform transition-transform duration-300 hover:scale-110">
                    <div className="flex items-center text-md xl:text-2xl">
                        <img src="/assets/images/socials/phone.png" alt="Mobile" className="w-20 transform transition-transform duration-300 hover:scale-101 ml-4 mr-6" />
                        <span>+63-905-213-6086</span>
                    </div>
                </div>
                <div className="transform transition-transform duration-300 hover:scale-110">
                    <a href="/assets/files/gervacio-elaine.pdf" target="_blank" rel="noopener noreferrer">
                        <div className="flex items-center">
                            <img src="/assets/images/socials/resume.png" alt="Mobile" className="w-20 xl:w-24 ml-3 xl:ml-2 mr-7 xl:mr-4" />
                            <span>Check my resume</span>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About

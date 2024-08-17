import React from "react"

const Main = () => {
    return (
        <main className="px-10 pt-48 h-screen flex flex-col justify-between">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl typing-effect">Hi! My name is <span className="text-[#f0bbd4] font-bold">Ian</span>.</h1>
                    <p className="text-xl">I'm a Coding Instructor and FrontEnd Web Developer from the Philippines.</p>
                </div>
                <div>
                    <img src="/src/assets/images/ian.png" className="z-40" alt="Animated photo" />
                    {/* <img src="/src/assets/images/vector1.png" className="absolute top-20 z-10" alt="vector" /> */}
                </div>
                
            </div>
            <div className="flex justify-center mt-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-bounce text-[#f0bbd4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </div>

        </main>  
    )
}

export default Main
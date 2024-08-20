import React from "react"

const Main = () => {
    return (
        <main className="px-24 xl:px-32 pt-52 xl:pt-60 h-screen w-screen flex flex-col justify-between ">
            <div className="flex items-center justify-between h-[90%]">
                <div className="relative z-10">
                    <p className="text-3xl xl:text-[80px] font-bold typing-effect leading-tight">Hi! My name is <span className="text-pink font-extrabold">Ian</span>.</p>
                    <p className="text-xl xl:text-[50px] leading-tight">I'm a Coding Instructor and FrontEnd Web Developer from the Philippines.</p>
                </div>
                <div>
                    <img src="/assets/images/ian.png" className="curved-bottom" alt="Animated photo" />
                </div> 
            </div>
            <div className="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 animate-bounce text-darkblue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </div>
            <div className="absolute w-96 h-56 rounded-full filter blur-[50px] top-[600px] left-1 bg-blue z-0"></div>
            <div className="absolute w-96 h-56 rounded-full filter blur-[70px] top-[70rem] right-72 bg-pink z-0"></div>
        </main>  
    )
}

export default Main


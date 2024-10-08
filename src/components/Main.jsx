import { TypeAnimation } from "react-type-animation"

const Main = () => {
    return (
        <main className="px-20 xl:px-32 pt-52 xl:pt-60 xl:h-screen xl:w-screen flex flex-col justify-between ">
            <div className="flex flex-col-reverse xl:flex-row items-center justify-between h-[90%] gap-10 xl:gap-0">
                <div className="relative z-10 text-center xl:text-left">
                    <p className="text-[40px] xl:text-[80px] font-bold leading-tight">
                        Hi! My name is
                        <span className="text-pink font-extrabold"> Ian</span>.
                    </p>
                    <p className="text-[30px] xl:text-[50px] leading-tight">
                        I'm a
                        <TypeAnimation
                            sequence={[
                                " Coding Instructor",
                                1000,
                                " Frontend Developer",
                                1000,
                                " Traveler",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity} />
                    </p>
                </div>
                <div className="z-10">
                    <img src="/assets/images/ian.png" className="curved-bottom" alt="Animated photo" />
                </div> 
            </div>
            <div className="hidden xl:flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 animate-bounce text-darkblue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </div>
            <div className="absolute w-96 h-56 rounded-full filter blur-[50px] xl:top-[600px] left-1 bg-pink z-0"></div>
            <div className="absolute w-96 h-56 rounded-full filter blur-[100px] top-[70rem] right-72 bg-blue z-0"></div>
        </main>  
    )
}

export default Main


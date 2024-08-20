

const Footer = () => {
    return (
        <footer className="bg-darkblue w-full h-[450px] text-white p-24">
            <div className="flex justify-between">
                <div>
                    <h1 className="text-6xl font-bold mb-14">Let's Connect!</h1>
                    <ul className="flex gap-10">
                        <li>
                            <a href="https://www.linkedin.com/in/gervacio4727/">
                                <img src="/assets/images/linkedin.png" alt="LinkedIn" className="w-10 transform transition-transform duration-300 hover:scale-150" />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/ian4727">
                                <img src="/assets/images/github.png" alt="Github" className="w-10 transform transition-transform duration-300 hover:scale-150" />
                            </a>
                        </li>
                    </ul>
                </div> 
                <ul className="flex flex-col justify-start w-[45%] gap-10 text-2xl">
                    <li className="flex items-center">
                        <img src="/assets/images/smartphone.png" alt="Mobile" className="w-14 mr-4" />
                        <span>+63-905-213-6086</span>
                    </li>
                    <li>
                        <a href="mailto:edelhongervacio@gmail.com">
                            <div className="flex items-center">
                                <img src="/assets/images/email.png" alt="Mobile" className="w-12 mr-6 transform transition-transform duration-300 hover:scale-150" />
                                <span>edelhongervacio@gmail.com</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/assets/files/gervacio-elaine.pdf" target="_blank" rel="noopener noreferrer">
                            <div className="flex items-center">
                                <img src="/assets/images/user-profile.png" alt="Mobile" className="w-14 mr-6 transform transition-transform duration-300 hover:scale-150" />
                                <span>Check my resume</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <p className="text-center mt-20">&#169; Ian Gervacio. All rights reserved.</p>
        </footer>
    )
}

export default Footer;



const Footer = () => {
    return (
        <footer className="bg-darkblue w-full h-96 text-white p-24">
            <div className="flex justify-between">
                <div>
                    <h1 className="text-6xl font-bold mb-14">Let's Connect!</h1>
                    <ul className="flex gap-10">
                        <li>
                            <a href="https://www.linkedin.com/in/gervacio4727/">
                                <img src="/assets/images/linkedin.png" alt="LinkedIn" className="w-10" />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/ian4727">
                                <img src="/assets/images/github.png" alt="Github" className="w-10" />
                            </a>
                        </li>
                        {/* <li>
                            <a href="https://github.com/ian4727">
                                <img src="/assets/images/email.png" alt="Github" className="w-10" />
                            </a>
                        </li> */}
                    </ul>
                </div> 
                <ul className="flex flex-col justify-start w-[50%] gap-10 text-2xl">
                    <li className="flex items-center">
                        <img src="/assets/images/smartphone.png" alt="Mobile" className="w-14 mr-4" />
                        {/* <p>Mobile number</p> */}
                        <span>+63-905-213-6086</span>
                    </li>
                    <li className="flex items-center">
                        <img src="/assets/images/email.png" alt="Mobile" className="w-12 mr-6" />
                        <a href="mailto:edelhongervacio@gmail.com">edelhongervacio@gmail.com</a>
                    </li>
                    <li className="flex items-center">
                        <img src="/assets/images/user-profile.png" alt="Mobile" className="w-14 mr-6" />
                        <a href="/assets/files/gervacio-elaine.pdf" target="_blank" rel="noopener noreferrer">Check my resume</a>
                    </li>
                </ul>
            </div>
            <p>All rights reserved Ian Gervacio &#169;</p>
        </footer>
    )
}

export default Footer;

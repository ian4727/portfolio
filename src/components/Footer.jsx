const Footer = () => {
    return (
        <footer className="bg-darkblue w-full xl:h-96 text-white px-10 pt-10 pb-4 xl:p-24">
            <div>
                <h1 className="text-4xl xl:text-6xl font-bold mb-14">Let's Connect!</h1>
                <ul className="flex gap-4 xl:gap-10">
                    <li>
                        <a href="https://www.linkedin.com/in/gervacio4727/">
                            <img src="/assets/images/socials/linkedin.png" alt="LinkedIn" className="w-10 transform transition-transform duration-300 hover:scale-150" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/ian4727">
                            <img src="/assets/images/socials/github.png" alt="Github" className="w-10 transform transition-transform duration-300 hover:scale-150" />
                        </a>
                    </li>
                </ul>
            </div> 
            <p className="text-center mt-20">&#169; Ian Gervacio. All rights reserved.</p>
        </footer>
    )
}

export default Footer;

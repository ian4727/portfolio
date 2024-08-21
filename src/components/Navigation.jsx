import React from "react";
import { Drawer, IconButton, List, ListItem } from "@material-tailwind/react";

const Navigation = ({ open, openDrawer, closeDrawer }) => {
    return (
        <nav className="fixed w-full top-0 p-20  backdrop-blur-lg shadow-none z-50">
            <div className="flex items-center justify-between">
                <div className="flex justify-between items-center">
                <a href="/">
                    <img src="/assets/images/logo.png" alt="logo" className="w-24 transform transition-transform duration-300 hover:scale-110" />
                </a>
                <button
                    onClick={openDrawer}
                    className="bg-transparent text-[40px] normal-case select-none transform transition-transform duration-300 hover:scale-110 ml-10">
                    Menu
                </button>
                <Drawer open={open} onClose={closeDrawer} className="p-4">
                    <div className="mb-6 flex flex-col">
                        <IconButton variant="text" className="ml-auto text-[#4c5c8c]" onClick={closeDrawer}>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-5 w-5"
                            >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </IconButton>
                    </div>
                    <List className="text-[#4c5c8c] dark:text-white">
                    <ListItem>About Me</ListItem>
                    <ListItem>My Projects</ListItem>
                    <ListItem>Character References</ListItem>
                    <ListItem>Download my CV</ListItem>
                    <ListItem>Let's Connect!</ListItem>
                    </List>
                </Drawer>
                </div>
                {/* <div className="border-gradient-to-r from-darblue via-pink to-white border-8 rounded-3xl px-6 flex items-center text-[40px] text-pink transform transition-transform duration-300 hover:scale-105">
                    <a href="mailto:edelhongervacio@gmail.com">Let's talk!</a>
                </div> */}
                <a href="mailto:edelhongervacio@gmail.com">
                    <button className="animated-gradient-border text-[30px] !font-normal !normal-case !rounded-2xl !bg-gradient-to-r from-darkblue via-pink to-white !p-2 transform transition-transform duration-300 hover:scale-105">
                        <div className="flex rounded-[10px] bg-[#F4F9FD] items-center justify-center py-[5px] px-4 xs:px-[10px] sm:px-[30px]">
                            Let's talk!
                        </div>
                    </button>
                </a>
            </div>
        </nav>
    );
};

export default Navigation;

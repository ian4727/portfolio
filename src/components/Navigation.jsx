import React from "react";
import { Drawer, IconButton, List, ListItem } from "@material-tailwind/react";

const Navigation = ({ open, openDrawer, closeDrawer }) => {
    return (
        <nav className="fixed w-full top-0 p-20  backdrop-blur-sm shadow-none z-50">
            <div className="flex items-center justify-between">
                <div className="flex justify-between items-center">
                <a href="/">
                    <img src="/assets/images/logo.png" alt="logo" className="w-24" />
                </a>
                <button
                    onClick={openDrawer}
                    className="bg-transparent text-[40px] normal-case select-none hover:bg-gray-900/10 rounded-lg px-6 py-3"
                >
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
                <div className="border-darkblue border-8 rounded-3xl px-6 flex items-center text-[40px] text-pink">
                    <a href="mailto:edelhongervacio@gmail.com">Let's talk!</a>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;

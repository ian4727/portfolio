import React from "react";

import {
    Drawer,
    Button,
    Typography,
    IconButton,
  } from "@material-tailwind/react";

const Navigation = () => {
    const [open, setOpen] = React.useState(false);
    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    return (
        <nav className="fixed w-full top-0 p-10">
            <div className="flex items-center justify-between">
                <div className="flex justify-between w-40 items-center">
                    <a href="/">
                        <img src="/src/assets/images/logo.png" alt="logo" className="w-20"/>
                    </a>
                    <Button onClick={openDrawer} className="bg-transparent text-2xl normal-case">Menu</Button>
                    <Drawer open={open} onClose={closeDrawer} className="p-4">
                        <div className="mb-6 flex items-center justify-between">
                            <Typography variant="h5" color="blue-gray">About Me</Typography>
                            <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-5 w-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </IconButton>
                        </div>
                    </Drawer>
                </div>
                <div className="border-[#f0bbd4] border-2 rounded-xl p-4 flex items-center h-12 text-xl">
                    <a href="mailto:edelhongervacio@gmail.com">Let's talk business!</a>
                </div>
            </div>   
        </nav>
    )
}

export default Navigation

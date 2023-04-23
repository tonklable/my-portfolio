import Link from 'next/link';
import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";


export default function Navbar(props) {

    const toggleMenu = () => {
        props.setIsOpen(!props.isOpen);
    };
    return (
        <nav className="bg-white px-4">
            <div className="container mx-auto">
                <div className="items-center justify-end space-x-16 hidden md:flex">
                    <Link href="/" className="text-black font-sans font-bold hover:text-main transition-colors pt-5 pb-4">
                        Home
                    </Link>
                    {/* <Link href="/about" className="text-black font-sans font-bold hover:text-main transition-colors pt-5 pb-4">
                        About
                    </Link> */}
                    {/* <Link href="/work" className="text-black font-sans font-bold hover:text-main transition-colors pt-5 pb-4">
                        Work
                    </Link> */}
                    <Link href="/resume" className="text-black font-sans font-bold hover:text-main transition-colors pt-5 pb-4">
                        Resume
                    </Link>
                </div>
                <motion.nav
                    initial={false}
                    animate={props.isOpen ? "open" : "closed"}
                    className='menu'>
                    <motion.div className="md:hidden flex justify-end items-center w-full pt-5 pb-4">
                        <motion.button onClick={toggleMenu} whileTap={{ scale: 0.97 }}>
                            <motion.div
                                whileTap={{ scale: 0.8 }}
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    ></path>

                                </svg>
                            </motion.div>
                        </motion.button>
                    </motion.div>
                    <AnimatePresence initial={true} mode="popLayout">
                        {props.isOpen && (
                            <motion.div className="flex flex-col mt-2 md:hidden"
                                layout
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                transition={{ type: "spring" }}>
                                <Link href="/" className="text-black font-sans font-bold hover:text-main transition-colors pt-5 pb-4">
                                    Home
                                </Link>
                                {/* <Link href="/about" className="text-black font-sans font-bold hover:text-main transition-colors pt-5 pb-4">
                                    About
                                </Link> */}
                                {/* <Link href="/work" className="text-black font-sans font-bold hover:text-main transition-colors pt-5 pb-4">
                                    Work
                                </Link> */}
                                <Link href="/resume" className="text-black font-sans font-bold hover:text-main transition-colors pt-5 pb-4">
                                    Resume
                                </Link>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.nav>
            </div>
        </nav>

    );
};
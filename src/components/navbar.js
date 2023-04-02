import Link from 'next/link';
import React, { useState } from 'react';


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className="bg-white px-4">
            <div className="container mx-auto">
                <div className="items-center justify-end space-x-16 hidden md:flex">
                    <Link href="/" className="text-black font-sans font-bold hover:text-main transition-colors pt-5 pb-4">
                        Home
                    </Link>
                    <Link href="/about" className="text-black font-sans font-bold hover:text-main transition-colors pt-5 pb-4">
                        About
                    </Link>
                    <Link href="/work" className="text-black font-sans font-bold hover:text-main transition-colors pt-5 pb-4">
                        Work
                    </Link>
                    <Link href="/resume" className="text-black font-sans font-bold hover:text-main transition-colors pt-5 pb-4">
                        Resume
                    </Link>
                </div>
                <div className="md:hidden flex justify-end items-center w-full pt-5 pb-4">
                    <button onClick={toggleMenu}>
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
                    </button>
                </div>
                {isOpen && (
                    <div className="flex flex-col mt-2 md:hidden">
                        <Link href="/" className="text-black font-sans font-bold hover:text-main transition-colors pt-5 pb-4">
                            Home
                        </Link>
                        <Link href="/about" className="text-black font-sans font-bold hover:text-main transition-colors pt-5 pb-4">
                            About
                        </Link>
                        <Link href="/work" className="text-black font-sans font-bold hover:text-main transition-colors pt-5 pb-4">
                            Work
                        </Link>
                        <Link href="/resume" className="text-black font-sans font-bold hover:text-main transition-colors pt-5 pb-4">
                            Resume
                        </Link>
                    </div>
                )}
            </div>
        </nav>

    );
};
import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-gray-100 py-6">
            <div className="container mx-auto px-4 md:px-0">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="text-gray mb-4 md:mb-0 text-xs md:text-sm lg:text-md px-4 md:px-8 ">
                        <div>Natprawee Pattayawij</div>
                        <div className="flex items-center">
                            <span>📧 tonklalor2544@gmail.com</span>
                        </div>
                    </div>
                    <div className="text-gray text-xs md:text-sm lg:text-md px-4 md:px-8 md:text-right">
                        Coded from scratch with Next.js, Tailwind CSS, and Framer Motion
                    </div>
                </div>
            </div>
        </footer>
    );
};
import Navbar from './navbar'
import Footer from './footer'
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from 'react';



export default function Layout({ children }) {

    const [isOpen, setIsOpen] = useState(false);
    const childrenWithProps = React.Children.map(children, (child) => {
        return React.cloneElement(child, { isOpen, setIsOpen });
    });
    return (
        <>
            <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
            <main>
                {childrenWithProps}
            </main>
            <Footer />
        </>
    )
}
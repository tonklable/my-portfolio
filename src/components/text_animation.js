import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TextAnimation() {
    const texts = ['Front-End Developer', 'Aspiring Product Manager']
    const emojis = [<p>🖥️</p>, <p>📱</p>]
    const letter = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
        }
    }
    const sentence = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                duration: 10,
                delay: 0.5,
                staggerChildren: 0.5,
            }
        }
    }

    return (
        <div className='flex space-x-2'>
            {/* <motion.h2 className="flex text-xl lg:text-4xl text-left font-bold text-main font-sans" variants={sentence} initial="hidden" animate="visible">
                I'm a {texts[0].split().map((char, index) => {
                    return (
                        <motion.span className="flex" key={char + '-' + index} variants={letter} initial="hidden" animate="visible">
                            {char}
                        </motion.span>
                    )
                })}
                {emojis[0]}
            </motion.h2> */}
            <h2 className="flex text-xl lg:text-4xl text-left font-bold text-main font-sans">
                Front-End Developer 🖥️ / Aspiring Product Manager 📱
            </h2>
            <motion.div
                className='w-2 h-10 flex bg-main'
                animate={{ opacity: [1, 0, 0, 1] }}
                transition={{ times: [0, 0.001, 0.5, 0.501], duration: 1, ease: "linear", repeat: Infinity }}></motion.div>
        </div>
    )
}
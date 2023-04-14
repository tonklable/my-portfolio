import Head from 'next/head'
import Image from 'next/image'
import profilePic from 'public/img/Myself.JPG'
import { motion, AnimatePresence } from "framer-motion";

export default function About() {
    return (

        <motion.div layout
            transition={{ type: "spring" }}>
            <Head>
                <title>About</title>
            </Head>
            <div className="container flex flex-col items-center px-8 mx-auto transition-{min-height} duration-500 ease-in-out	delay-0	">
                <div className="w-full">
                    <h1 className="text-2xl lg:text-4xl text-left font-bold text-black font-sans leading-tight mt-16 mb-8 outline-none">
                        About
                    </h1>
                    <article>
                        <div className='flex'>
                            <div className="mb-5 md:w-1/3">
                                <Image objectFit='cover' src={profilePic} />
                                <div>
                                    <h1 className="text-lg lg:text-2xl text-left font-bold text-black font-sans leading-tight mt-16 mb-8 outline-none">
                                        Contact
                                    </h1>
                                </div>
                            </div>
                            <div className="mb-5 md:w-2/3">abc2</div>
                        </div>
                    </article>

                </div>
            </div>
        </motion.div >
    )
}

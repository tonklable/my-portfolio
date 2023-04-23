import Head from 'next/head'
import Image from 'next/image'
import { motion, AnimatePresence } from "framer-motion";

export default function Resume() {
    return (

        <motion.div layout
            transition={{ type: "spring" }}>
            <Head>
                <title>Resume</title>
            </Head>
            <div className="px-8 flex justify-center items-center h-screen">
                <div className="flex items-center justify-center w-5/6 h-5/6 bg-white shadow-lg">
                    <div className="relative w-full h-full p-4">
                        <Image src={'/img/Resume_Mercari_SE.png'} layout="fill" objectFit="contain" alt="Resume" />
                        <div className="absolute inset-0 bg-black opacity-25"></div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center w-1/2 h-full bg-gray-100">
                    <a href="/Resume_Mercari_SE.pdf" download className="mt-4 py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
                        Download
                    </a>
                </div>
            </div>
        </motion.div >
    )
}

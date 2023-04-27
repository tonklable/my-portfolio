import Head from 'next/head'
import Image from 'next/image'
import { motion, AnimatePresence } from "framer-motion";

export default function Resume() {
    return (

        <motion.div className='items-center justify-center' layout
            transition={{ type: "spring" }}>
            <Head>
                <title>Resume</title>
            </Head>
            <div className='relative w-screen h-auto mx-auto'>
                <h1 className="text-xl lg:text-3xl text-left md:my-8 font-bold text-black font-sans leading-tight px-8 md:px-16 mt-8">
                    Resume 📄
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="flex order-2 md:order-1 col-span-2 m-auto bg-white shadow-lg">
                        <Image src={'/img/Resume_Mercari_SE.png'} className='max-w-xs md:max-w-md lg:max-w-2xl' layout="responsive" width="90" height="160" alt="Resume" />
                        <div className="absolute inset-0 bg-black opacity-25"></div>
                    </div>
                    <div className="col-span-1 order-1 flex flex-col mx-auto md:ml-0 h-full items-center md:items-start z-10">
                        <a href="/Resume_Mercari_SE.pdf" download className="my-4 md:my-0 py-2 px-4 bg-main text-white hover:bg-main-hover transition-colors duration-300 ease-in-out font-semibold rounded-lg shadow-md">
                            Download (.pdf)
                        </a>
                    </div>
                </div>
            </div>

        </motion.div >
    )
}

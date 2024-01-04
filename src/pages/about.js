import Head from 'next/head'
import Image from 'next/image'
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

export default function About() {
    return (

        <motion.div layout
            transition={{ type: "spring" }}>
            <Head>
                <title>About</title>
            </Head>
            <div className="container flex flex-col items-center px-8 mx-auto transition-{min-height} duration-500 ease-in-out delay-0	">
                <div className="w-full">
                    <h1 className="text-2xl lg:text-4xl text-left font-bold text-black font-sans leading-tight mt-16 mb-8 outline-none">
                        About
                    </h1>
                    <article>
                        <div className='grid md:grid-cols-3 md:gap-16'>
                            <div className="mb-5 md:col-span-1 order-2 md:order-1">
                                <Image alt='Image of myself' objectFit='contain' width={1000} height={1000} src={'/img/myself.png'} />
                                <div>
                                    <h1 className="text-lg lg:text-2xl text-left font-bold text-black font-sans leading-tight mt-16 mb-4 outline-none">
                                        Contact
                                    </h1>
                                    <div class="grid grid-rows-3">
                                        <div className=' row-span-1'>
                                            <a href="mailto:tonklalor2544@gmail.com" class="hover:text-main transition duration-200">
                                                📧 tonklalor2544@gmail.com
                                            </a>
                                        </div>
                                        <div className='row-span-1 flex'>
                                            <span class="mt-1 mx-1">
                                                <AiFillGithub />
                                            </span>
                                            <a href="https://github.com/tonklable" target="_blank" rel="noopener noreferrer" class="hover:text-main transition duration-200">
                                                github.com/tonklable
                                            </a>
                                        </div>
                                        <div className='row-span-1 flex'>
                                            <span class="mt-1 mx-1">
                                                <AiFillLinkedin />
                                            </span>
                                            <a href="https://www.linkedin.com/in/natprawee-pattayawij/" target="_blank" rel="noopener noreferrer" class="hover:text-main transition duration-200">
                                                linkedin.com/in/natprawee-pattayawij/
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-5 md:col-span-2 order-1 md:order-2">
                                <h2 className='text-xl md:text-2xl font-bold'>Natprawee Pattayawij (TK)</h2>
                                <h3 className='text-xl md:text-2xl font-bold text-main'>Front-end Developer / Aspiring Product Manager</h3>
                                <p className='font-serif text-sm md:text-md my-4'>My name is TK, Natprawee Pattayawij. I am a 4th-year student in Department of Transdisciplinary Science and Engineering, Tokyo Institute of Technology. In my program, I have a chance to study in many disciplines including Technology, Science and Management, and I am going to do research in Ohashi lab on the topic of design research of applications for disasters in Japan. I have a big interest in <b className='bg-main bg-opacity-40'>application, web application developments</b> and <b className='bg-main bg-opacity-40'>human computer interaction</b>. I have joined some hackathons for social technology web application as well.
                                </p>
                                <p className='font-serif text-sm md:text-md my-4'>
                                    I was awarded the <b className='bg-main bg-opacity-40'>AEON 1% Club Scholarship</b> for a full tuition fee and monthly stipend support.
                                </p>
                                <p className='font-serif text-sm md:text-md my-4'>
                                    I was an intern in <b className='bg-main bg-opacity-40'>website frontend team at Mercari Inc.</b>  for two months. From this intern, I learned a lot about webapp development using Next.js and TypeScript. I am doing an internship as a <b className='bg-main bg-opacity-40'>product management associate</b> at Tofu, Inc. Tofu, Inc. is a newly established startup doing an EOR and payroll platform for BPOs including GoGlobal. We are integrating payroll and EOR services with AI. I contributed to product tutorial documentation, data migration, implementation of service and writing user stories.
                                </p>
                            </div>
                        </div>
                    </article>

                </div>
            </div>
        </motion.div >
    )
}

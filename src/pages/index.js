import Head from 'next/head'
import Card from '../components/card.js';
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <motion.div layout
      transition={{ type: "spring" }}>
      <div className="container flex justify-start items-center min-h-[92.5vh] px-8 mx-auto	">
        <div className="max-w-full">
          <div className="p-2 md:p-10 space-y-5">
            <h1 className="text-4xl lg:text-6xl text-left font-bold text-black font-sans leading-tight">
              Natprawee Pattayawij (TK)
            </h1>
            <h2 className="text-xl lg:text-4xl text-left font-bold text-main font-sans ">
              Front-End Developer 🖥️ / Aspiring Product Manager 📱
            </h2>
            <ul className="text-xs md:text-lg list-disc list-inside font-sans font-medium text-gray">
              <li>4th-year engineering student at Tokyo Institute of Technology</li>
              <li>Doing research in user experience of disaster prevention application in Japan</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container flex flex-col items-center px-8 mx-auto transition-{min-height} duration-500 ease-in-outdelay-0	">
        <h1 className="text-xl lg:text-3xl text-center font-bold text-black font-sans leading-tight">
          Info 💻
        </h1>

        <div className="container mx-auto p-2 md:p-4">
          <div className="md:columns-2 space-y-8 md:space-y-0">
            {/* <div>
              <Link href="/about">
                <Card
                  imageUrl={'/img/16-9.jpg'}
                  title="About Me 👨‍💻"
                  subtitle="Get to know me more"
                />
              </Link>
            </div> */}
            <div>
              <Link href="/resume">
                <Card
                  imageUrl={'/img/Resume_Mercari_SE.png'}
                  title="Resume 🗎"
                  subtitle="Download my resume"
                />
              </Link>
            </div>

          </div>
        </div>
        <br />
        <section className="container p-2 md:p-4 mx-auto">
          <h2 className="text-xl lg:text-3xl text-center font-bold text-black font-sans leading-tight">Projects 💼</h2>
          <br />
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {allPostsData.map(({ id, subtitle, title, bannersrc, draft }) => (
              !draft && <li className="" key={id}>
                <Link href={`/posts/${id}`}>
                  <Card
                    imageUrl={bannersrc}
                    title={title}
                    subtitle={subtitle}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </motion.div>
  )
}

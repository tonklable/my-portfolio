
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head';
import Date from '../../components/date';
import Image from 'next/image'
import { motion } from "framer-motion";
import { ReactMarkdown } from 'react-markdown';
import CircleChip from '@/components/circle_chip';
import cheerio from 'cheerio';
import YouTube from 'react-youtube';

const extractH2 = (html) => {
    const $ = cheerio.load(html);
    const h2List = [];

    $('h2').each((index, element) => {
        const id = `h2-${index}`;
        h2List.push({ text: $(element).text(), id });
        $(element).attr('id', id);
    });

    return { h2List, updatedHtml: $.html() };
};

export default function Post({ postData }) {
    const { h2List, updatedHtml } = extractH2(postData.contentHtml);
    const H2Table = ({ h2List }) => {
        return (
            <div className='py-4 px-4 my-4 rounded-lg border-2 border-main bg-white'>
                <h2 className="mb-4 font-bold">Contents</h2>
                {h2List.map(({ text, id }) => (
                    <div className="py-2">
                        <a href={`#${id}`} className="text-black transition-colors duration-300 ease-in-out hover:text-main">
                            {text}
                        </a>
                    </div>
                ))}
            </div>
        );
    };
    const RowSplit = ({ member }) => {
        const members = member.split(',');
        return (
            <div>
                {
                    members.map((member) => (
                        <p className=" text-gray text-xs rounded-full py-0.5">
                            {member}
                        </p>
                    ))}
            </div>
        );
    };
    const videoSrc = `https://www.youtube.com/embed/${postData.youtube}`;

    return (
        <motion.div layout
            transition={{ type: "spring" }}>
            <div className='justify-center items-center'>
                <Head>
                    <title>{postData.title}</title>
                </Head>
                <div className="relative w-screen h-screen">
                    <Image src={postData.bannergradientsrc}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"

                        alt={postData.title} />
                    <div className="absolute top-1/2 lg:left-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-left">
                        <h1 className="text-5xl sm:text-6xl text-main font-bold">{postData.title}</h1>
                        <p className="text-3xl sm:text-4xl text-white">{postData.subtitle}</p>
                        <p className="text-xl sm:text-1xl pt-2 text-gray-light">{postData.duration}</p>
                        <div className='my-5 flex-wrap'>
                            <CircleChip tag={postData.tag} />
                        </div>
                        <div className='grid grid-cols-2 gap-8'>
                            <div className='col-span-1'>
                                <h4 className="text-xl sm:text-lg text-gray-light font-medium">Team</h4>
                                <RowSplit member={postData.team} />
                            </div>
                            <div className='col-span-1'>
                                <h4 className="text-xl sm:text-lg text-gray-light font-medium">Tools</h4>
                                <RowSplit member={postData.tools} />
                            </div>
                        </div>
                        <div className='mt-2'>
                            <div className='col-span-1'>
                                <h4 className="text-xl sm:text-lg text-gray-light font-medium">Purpose</h4>
                            </div>
                            <p className="text-gray text-xs rounded-full py-0.5">
                                {postData.purpose}
                            </p>
                        </div>

                    </div>
                    <div className='hidden lg:block absolute top-1/2 md:right-1/4 right-1/2 transform translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3'>
                        {postData.youtube && <iframe
                            className="inset-0 w-full h-full"
                            src={videoSrc}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>}
                    </div>

                </div>
                <div className='flex flex-col mx-auto px-8 lg:px-24 md:py-8'>
                    <div className="lg:hidden relative pt-[56.25%] md:pt-[50%] lg:pt-[42.86%]">
                        {postData.youtube && <iframe
                            className="absolute inset-0 w-full h-full"
                            src={videoSrc}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>}
                    </div>
                    <div class="md:grid md:grid-cols-4 md:gap-8 sm:mt-4 mx-auto">
                        <div class="col-span-1">
                            <H2Table h2List={h2List} />
                        </div>
                        <div class="col-span-3">
                            <div class="markdown-content" dangerouslySetInnerHTML={{ __html: updatedHtml }}></div>
                        </div>
                    </div>
                </div>

            </div>
        </motion.div >
    );
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const postData = await getPostData(params.id);

    return {
        props: {
            postData,
        },
    };
}
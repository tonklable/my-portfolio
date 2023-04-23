
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head';
import Date from '../../components/date';
import Image from 'next/image'
import { motion } from "framer-motion";
import { ReactMarkdown } from 'react-markdown';



export default function Post({ postData }) {
    return (
        <motion.div layout
            transition={{ type: "spring" }}>
            <div className='h-screen justify-center items-center'>
                <Head>
                    <title>{postData.title}</title>
                </Head>
                <div className="relative w-screen h-screen">
                    <Image src={postData.bannergradientsrc}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"

                        alt={postData.title} />
                </div>
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-2xl sm:text-4xl font-bold">{postData.title}</h1>
                    <br />
                    <p className="text-xl sm:text-2xl">{postData.id}</p>
                    <br />
                    <Date dateString={postData.date} />
                    <br />
                    <div
                        className="prose sm:prose-lg text-left"
                        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                    />
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
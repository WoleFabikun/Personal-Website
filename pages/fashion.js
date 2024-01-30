import Layout from "@/components/Layout";
import Image from "next/image";
import { readdirSync } from "fs";
import { join } from "path";

const Fashion = ({ mediaItems }) => {
    return (
        <Layout>
            <main className="flex flex-col px-6 pt-20 font-sans sm:px-20 md:pt-28 lg:px-32 ">
                <section className="flex flex-col items-center justify-center mt-8 mb-8 text-lg leading-8 text-left text-slate-200">
                    <h1 className="mb-2 text-5xl font-bold dark:text-slate-200 text-blue-600">Fashion Media</h1>
                    <p className="mb-4 dark:text-slate-200 text-blue-600">
                        Explore my fashion media collection.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {mediaItems.map((item, index) => (
                            <div key={index} className="w-full">
                                {item.type === 'image' ? (
                                    <Image
                                        src={item.src}
                                        alt={`Fashion Image ${index}`}
                                        width={800}
                                        height={600}
                                        layout="responsive"
                                        objectFit="cover"
                                    />
                                ) : (
                                    <video width={1920} height={1080} controls>
                                        <source src={item.src} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </Layout>
    );
};

export async function getStaticProps() {
    const imageFiles = readdirSync(join(process.cwd(), "public/assets/fashionpix"));
    const videoFiles = readdirSync(join(process.cwd(), "public/assets/fashionvideos"));

    const imageItems = imageFiles.map((file) => ({ type: 'image', src: `/assets/fashionpix/${file}` }));
    const videoItems = videoFiles.map((file) => ({ type: 'video', src: `/assets/fashionvideos/${file}` }));

    const mediaItems = [...imageItems, ...videoItems];

    return {
        props: {
            mediaItems,
        },
    };
}

export default Fashion;


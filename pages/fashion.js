import Layout from "@/components/Layout";
import Image from "next/image";
import { readdirSync } from "fs";
import { join } from "path";

const Fashion = ({ fashionImages }) => {
    return (
        <Layout>
            <main className="flex flex-col px-6 pt-20 font-sans sm:px-20 md:pt-28 lg:px-32 ">
                {/* Fashion Modeling Content */}
                <section className="flex flex-col items-center justify-center mt-8 mb-8 text-lg leading-8 text-left text-slate-200">
                    <h1 className="mb-2 text-5xl font-bold text-slate-600 dark:text-slate-200">Fashion Modeling</h1>
                    <p className="mb-4 text-slate-600 dark:text-slate-200">
                        Explore my fashion modeling journey and experiences.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {fashionImages.map((src, index) => (
                            <div key={index} className="w-full">
                                <Image
                                    src={src}
                                    alt={`Fashion Image ${index}`}
                                    width={800}
                                    height={600}
                                    layout="responsive"
                                    objectFit="cover"
                                />
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </Layout>
    );
};

export async function getStaticProps() {
    // Get the file names of images in the fashionpix folder
    const imageFiles = readdirSync(join(process.cwd(), "public/assets/fashionpix"));

    // Create an array of image paths
    const fashionImages = imageFiles.map((file) => `/assets/fashionpix/${file}`);

    return {
        props: {
            fashionImages,
        },
    };
}

export default Fashion;

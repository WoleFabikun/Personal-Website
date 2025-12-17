import PostCard from "@/components/PostCard";
import { motion } from 'framer-motion';

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

const Posts = ({ posts }) => {
    return (
        <>
            <section className="flex flex-row justify-center p-10">
                <p className="mt-1 text-base dark:text-slate-200 text-blue-600">{`Things I\'ve written.`}</p>
            </section>

            <motion.section 
                className="grid gap-5 grid-col-1 md:grid-cols-1 lg:grid-cols-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ staggerChildren: 0.2 }}
            >
                {posts.map((post, index) => (
                    <motion.div key={index} variants={cardVariants}>
                        <PostCard post={post} />
                    </motion.div>
                ))}
            </motion.section>
        </>
    );
}

export default Posts;
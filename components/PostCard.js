import Link from 'next/link';
import { ArrowRightIcon } from '@radix-ui/react-icons'

export default function PostCard(props) {
    const { post: { frontmatter: { title, date, description }, slug } } = props;

    return (
        <Link href={`posts/${slug}`} className="content-end h-full duration-300 ease-in-out delay-150 border border-gray-700 rounded-lg dark:shadow-md dark:drop-shadow-lg shadow-gray-900/100 border-zinc-100/10 bg-[#eeeef3] dark:bg-transparent dark:hover:border-zinc-200/50 dark:hover:inner-shadow hover:transition hover:-translate-y-2 hover:scale-200">
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-slate-200 text-blue-600">{title}</h5>
                <span className="items-end block mt-2 text-lg font-semibold dark:text-slate-200 text-blue-600">
                    {date}
                </span>
                <p className="mb-3 font-normal dark:text-slate-200 text-blue-600">
                    {description}
                </p>
            </div>
        </Link>
    );
}

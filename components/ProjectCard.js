import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import StackCard from '@/components/StackCard'

export default function ProjectCard(props) {

    const { project: { frontmatter: { title, date, description, link, button, stack } } } = props;

    const url = link == '#' ? 'mailto:wole359@gmail.com' : `https://www.` + link;

    const stackList = stack.includes(' — ') ? stack.split(' — ') : stack.split('—');

    return (
        <Link href={url} rel="noopener noreferrer" className="flex content-end h-full duration-300 ease-in-out delay-150 border border-gray-700 rounded-lg shadow-md bg-[#eeeef3] dark:bg-transparent dark:drop-shadow-lg dark:shadow-gray-900/100 border-zinc-100/10 dark:hover:border-zinc-200/50 dark:hover:inner-shadow hover:transition hover:-translate-y-2 hover:scale-105">
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-slate-200 text-blue-600">{title}</h5>
                <span className="items-end block mt-2 text-lg font-semibold dark:text-slate-200 text-blue-600">
                    {date}
                </span>
                <p className="mb-3 font-normal dark:text-slate-200 text-blue-600">
                    {description}
                </p>
                <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-center dark:text-slate-200 text-blue-600 rounded-lg animate-gradient-x">
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="mr-2" />
                    {button}
                </span>
                <div className="flex flex-row flex-wrap gap-2 mt-10 dark:text-slate-200 text-blue-600">
                    {stackList.map((stackItem, index) => <StackCard key={index} stack={stackItem.trim()} />)}
                </div>
            </div>
        </Link>
    );
}
import { useRouter } from 'next/router';
import Link from 'next/link';

import ThemeToggle from './ThemeToggle.js';

const NavItem = (props) => {
    const location = useRouter().pathname;
    const active = location == props.link;

    const isContact = props.link == '/contact';

    if (isContact) {
        return (
            <a href="mailto:wole359@gmail.com"  className="pt-2 font-sans text-xl cursor-pointer hover:underline dark:hover:decoration-slate-200 hover:decoration-slate-600 hover:underline-offset-8 hover:decoration-3 dark:text-slate-200 text-slate-600">
                {props.title}
            </a>
        )
    }

    return (
        <Link href={active ? '#' : props.link}  className="pt-2 font-sans text-xl cursor-pointer hover:underline dark:hover:decoration-slate-200 hover:decoration-slate-600 hover:underline-offset-8 hover:decoration-3 dark:text-slate-200 text-slate-600">
            {props.title}
        </Link>
    );
}

const Navigation = () => {

    return (
        <nav className="flex flex-row justify-between w-screen px-5 py-5 mx-auto font-sans text-lg font-normal leading-normal text-left break-words align-middle sm:mx-0 max-w-prose sm:max-w-none text-slategrey-50 subpixel-antialiase dark:text-slate-100 text-slate-600">
            <section className="flex flex-row justify-center gap-2 flex-nowrap">
                <NavItem title={'Home'} link={'/'} />
            </section>
            <section className="flex flex-row justify-center gap-7 flex-nowrap">
                <section className="flex flex-row justify-center gap-5 flex-nowrap">
                    {/* <NavItem title={'Uses'} link={'/uses'} /> */}
                    <NavItem title={'Projects'} link={'/projects'} />
                    <NavItem title={'Resume'} link={'/assets/text/Fabikun_Oluwole_2024.pdf'} />
                    <NavItem title={'Blogs'} link={'/posts'} />
                    <NavItem title={'Barbershop'} link={'https://www.instagram.com/wolescuts/'} />
                    <NavItem title={'Fashion'} link={'/fashion'} />
                    <NavItem title={'Contact'} link={'/contact'} />
                </section>
                <section className="flex flex-row justify-center gap-10 flex-nowrap">
                    <ThemeToggle />
                </section>
            </section>

        </nav>
    )
}

export default Navigation;
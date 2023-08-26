import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { HamburgerMenuIcon, ExitIcon } from '@radix-ui/react-icons';
import ThemeToggle from './ThemeToggle.js';

const NavItem = (props) => {
    const location = useRouter().pathname;
    const active = location == props.link;

    const isContact = props.link == '/contact';

    if (isContact) {
        return (
            <a href="mailto:wole359@gmail.com" className="pt-2 font-sans text-xl cursor-pointer hover:underline dark:hover:decoration-slate-200 hover:decoration-slate-600 hover:underline-offset-8 hover:decoration-3 dark:text-slate-200 text-slate-600">
                {props.title}
            </a>
        );
    }

    return (
        <Link href={active ? '#' : props.link} className="pt-2 font-sans text-xl cursor-pointer hover:underline dark:hover:decoration-slate-200 hover:decoration-slate-600 hover:underline-offset-8 hover:decoration-3 dark:text-slate-200 text-slate-600">
            {props.title}
        </Link>
    );
};

const Hamburger = ({ open, toggle }) => {
    return (
        <div onClick={toggle} className="md:hidden cursor-pointer">
            {open ? <ExitIcon className="cursor-pointer" /> : <HamburgerMenuIcon className="cursor-pointer" />}
        </div>
    );
};

const MobileMenu = () => {
    return (
        <div className="flex flex-col items-center">
            <NavItem title={'Home'} link={'/'} />
            <NavItem title={'Projects'} link={'/projects'} />
            <NavItem title={'Resume'} link={'/assets/text/Fabikun_Oluwole_2024.pdf'} />
            <NavItem title={'Blogs'} link={'/posts'} />
            <NavItem title={'Barbershop'} link={'https://www.instagram.com/wolescuts/'} />
            <NavItem title={'Contact'} link={'/contact'} />
        </div>
    );
};

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const router = useRouter();

    return (
        <nav className="flex flex-row justify-between w-screen px-5 py-5 mx-auto font-sans text-lg font-normal leading-normal text-left break-words align-middle sm:mx-0 max-w-prose sm:max-w-none text-slategrey-50 subpixel-antialiase dark:text-slate-100 text-slate-600">
            <section className="flex flex-row justify-center gap-2 flex-nowrap">
                <NavItem title={'Home'} link={'/'} />
            </section>

            {/* Hamburger Menu Icon */}
            <section className="md:hidden z-10 flex flex-row justify-center gap-2 py-3 flex-nowrap">
                <Hamburger open={isMenuOpen} toggle={toggleMenu} />
            </section>

            {/* Mobile Menu */}
            <div classname= {!isMenuOpen ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                {isMenuOpen && <MobileMenu />}
            </div>

            {/* Navigation Items */}
            <section className={`hidden md:flex flex-row justify-center gap-7 flex-nowrap sm:${isMenuOpen ? 'block' : 'hidden'}`}>
                <section className="flex flex-row justify-center gap-5 flex-nowrap">
                    {/* (NavItems) */}
                    <NavItem title={'Projects'} link={'/projects'} />
                    <NavItem title={'Resume'} link={'/assets/text/Fabikun_Oluwole_2024.pdf'} />
                    <NavItem title={'Blogs'} link={'/posts'} />
                    <NavItem title={'Barbershop'} link={'https://www.instagram.com/wolescuts/'} />
                    <NavItem title={'Fashion'} link={'/fashion'} />
                    <NavItem title={'Contact'} link={'/contact'} />
                </section>
            </section>

            {/* Toggle Theme */}
            <section className="flex flex-row justify-center gap-10 flex-nowrap">
                <ThemeToggle />
            </section>
        </nav>
    );
};

export default Navigation;

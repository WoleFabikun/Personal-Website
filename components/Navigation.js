import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { HamburgerMenuIcon, ExitIcon } from '@radix-ui/react-icons';
import ThemeToggle from './ThemeToggle.js';
import Robot from "../public/favicon_io/favicon-32x32.png";

const NavItem = (props) => {
    const location = useRouter().pathname;
    const active = location === props.link;

    const isContact = props.link === '/contact';

    if (isContact) {
        return (
            <a href="mailto:wole359@gmail.com" className="pt-2 my-2 backdrop:font-sans text-3xl cursor-pointer hover:underline dark:hover:decoration-slate-200 hover:decoration-slate-600 hover:underline-offset-8 hover:decoration-3 dark:text-slate-200 text-black">
                {props.title}
            </a>
        );
    }

    if (props.link.startsWith('http') || props.link.startsWith('www')) {
        // If the link starts with 'http' or 'www', open in a new tab/window
        return (
            <a href={props.link} target="_blank" rel="noopener noreferrer" className="pt-2 my-2 font-sans text-3xl cursor-pointer hover:underline dark:hover:decoration-slate-200 hover:decoration-slate-600 hover:underline-offset-8 hover:decoration-3 dark:text-slate-200 text-black">
                {props.title}
            </a>
        );
    }

    return (
        <Link href={active ? '#' : props.link} className="pt-2 my-2 font-sans text-3xl cursor-pointer hover:underline dark:hover:decoration-slate-200 hover:decoration-slate-600 hover:underline-offset-8 hover:decoration-3 dark:text-slate-200 text-black">
            {props.title}
        </Link>
    );
};

const Hamburger = ({ open, toggle, iconSize }) => {
    return (
        <div onClick={toggle} className="cursor-pointer">
            {open ? (
                <ExitIcon className="cursor-pointer" style={{ width: iconSize, height: iconSize }} />
            ) : (
                <HamburgerMenuIcon className="cursor-pointer" style={{ width: iconSize, height: iconSize }} />
            )}
        </div>
    );
};

const MobileMenu = () => {
    return (
        <div className="flex flex-col items-center">
            <NavItem title={'Home'} link={'/'} className= "text-slate-200"/>
            <NavItem title={'Projects'} link={'/projects'} />
            <NavItem title={'Resume'} link={'/assets/text/Fabikun_Oluwole_2024.pdf'} />
            <NavItem title={'Blogs'} link={'/posts'} />
            <NavItem title={'Barbershop'} link={'https://www.instagram.com/wolescuts/'} />
            <NavItem title={'Modeling'} link={'/fashion'} />
            <NavItem title={'Contact'} link={'/contact'} />
        </div>
    );
};

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="flex flex-row justify-between w-screen px-5 py-5 mx-auto font-sans font-normal leading-normal text-left break-words align-middle sm:mx-0 max-w-prose sm:max-w-none text-slategrey-50 subpixel-antialiase dark:text-slate-100 text-slate-600">
            <section className="flex flex-row justify-center gap-2 flex-nowrap">
                <NavItem title={'Home'} link={'/'} />
            </section>

            {/* Hamburger Menu Icon */}
            <button className="md:hidden z-50 flex flex-row justify-center gap-2 py-6 flex-nowrap dark:text-slate-100 text-black">
                <Hamburger open={isMenuOpen} toggle={toggleMenu} iconSize="1.4rem" />
            </button>

            {/* Mobile Menu */}
            <div className={!isMenuOpen ? 'hidden' : 'fixed z-10 top-0 left-0 w-full h-screen bg-blue-600 flex flex-col justify-center items-center'}>
                {isMenuOpen && <MobileMenu />}
            </div>

            {/* Navigation Items */}
            <section className={`hidden md:flex flex-row justify-center gap-7 flex-nowrap sm:hidden`}>
                <section className="flex flex-row justify-center gap-5 flex-nowrap">
                    {/* (NavItems) */}
                    <NavItem title={'Projects'} link={'/projects'} />
                    <NavItem title={'Resume'} link={'/assets/text/Fabikun_Oluwole_2024.pdf'} />
                    <NavItem title={'Blogs'} link={'/posts'} />
                    <NavItem title={'Barbershop'} link={'https://www.instagram.com/wolescuts/'} />
                    <NavItem title={'Modeling'} link={'/fashion'} />
                    <NavItem title={'Contact'} link={'/contact'} />
                </section>
            </section>

            {/* Toggle Theme */}
            <section className="flex flex-row justify-center z-50 gap-10 flex-nowrap ">
                <ThemeToggle />
            </section>
        </nav>
    );
};

export default Navigation;

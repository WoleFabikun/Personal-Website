import Link from 'next/link';

const Footer = () => {
    return (
        <section className="flex flex-row items-center justify-between w-full h-24 px-2 mt-10 border-t sm:px-5 white dark:text-slate-200 text-slate-900 border-slate-400/30">
            {`© ${new Date().getFullYear()} Oluwole Fabikun`} 
            <a href="/assets/text/README.html" className="hover:underline underline-offset-4">
                <> README.md </>
            </a>
        </section>
    );
}

export default Footer;

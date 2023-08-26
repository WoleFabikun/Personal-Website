import { SunIcon, MoonIcon } from '@radix-ui/react-icons';
import { useContext, useEffect } from 'react';
import { ThemeContext } from '@/providers/ThemeProvider';

export default function ThemeToggle() {
    const { theme, setTheme } = useContext(ThemeContext);

    useEffect(() => {
        const storedTheme = sessionStorage.getItem('theme');
        if (storedTheme) {
            setTheme(storedTheme);
        }
    });   

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        sessionStorage.setItem('theme', newTheme);
    };

    const isDarkMode = theme === 'dark';

    return (
        <button className='flex items-center pt-2 transition duration-300 ease-in-out delay-100 transform cursor-pointer scale-120 hover:scale-125 hover:transition' onClick={toggleTheme}>
            {isDarkMode ? <SunIcon className="text-slate-200" /> : <MoonIcon className="text-black" />}
        </button>
    );
}

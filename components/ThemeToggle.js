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

    const iconSize = '1.4rem'; // Adjust the icon size here

    return (
        <button
            className='flex items-center pt-2 transition duration-300 ease-in-out delay-100 transform cursor-pointer scale-120 hover:scale-125 hover:transition'
            onClick={toggleTheme}
            style={{ padding: '0.5rem' }}
        >
            {isDarkMode ? <SunIcon className="text-slate-200" style={{ width: iconSize, height: iconSize }} /> : <MoonIcon className="text-black" style={{ width: iconSize, height: iconSize }} />}
        </button>
    );
}



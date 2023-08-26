import React, { useState } from 'react';
import Image from 'next/image';

export default function SkillCard({ skill }) {
    const { icon, title, description } = skill.frontmatter;
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const descriplist = description.split('—');

    return (
        <div
            className={`flex flex-col items-center justify-center p-2 border rounded-md shadow-md bg-[#eeeef3] dark:bg-transparent dark:drop-shadow-lg dark:shadow-gray-900/100 border-zinc-100/10 dark:hover:border-zinc-200/50 dark:hover:inner-shadow hover:transition ${isHovered ? 'hover:scale-105' : 'hover:scale-100'}`}
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
        >
            <div className="w-8 h-8 mb-2">
                <Image src={icon} alt={`Icon for ${title}`} width={32} height={32} />
            </div>
            <h5 className="mb-1 text-lg font-semibold dark:text-slate-200 text-blue-600">{title}</h5>
            {isHovered && (
                <div className="mt-2 dark:text-slate-200 text-blue-600">
                    {descriplist.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                </div>
            )}
        </div>
    );
}

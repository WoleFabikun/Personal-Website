import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* Primary Meta Tags */}
                <meta name="title" content="David Oduneye" />
                <meta
                    name="description"
                    content="Wole Fabikun's portfolio website and blog. Senior Computer Science major at the University of Massachusetts Amherst."
                />
                {/* ... Other meta tags ... */}
            </Head>
            <body className="overflow-x-hidden dark:pattern-dots-sm dark:animated dark:bg-[#10101a] bg-[#f5f5f5]">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

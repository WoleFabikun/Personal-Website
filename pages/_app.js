import "../styles/globals.scss";

import { ThemeProvider } from "@/providers/ThemeProvider";

const MyApp = ({ Component, pageProps }) => {

	return (
		<ThemeProvider>
			<Component {...pageProps} />
		</ThemeProvider>
	);
};

export default MyApp;

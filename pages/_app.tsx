import { ThemeProvider } from "next-themes";
import "tailwindcss/tailwind.css";
import { Navbar } from "../components/Header";

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider attribute="class">
			<Navbar />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;

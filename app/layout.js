import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "/public/css/style.css";
import PluginsInitializer from "/app/components/clients/PluginsInitializer";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = {
	title: "Wekomarce - Multipurpose eCommerce",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<PluginsInitializer />
				{/* Header goes here */}

				{children}

				{/* Footer goes here */}
			</body>
		</html>
	);
}

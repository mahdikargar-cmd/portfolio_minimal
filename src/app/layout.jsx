import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "رزومه من",
    description: "ساخته شده با عشق",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" dir={"rtl"}>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <ClientLayout />
        </body>
        </html>
    );
}

import type { Metadata } from "next";
import { DM_Serif_Display, DM_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const serif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
});

const mono = DM_Mono({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Smaran Voora",
  description: "Full stack solutions expert building solutions to problems you don't have yet.",
  openGraph: {
    title: "Smaran Voora",
    description: "Full stack solutions expert building solutions to problems you don't have yet.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${mono.variable}`}>
      <body className="bg-[#F8F6F1] text-[#111] antialiased">
        <Nav />
        {children}
      </body>
    </html>
  );
}

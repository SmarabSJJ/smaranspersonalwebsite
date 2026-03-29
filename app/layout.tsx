import type { Metadata } from "next";
import { Sora, IBM_Plex_Sans, Geist } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const sora = Sora({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-headline",
});

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-label",
});

export const metadata: Metadata = {
  title: "Smaran Voora",
  description: "Full stack solutions engineer building solutions to problems you don't have yet.",
  openGraph: {
    title: "Smaran Voora",
    description: "Full stack solutions engineer building solutions to problems you don't have yet.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable} ${ibmPlexSans.variable} ${geist.variable}`}>
      <body className="bg-[#0D1117] text-[#E6EDF3] antialiased">
        <Nav />
        {children}
      </body>
    </html>
  );
}

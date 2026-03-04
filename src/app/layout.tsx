import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import RootLayoutClient from "@/components/layout/RootLayoutClient";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kefoueg Frank | Full-Stack Engineer & AI Integration Specialist",
  description:
    "Portfolio of Kefoueg Frank, a Full-Stack Engineer specializing in production-ready systems, AI integration, and high-performance web applications.",
  keywords: [
    "Kefoueg Frank",
    "Full-Stack Engineer",
    "AI Integration",
    "Next.js Developer",
    "Portfolio",
    "Software Engineer Cameroon",
  ],
  authors: [{ name: "Kefoueg Frank" }],
  openGraph: {
    title: "Kefoueg Frank | Full-Stack Engineer",
    description:
      "Building production-ready systems and AI-powered experiences.",
    url: "https://kefoueg-frank.vercel.app",
    siteName: "Kefoueg Frank Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kefoueg Frank | Full-Stack Engineer",
    description:
      "Building production-ready systems and AI-powered experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#010308] text-white`}
      >
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}

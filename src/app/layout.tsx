import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#07111F",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://victorbabawale.dev"),
  title: "Babawale Victor Ayomide — Embedded Systems Engineer",
  description:
    "Embedded Systems Engineer focused on firmware, microcontrollers, IoT, hardware integration, testing, and real-world systems. University of Ilorin Computer Engineering candidate.",
  keywords: [
    "Babawale Victor Ayomide",
    "Embedded Systems Engineer",
    "Firmware Engineer",
    "Microcontrollers",
    "FreeRTOS",
    "C/C++",
    "Hardware-Software Co-Design",
    "IoT",
    "Nigeria",
  ],
  authors: [{ name: "Babawale Victor Ayomide" }],
  openGraph: {
    title: "Babawale Victor Ayomide — Embedded Systems Engineer",
    description: "I build systems where software meets hardware.",
    url: "https://victorbabawale.dev",
    siteName: "Victor Babawale Portfolio",
    images: [
      {
        url: "/assets/victor-hero.jpg",
        width: 840,
        height: 1280,
        alt: "Babawale Victor Ayomide — Embedded Systems Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-canvas text-slate-primary font-sans antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}

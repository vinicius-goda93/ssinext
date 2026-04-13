import type { Metadata } from "next";
import { Source_Sans_3, Michroma } from "next/font/google";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const michroma = Michroma({
  variable: "--font-eurostile",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Structural Systems Inc. — Residential",
  description: "Foundation repair and structural solutions in Hawai'i.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${michroma.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}

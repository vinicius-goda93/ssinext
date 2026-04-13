import type { Metadata } from "next";
import { Inter, Exo_2 } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const exo2 = Exo_2({
  variable: "--font-eurostile",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Structural Systems Inc. — Residential",
  description: "Foundation repair and structural solutions in Hawai'i.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${exo2.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}

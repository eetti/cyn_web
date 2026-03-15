import type { Metadata } from "next";
import { League_Spartan, Space_Grotesk } from "next/font/google";

import "./globals.css";

const displayFont = League_Spartan({
  subsets: ["latin"],
  variable: "--font-display",
});

const bodyFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Festivent Easter Landing",
  description:
    "A Next.js festival landing page adapted from the provided Figma concept.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>
        {children}
      </body>
    </html>
  );
}

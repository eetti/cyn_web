import type { Metadata } from "next";

import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}

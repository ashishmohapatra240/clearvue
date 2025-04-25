import type { Metadata } from "next";
import { Manrope, DM_Serif_Text } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Text({
  variable: "--font-dm-serif",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ClearVue - Premium Eyewear",
  description: "Discover elegant and modern eyewear at ClearVue",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${dmSerif.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

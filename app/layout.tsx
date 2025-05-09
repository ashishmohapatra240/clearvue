import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { ToastProvider } from './hooks/useToast';
const justSans = localFont({
  src: [
    {
      path: "../public/fonts/JUST Sans Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/JUST Sans Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/JUST Sans ExLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/JUST Sans Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/JUST Sans SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/JUST Sans Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/JUST Sans ExBold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-just-sans",
});

const heuvelGrotesk = localFont({
  src: [
    {
      path: "../public/fonts/HeuvelGrotesk-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/HeuvelGrotesk-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/HeuvelGrotesk-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
    {
      path: "../public/fonts/HeuvelGrotesk-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/HeuvelGrotesk-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/HeuvelGrotesk-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/HeuvelGrotesk-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/HeuvelGrotesk-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../public/fonts/HeuvelGrotesk-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/HeuvelGrotesk-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/HeuvelGrotesk-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/HeuvelGrotesk-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/HeuvelGrotesk-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/HeuvelGrotesk-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/HeuvelGrotesk-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-heuvel",
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
    <html lang="en" className="light">
      <body
        className={`${justSans.variable} ${heuvelGrotesk.variable} antialiased`}
      >
        <ToastProvider>
          <Navbar />
          {children}
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}

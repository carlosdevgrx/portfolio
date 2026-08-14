import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CursorGlow } from "./components/CursorGlow";
import { EasterEgg } from "./components/EasterEgg";
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
  title: "Carlos — Desarrollador Frontend",
  description:
    "Portfolio personal de Carlos, desarrollador frontend especializado en React, TypeScript e IA.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative min-h-full flex flex-col">
        <CursorGlow />
        <EasterEgg />
        <div className="relative z-10 flex flex-1 flex-col">{children}</div>
      </body>
    </html>
  );
}

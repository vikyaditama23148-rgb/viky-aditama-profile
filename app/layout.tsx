import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AiFab from "@/components/AiFab";

export const metadata: Metadata = {
  title: "Viky Aditama — Digital Identity & Archive",
  description:
    "Educator, researcher, technologist and cultural advocate. Building meaningful experiences where culture, pedagogy, scientific inquiry, and digital engineering converge.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&family=Syne:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface-base font-body-md text-body-md text-text-primary antialiased selection:bg-primary-container selection:text-on-primary-container">
        <Header />
        <main className="w-full pt-20 bg-surface-base min-h-screen">
          {children}
        </main>
        <AiFab />
        <Footer />
      </body>
    </html>
  );
}

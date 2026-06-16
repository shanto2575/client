import dns from "node:dns";
dns.setServers(['1.1.1.1', '1.0.0.1']);

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "shanto | Premium  Ecosystem",
  description: "Explore the next generation of gadgets and software ecosystem.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body 
        className={`${inter.className} min-h-screen flex flex-col bg-[#ebdcc9] text-[#2c221e] selection:bg-[#dfcbaf] selection:text-[#2c221e] relative overflow-x-hidden`}
      >
        <header className="relative z-50 border-b border-[#dfcbaf] bg-[#ebdcc9]">
          <Navbar />
        </header>
        <main className="flex-1  w-full mx-auto  py-8 relative z-10">
          {children}
        </main>
        <footer className="relative z-10 border-t border-[#dfcbaf] bg-[#ebdcc9]">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
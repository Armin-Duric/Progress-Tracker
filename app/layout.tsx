import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Progress Tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full h-full">
      <body className={inter.className}>
        <div className="">Profile section</div>
        <nav className="">
          <Navbar />
        </nav>
        <div className="">{children}</div>

        <div className="">Learning Section</div>
        <footer className="">
          <Footer />
        </footer>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LUCID",
  description:
    "Lucid Motors' official Saudi Arabian website showcases their cutting-edge electric vehicles, emphasizing luxury, innovation, and sustainability. Visitors can explore models like the Lucid Air and Lucid Gravity, discover advanced technologies, and learn about performance, range, and design. The site highlights Lucid’s commitment to redefining mobility with a seamless blend of elegance and efficiency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

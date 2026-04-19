import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ParticleWave from "../components/ParticleWave";

export const metadata: Metadata = {
  title: "NSC Star Connect",
  description: "Internet Cepat Sampai Pelosok Negeri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-black text-white">
        <Navbar />
        <ParticleWave />
        {children}
        <Footer />
      </body>
    </html>
  );
}
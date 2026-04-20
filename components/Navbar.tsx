"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const pathname = usePathname();
  const isBisnis = pathname === "/bisnis";
  const isHome = pathname === "/";
  const isJelajah = pathname === "/jelajah";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isSidebarOpen]);

  return (
    <>
      {/* --- BANNER PROMO (Hanya Muncul di Halaman Home saat di-scroll) --- */}
      {isHome && (
        <div
          className={`fixed left-0 top-0 z-[60] flex h-[46px] w-full items-center justify-center bg-white px-4 transition-transform duration-500 ease-in-out ${
            isScrolled ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <p className="text-center text-[9px] font-bold text-black sm:text-[10px] md:text-xs">
            Rp3.800.000 <span className="font-normal line-through">Rp4.750.000</span> untuk Kit Mini dan Rp4.720.000 <span className="font-normal line-through">Rp5.900.000</span> untuk Kit Standar. Pesan sebelum 23/4.
          </p>
        </div>
      )}

      {/* --- NAVBAR UTAMA --- */}
      <nav
        className={`fixed z-40 flex w-full items-center justify-between px-8 py-4 transition-all duration-500 ${
          isScrolled 
            ? "bg-[#111111]/80 backdrop-blur-md border-b border-white/10" 
            : "bg-transparent"
        } ${isScrolled && isHome ? "top-[46px]" : "top-0"}`}
      >
        <div className="flex items-center gap-10">
          <Link href="/" className="text-2xl font-bold tracking-[0.2em] text-white uppercase">
            NSC
          </Link>
          <div className="hidden space-x-6 lg:flex">
            {/* LOGIKA MENU KIRI DINAMIS & UNDERLINE AKTIF */}
            {isBisnis ? (
              <>
                <Link href="#" className="text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-70">
                  Lokasi Tetap
                </Link>
                <Link href="#" className="text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-70">
                  Maritim
                </Link>
                <Link href="#" className="text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-70">
                  Aviasi
                </Link>
                <Link href="#" className="text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-70">
                  Mobile
                </Link>
              </>
            ) : (
              <>
                <Link href="/" className={`text-[11px] font-bold uppercase tracking-[0.2em] ${isHome ? "text-white border-b-2 border-white pb-0.5" : "text-white transition-opacity hover:opacity-70"}`}>
                  Residensial
                </Link>
                <Link href="/jelajah" className={`text-[11px] font-bold uppercase tracking-[0.2em] ${isJelajah ? "text-white border-b-2 border-white pb-0.5" : "text-white transition-opacity hover:opacity-70"}`}>
                  Jelajah
                </Link>
              </>
            )}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden items-center gap-4 md:flex">
            <Link 
              href="/" 
              className={`text-[11px] font-bold uppercase tracking-[0.2em] ${!isBisnis ? "text-white border-b-2 border-white pb-0.5" : "text-gray-400 transition-colors hover:text-white"}`}
            >
              Personal
            </Link>
            <span className="text-gray-500 font-light">|</span>
            <Link 
              href="/bisnis" 
              className={`text-[11px] font-bold uppercase tracking-[0.2em] ${isBisnis ? "text-white border-b-2 border-white pb-0.5" : "text-gray-400 transition-colors hover:text-white"}`}
            >
              Bisnis
            </Link>
          </div>
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="text-white hover:opacity-70 transition-opacity"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* OVERLAY GELAP UNTUK SIDEBAR */}
      <div 
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>

      {/* SIDEBAR MENU MOBILE */}
      <div
        className={`fixed right-0 top-0 z-50 h-screen w-full bg-black p-8 text-white transition-transform duration-500 ease-in-out sm:w-[300px] ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } overflow-y-auto`}
      >
        <div className="mb-10 flex justify-end">
          <button 
            onClick={() => setIsSidebarOpen(false)}
            className="text-gray-400 transition-colors hover:text-white"
          >
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col">
          
          {/* MENU PERSONAL / BISNIS */}
          <div className="flex items-center gap-4 border-b border-gray-800 pb-6 mb-6">
            <Link 
              href="/" 
              onClick={() => setIsSidebarOpen(false)}
              className={`text-[16px] font-bold uppercase tracking-[0.2em] ${!isBisnis ? "text-white border-b-2 border-white pb-0.5" : "text-gray-400 transition-colors hover:text-white"}`}
            >
              Personal
            </Link>
            <span className="text-gray-500 font-light">|</span>
            <Link 
              href="/bisnis" 
              onClick={() => setIsSidebarOpen(false)}
              className={`text-[16px] font-bold uppercase tracking-[0.2em] ${isBisnis ? "text-white border-b-2 border-white pb-0.5" : "text-gray-400 transition-colors hover:text-white"}`}
            >
              Bisnis
            </Link>
          </div>

          {/* MENU HALAMAN DINAMIS */}
          <div className="flex flex-col gap-6 border-b border-gray-800 pb-6 mb-6">
            {isBisnis ? (
              <>
                <Link href="#" className="text-[16px] font-bold uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-70">Lokasi Tetap</Link>
                <Link href="#" className="text-[16px] font-bold uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-70">Maritim</Link>
                <Link href="#" className="text-[16px] font-bold uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-70">Aviasi</Link>
                <Link href="#" className="text-[16px] font-bold uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-70">Mobile</Link>
              </>
            ) : (
              <>
                <Link href="/" onClick={() => setIsSidebarOpen(false)} className={`text-[16px] font-bold uppercase tracking-[0.2em] ${isHome ? "text-white border-b-2 border-white pb-0.5 w-max" : "text-white transition-opacity hover:opacity-70"}`}>Residensial</Link>
                <Link href="/jelajah" onClick={() => setIsSidebarOpen(false)} className={`text-[16px] font-bold uppercase tracking-[0.2em] ${isJelajah ? "text-white border-b-2 border-white pb-0.5 w-max" : "text-white transition-opacity hover:opacity-70"}`}>Jelajah</Link>
              </>
            )}
          </div>

          <div className="flex flex-col border-b border-gray-800 pb-6">
            <button className="flex items-center gap-3 text-[13px] font-bold text-gray-300 transition-colors hover:text-white">
              ID
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col border-b border-gray-800 pb-6 pt-6">
            <Link href="#" className="text-[16px] font-bold uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-70">Masuk</Link>
          </div>
          <div className="flex flex-col border-b border-gray-800 pb-6 pt-6">
            <Link href="#" className="text-[16px] font-bold uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-70">Pusat Bantuan</Link>
          </div>
          <div className="flex flex-col border-b border-gray-800 pb-6 pt-6">
            <Link href="#" className="text-[16px] font-bold uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-70">Peta Ketersediaan</Link>
          </div>
          <div className="flex flex-col border-b border-gray-800 pb-6 pt-6">
            <Link href="#" className="text-[16px] font-bold uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-70">Spesifikasi</Link>
          </div>
          <div className="flex flex-col border-b border-gray-800 pb-6 pt-6">
            <Link href="#" className="text-[16px] font-bold uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-70">Paket Layanan</Link>
          </div>
          <div className="flex flex-col border-b border-gray-800 pb-6 pt-6">
            <Link href="#" className="text-[16px] font-bold uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-70">Paduan Video</Link>
          </div>
          <div className="flex flex-col border-b border-gray-800 pb-6 pt-6">
            <Link href="#" className="text-[16px] font-bold uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-70">Teknologi</Link>
          </div>
          <div className="flex flex-col border-b border-gray-800 pb-6 pt-6">
            <Link href="#" className="text-[16px] font-bold uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-70">Pembaruan</Link>
          </div>
          <div className="flex flex-col border-b border-gray-800 pb-6 pt-6">
            <Link href="#" className="text-[16px] font-bold uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-70">Customer Stories</Link>
          </div>
        </div>
      </div>
    </>
  );
}
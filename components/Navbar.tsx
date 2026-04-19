"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Globe, ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('ID');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full px-6 py-4 z-50 flex justify-between items-center bg-black/50 backdrop-blur-md border-b border-white/10">

      <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
        <img 
          src="/nsclogo.svg" 
          alt="NSC Logo" 
          className="h-8 md:h-10 w-auto object-contain" 
        />
      </Link>
      
      <button 
        className="md:hidden text-white focus:outline-none hover:text-nsc-orange transition-colors"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <div className="hidden md:flex items-center gap-8 text-xs font-bold tracking-widest uppercase">
        <Link href="/tentang-kami" className="hover:text-nsc-orange transition-colors">
          Tentang Kami
        </Link>
        <a href="#" className="hover:text-nsc-orange transition-colors">Produk</a>
        <a href="#" className="hover:text-nsc-orange transition-colors">Karier</a>
        <a href="#" className="hover:text-nsc-orange transition-colors">Berita</a>

        <div className="relative flex items-center gap-1 border-l border-white/30 pl-8">
          <button 
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="flex items-center gap-2 hover:text-nsc-orange transition-colors uppercase cursor-pointer focus:outline-none"
          >
            <Globe size={16} className="text-white" />
            <span>{currentLang}</span>
            <ChevronDown size={12} className={`transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
          </button>

          {isLangOpen && (
            <div className="absolute top-full mt-4 right-0 bg-black/90 backdrop-blur-xl border border-white/10 rounded-sm py-2 w-24 shadow-2xl animate-in fade-in zoom-in duration-200">
              <button 
                onClick={() => { setCurrentLang('ID'); setIsLangOpen(false); }}
                className="w-full px-4 py-2 text-left hover:bg-nsc-orange hover:text-black transition-colors"
              >
                ID
              </button>
              <button 
                onClick={() => { setCurrentLang('EN'); setIsLangOpen(false); }}
                className="w-full px-4 py-2 text-left hover:bg-nsc-orange hover:text-black transition-colors"
              >
                EN
              </button>
            </div>
          )}
        </div>

        <button className="px-6 py-2 bg-nsc-orange text-black hover:bg-[#d9731b] transition-colors rounded-sm">
          Hubungi Kami
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full h-screen bg-black/95 backdrop-blur-xl flex flex-col items-center py-12 gap-8 md:hidden z-50 text-sm font-bold tracking-widest uppercase">
          <Link href="/tentang-kami" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-nsc-orange transition-colors">
            Tentang Kami
          </Link>
          <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-nsc-orange transition-colors">Produk</a>
          <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-nsc-orange transition-colors">Karier</a>
          <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-nsc-orange transition-colors">Berita</a>

          <div className="flex items-center gap-6 border-t border-white/20 pt-8 w-1/2 justify-center mt-4">
            <Globe size={20} className="text-white" />
            <button 
              onClick={() => { setCurrentLang('ID'); setIsMobileMenuOpen(false); }}
              className={`${currentLang === 'ID' ? 'text-nsc-orange' : 'text-white'} hover:text-nsc-orange transition-colors`}
            >
              ID
            </button>
            <span className="text-white/30">|</span>
            <button 
              onClick={() => { setCurrentLang('EN'); setIsMobileMenuOpen(false); }}
              className={`${currentLang === 'EN' ? 'text-nsc-orange' : 'text-white'} hover:text-nsc-orange transition-colors`}
            >
              EN
            </button>
          </div>

          <button className="mt-8 px-10 py-4 bg-nsc-orange text-black hover:bg-[#d9731b] transition-colors rounded-sm w-3/4 max-w-xs">
            Hubungi Kami
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
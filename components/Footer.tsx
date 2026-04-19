import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-black px-6 md:px-24 py-16 border-t border-white/10">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <div className="flex flex-wrap gap-x-8 gap-y-4 text-[11px] font-bold uppercase tracking-widest text-white">
            <a href="#" className="hover:text-nsc-orange transition-all">Karier</a>
            <a href="#" className="hover:text-nsc-orange transition-all">Mitra Resmi</a>
            <a href="#" className="hover:text-nsc-orange transition-all">Privasi & Hukum</a>
            <a href="#" className="hover:text-nsc-orange transition-all">Preferensi Privasi</a>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <span className="text-[11px] font-bold uppercase tracking-widest text-white">Hubungi Kontak Person Kami</span>
            <button className="px-10 py-2 bg-transparent border border-white text-white hover:bg-white hover:text-black font-bold uppercase tracking-widest text-[11px] transition-all duration-300">
              Hubungi Kami
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-gray-500">
          <div className="flex flex-col md:flex-row items-start">
            <span>Grand Fatmawati Mas Blok I Nomor 108, JL.RS Fatmawati Nomor 20, Kelurahan Cilandak Barat, Kecamatan Cilandak, Kota Jakarta Selatan, Provinsi Daerah Khusus Ibukota Jakarta 12430</span>
          </div>
          
          <div className="text-gray-500">
            <span>Dengan menghubungi kami, Anda menyetujui <span className="text-white">Kebijakan Privasi</span> kami</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
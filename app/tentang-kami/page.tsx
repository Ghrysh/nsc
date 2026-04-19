import React from 'react';

export default function TentangKami() {
  return (
    <main className="w-full min-h-screen text-white font-sans overflow-x-hidden pt-20">
      
      {/* =========================================
          SECTION 1: SEJARAH SINGKAT (Hero Style)
      ========================================= */}
      <section className="relative w-full h-[90vh] flex items-center justify-center bg-black overflow-hidden px-6 md:px-24">
        
        {/* Background Visual ala Starlink: Menggunakan visual yang merepresentasikan Indonesia/Satelit */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=2070&auto=format&fit=crop')" }}
        ></div>
        
        {/* Overlay Gradient agar teks lebih mudah dibaca */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/20 via-transparent to-black"></div>

        <div className="relative z-10 max-w-6xl text-center">
          {/* Header menggunakan font tebal & uppercase ala Starlink */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase mb-10 leading-tight">
            Sejarah Singkat <br /> PT Nusantara Star Connect
          </h1>
          
          {/* Teks Deskripsi sesuai dengan Screenshot NSC */}
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-200 text-base md:text-xl leading-relaxed font-light mb-8">
              PT Nusantara Star Connect (NSC) adalah perusahaan telekomunikasi swasta berbasis-satelit yang memiliki cakupan hingga ke pelosok Indonesia. Kami memulai perjalanan dengan menyediakan layanan konektivitas melalui sistem komunikasi satelit Low Earth Orbit dengan jaringan. Sehingga dapat memberikan kecepatan komunikasi yang lebih tinggi dan memungkinkan transfer data yang lebih cepat.
            </p>
            
            {/* Dekorasi Garis Minimalis */}
            <div className="w-24 h-1 bg-nsc-orange mx-auto"></div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 2: CAKUPAN NASIONAL & INDUSTRI
      ========================================= */}
      <section className="relative w-full flex flex-col md:flex-row bg-[#050505] border-t border-white/5">
        
        <div className="w-full md:w-1/2 h-[50vh] md:h-auto min-h-[600px] relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2072&auto=format&fit=crop')" }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-20 py-24 bg-black">
          <h2 className="text-nsc-orange font-bold uppercase tracking-[0.2em] text-sm mb-4">
            Utilisasi Bandwidth
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold uppercase mb-8 leading-tight">
            Cakupan Wilayah <br /> Nasional
          </h3>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light italic border-l-2 border-nsc-orange pl-6">
            Dengan peningkatan utilisasi bandwidth melalui armada satelit NSC telah mencakup wilayah nasional untuk berbagai industri seperti komunitas wifi, Backhaul Telekomunikasi Seluler, Minyak & Gas, Pertambangan, Perkebunan, Manufaktur, Layanan Publik, Transportasi & Logistik, Maritim dan masih banyak lagi.
          </p>
        </div>
        
      </section>

      {/* =========================================
          SECTION 3: KOMITMEN (image_e3aaa4.jpg)
      ========================================= */}
      <section className="w-full flex flex-col md:flex-row-reverse bg-black">
        <div className="w-full md:w-1/2 h-[50vh] md:h-auto min-h-[500px] relative">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-70"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop')" }}
          ></div>
        </div>
        
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-20 py-20 border-r border-white/5">
          <h2 className="text-3xl md:text-4xl font-bold uppercase mb-8 leading-tight">
            Komitmen Layanan <br /> Terbaik
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed font-light">
            Kami selalu berkomitmen untuk terus menyediakan layanan komunikasi terbaik yang disesuaikan dengan kebutuhan pelanggan, sehingga NSC tumbuh kuat untuk menjadi Penyedia Solusi Komunikasi Satelit Paling Berharga di Indonesia.
          </p>
        </div>
      </section>

      {/* =========================================
          SECTION 5: TEKNOLOGI VSAT (image_e3aade.jpg)
      ========================================= */}
      <section className="relative w-full h-[70vh] flex items-center justify-start px-6 md:px-24 bg-black overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=2128&auto=format&fit=crop')" }}
        ></div>
        
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>

        <div className="relative z-10 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold uppercase mb-8 leading-tight">
            Teknologi VSAT <br /> Handal & Cepat
          </h2>
          <p className="text-gray-200 text-lg md:text-xl leading-relaxed font-light">
            Menggunakan teknologi VSAT, kami menjadi salah satu penyedia internet berbasis satelit di Indonesia yang mampu menyediakan konektivitas yang handal dan cepat di daerah yang sulit dijangkau oleh infrastruktur.
          </p>
        </div>
      </section>

      {/* =========================================
          SECTION 4: VISI & MISI (image_e3ab1d.jpg & image_ed8869.jpg)
      ========================================= */}
      <section className="w-full py-32 px-6 md:px-24 bg-transparent relative overflow-hidden">
        {/* Latar belakang partikel wave akan menembus ke sini karena bg-transparent */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Card Visi */}
          <div className="group bg-[#0a0a0a]/60 backdrop-blur-md border border-white/10 p-12 md:p-16 rounded-sm hover:border-nsc-orange transition-all duration-500">
            <h3 className="text-nsc-orange text-sm font-bold tracking-[0.3em] uppercase mb-6">Visi</h3>
            <p className="text-white text-2xl md:text-3xl font-bold leading-snug uppercase">
              Fokus untuk merevolusi penyedia layanan satelit di Indonesia dengan menyediakan teknologi yang canggih serta solusi inovatif agar kesenjangan digital dapat teratasi.
            </p>
          </div>

          {/* Card Misi */}
          <div className="group bg-[#0a0a0a]/60 backdrop-blur-md border border-white/10 p-12 md:p-16 rounded-sm hover:border-white transition-all duration-500">
            <h3 className="text-gray-500 text-sm font-bold tracking-[0.3em] uppercase mb-6">Misi</h3>
            <p className="text-gray-200 text-2xl md:text-3xl font-bold leading-snug uppercase">
              Memberikan layanan berkualitas dan solusi yang tepat untuk mengatasi kesenjangan digital di Indonesia.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
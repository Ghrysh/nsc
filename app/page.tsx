import React from 'react';

export default function Home() {
  return (
    <main className="w-full min-h-screen text-white font-sans overflow-x-hidden">

      {/* =========================================
          2. HERO SECTION
      ========================================= */}
      <section className="relative w-full h-screen flex items-center justify-center bg-black">
        <div className="absolute inset-0 z-0 bg-cover bg-center opacity-60 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')]"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mt-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight uppercase mb-6 drop-shadow-lg">
            Internet Cepat Sampai <br className="hidden md:block"/> Pelosok Negeri
          </h1>
          <p className="text-base md:text-xl text-gray-200 mb-10 max-w-3xl drop-shadow-md leading-relaxed">
            Kami hadir untuk memberikan layanan konektivitas tanpa batas di seluruh pelosok negeri hingga wilayah terpencil. Melalui satelit, kami berdedikasi untuk selalu memberikan pelayanan terbaik sesuai dengan kebutuhan Anda.
          </p>
          <button className="px-10 py-4 bg-white text-black hover:bg-gray-200 font-bold uppercase tracking-widest rounded-sm transition-all duration-300 w-full sm:w-auto">
            Selengkapnya
          </button>
        </div>
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-0"></div>
      </section>

      {/* =========================================
          3. PRODUCT: RESIDENTIAL
      ========================================= */}
      <section className="relative w-full h-[80vh] flex items-center justify-end px-6 md:px-24 bg-black">
        <div className="absolute inset-0 z-0 bg-cover bg-center opacity-40 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')]"></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-l from-black via-black/80 to-transparent"></div>
        
        <div className="relative z-10 max-w-xl text-right">
          <h2 className="text-4xl md:text-5xl font-bold uppercase mb-6">Residential</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Dengan <span className="font-bold text-white">Akastar</span> di rumah Anda, nikmati internet super cepat tanpa batasan. Streaming video, bermain game, dan bekerja dari rumah akan menjadi lebih lancar daripada sebelumnya. 
            Jadikan rumah Anda pusat konektivitas yang tak tertandingi.
          </p>
          <a href="#" className="text-nsc-orange font-bold uppercase tracking-wider hover:underline decoration-2 underline-offset-4">Pelajari Selengkapnya</a>
        </div>
      </section>

      {/* =========================================
          4. PRODUCT: MOBILE (ROAM)
      ========================================= */}
      <section className="relative w-full h-[80vh] flex items-center justify-start px-6 md:px-24 bg-black">
         <div className="absolute inset-0 z-0 bg-cover bg-center opacity-40 bg-[url('https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=2070&auto=format&fit=crop')]"></div>
         <div className="absolute inset-0 z-0 bg-gradient-to-r from-nsc-navy to-transparent"></div>

         <div className="relative z-10 max-w-xl text-left">
          <h2 className="text-4xl md:text-5xl font-bold uppercase mb-6">Mobile (Roam)</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Tidak perlu lagi khawatir tentang koneksi saat bepergian. Akastar membuat Anda tetap terhubung di mana pun Anda berada. Browsing, streaming, dan komunikasi seluler tak pernah semudah ini, bahkan di tempat-tempat terpencil.
          </p>
          <a href="#" className="text-nsc-orange font-bold uppercase tracking-wider hover:underline decoration-2 underline-offset-4">Pesan Sekarang</a>
        </div>
      </section>

      {/* =========================================
          5. PRODUCT: MARITIME
      ========================================= */}
      <section className="relative w-full h-[80vh] flex items-center justify-end px-6 md:px-24 bg-black">
        <div className="absolute inset-0 z-0 bg-cover bg-center opacity-40 bg-[url('https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2094&auto=format&fit=crop')]"></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-l from-black via-black/80 to-transparent"></div>
        
        <div className="relative z-10 max-w-xl text-right">
          <h2 className="text-4xl md:text-5xl font-bold uppercase mb-6">Maritime</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Tingkatkan petualangan di laut dengan Akastar. Dengan koneksi internet yang cepat di kapal atau perahu Anda, Anda dapat tetap terhubung dengan dunia, mengakses navigasi online, berbagi pengalaman dengan teman-teman, dan mengejar hobi favorit Anda tanpa hambatan.
          </p>
          <button className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-black font-bold uppercase tracking-widest rounded-sm transition-all duration-300 mt-4">
            Jelajahi Maritime
          </button>
        </div>
      </section>

      {/* =========================================
          6. EDUKASI LEO vs GEO
      ========================================= */}
      <section className="w-full flex flex-col-reverse md:flex-row bg-transparent">
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-20 py-20 relative">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-radial-gradient(circle at 0 0, transparent 0, #0B192C 1px, transparent 1px, transparent 40px)' }}></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl font-bold uppercase mb-6">LEO SAT <br/> Educational Heading</h2>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              Berdedikasi untuk memberikan konektivitas di seluruh wilayah Indonesia, kami memberikan edukasi yang mendalam tentang Orbit satelit. Ada dua kategori orbit yang perlu dipahami, mulai dari <span className="text-white font-bold">GEO (Geostationary Earth Orbit)</span> dan <span className="text-white font-bold">LEO (Low Earth Orbit)</span>.
              <br/><br/>
              Kedua kategori orbit satelit ini memiliki karakteristik serta kegunaan yang unik dan kegunaan yang berbeda. Namun persamaannya adalah keduanya memiliki peran yang penting dalam infrastruktur satelit global untuk dapat memenuhi berbagai kebutuhan komunikasi dan penelitian.
            </p>
            <button className="px-8 py-3 bg-white text-black hover:bg-gray-200 font-bold uppercase tracking-widest rounded-sm transition-all duration-300">
              Selengkapnya
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 h-[50vh] md:h-auto min-h-[500px] bg-transparent flex items-center justify-center p-8 md:p-16 relative">
          <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
            <img 
              src="/orbit.webp" 
              alt="Ilustrasi Orbit Satelit LEO dan GEO" 
              className="relative z-10 w-full max-w-xl h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* =========================================
          7. VISI & MISI / KESEMPATAN
      ========================================= */}
      <section className="relative w-full h-[60vh] flex items-center justify-end px-6 md:px-24 bg-black overflow-hidden">

        <div className="relative z-10 max-w-4xl text-right">
          <p className="text-white text-xl md:text-2xl leading-relaxed mb-8 font-light">
            "Tersebar di seluruh wilayah Indonesia, kami hadir untuk memberikan solusi internet dengan kecepatan stabil tanpa gangguan hingga di pelosok negeri. Konektivitas yang kami berikan diharapkan dapat mendorong pertumbuhan ekonomi, memberikan kebebasan infrastruktur kepada seluruh masyarakat, sehingga setiap orang mendapat <span className="font-bold text-nsc-orange">kesempatan yang sama</span> untuk mendapat akses internet yang stabil."
          </p>
          <button className="px-8 py-3 bg-white text-black hover:bg-gray-200 font-bold uppercase tracking-widest rounded-sm transition-all duration-300 text-sm">
            Selengkapnya
          </button>
        </div>
      </section>

      {/* =========================================
          8. FAQ
      ========================================= */}
      <section className="w-full py-32 flex flex-col items-center justify-center bg-transparent">
        <h2 className="text-4xl md:text-5xl font-bold uppercase mb-16 text-center">Pertanyaan yang <br/> Sering Diajukan</h2>
        
        <div className="w-full max-w-3xl px-6">
          <div className="border-b border-white/20 py-6 flex justify-between items-center cursor-pointer hover:text-nsc-orange transition-colors">
            <h3 className="text-xl font-bold">Apakah Akastar bisa menjangkau daerah pegunungan?</h3>
            <span className="text-2xl">+</span>
          </div>
          <div className="border-b border-white/20 py-6 flex justify-between items-center cursor-pointer hover:text-nsc-orange transition-colors">
            <h3 className="text-xl font-bold">Bagaimana cara pemasangan perangkat Akastar?</h3>
            <span className="text-2xl">+</span>
          </div>
        </div>
      </section>

    </main>
  );
}
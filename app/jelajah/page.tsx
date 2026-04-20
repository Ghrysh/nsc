import Image from "next/image";
import Footer from "@/components/Footer";

export default function Jelajah() {
  return (
    <main className="w-full bg-black">
      
      {/* --- HERO SECTION JELAJAH --- */}
      <section className="relative flex min-h-screen w-full flex-col items-center justify-center pb-20">
        
        <div className="absolute inset-0 z-0 h-full w-full">
          <Image
            src="/hero-jelajah.webp" 
            alt="Menjelajah Bersama Starlink"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-black via-black/70 to-transparent"></div>
        </div>

        <div className="relative z-10 flex w-full flex-col items-center px-4 text-center mt-10">
          <h1 className="mb-6 text-4xl font-bold uppercase tracking-tight text-white drop-shadow-lg md:text-5xl lg:text-6xl">
            MENJELAJAH BERSAMA<br />STARLINK
          </h1>
          <div className="mb-8 text-base font-bold text-white drop-shadow-md md:text-lg leading-relaxed">
            <p>
              Rp3.800.000 <span className="font-normal line-through">Rp4.750.000</span> untuk Mini Kit<br />
              Rp4.720.000 <span className="font-normal line-through">Rp5.900.000</span> untuk Standard Kit
            </p>
          </div>
          <div className="mb-10 text-sm font-medium text-white drop-shadow-md md:text-[15px] leading-relaxed">
            <p>
              Pesan sebelum 23/4 | starlinkindonesia@spacex.com | 007 803 6 219 919 (Telepon)<br />
              +62 823 1001 0006 (WhatsApp)
            </p>
          </div>
          <button className="rounded-sm bg-white px-12 py-3.5 text-[11px] font-bold uppercase tracking-widest text-black transition-colors hover:bg-gray-200">
            MULAI
          </button>
        </div>
      </section>

      {/* --- WRAPPER SECTION 2 --- */}
      <div className="relative w-full bg-black [clip-path:inset(0)]">
        
        <div className="fixed left-0 top-0 z-0 h-full w-full opacity-40 pointer-events-none">
          <Image
            src="/particle2.webp"
            alt="Particle Effect"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        <div className="relative z-10 flex w-full flex-col items-center justify-center px-6 py-24 md:px-12 lg:px-24">
          
          <h2 className="mb-12 text-center text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
            INTERNET BERKECEPATAN TINGGI SAAT BEPERGIAN
          </h2>

          <div className="mb-12 flex w-full max-w-[340px] flex-col items-center rounded-xl border border-gray-600 bg-[#0a0a0a]/80 p-8 text-center backdrop-blur-sm">
            <h3 className="mb-4 text-lg font-bold uppercase text-white">JELAJAH TANPA BATAS</h3>
            <p className="mb-8 text-[13px] leading-relaxed text-gray-300">
              Dirancang untuk wisatawan yang sering bepergian, pengguna RV, karavan, dan bekerja saat singgah.
            </p>
            
            <div className="mb-4 flex items-baseline justify-center gap-1">
              <span className="text-4xl font-bold text-white md:text-[42px] tracking-tight">RP1.639.000</span>
              <span className="text-sm text-gray-400">/ BLN</span>
            </div>
            
            <div className="w-full border-t border-gray-700 pt-6">
              <p className="text-[13px] text-gray-400">Kuota Jelajah Tanpa Batas</p>
            </div>
          </div>

          <div className="mb-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[13px] text-white max-w-4xl">
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              <span>Penyiapan Plug & Play</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              <span>Bisa Digunakan di 150+ Negara & Wilayah</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              <span>Jeda Kapan Saja dengan Mode Standby</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              <span>Uji Coba 30 Hari</span>
            </div>
          </div>

          <p className="mb-8 text-center text-sm font-bold text-white">
            Mulai di bawah ini untuk melihat kecepatan dan penawaran promosi di wilayah Anda
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="rounded-sm border border-gray-400 bg-transparent px-8 py-3 text-[10px] font-bold uppercase tracking-widest text-white transition-colors hover:border-white hover:bg-white hover:text-black">
              LIHAT SEMUA PAKET
            </button>
            <button className="rounded-sm bg-white px-8 py-3 text-[10px] font-bold uppercase tracking-widest text-black transition-colors hover:bg-gray-200">
              MULAI
            </button>
          </div>

          <div className="mt-32 w-full max-w-6xl">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="flex flex-col">
                <div className="relative aspect-video w-full mb-6">
                  <Image src="/salju.webp" alt="Perjalanan" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                </div>
                <h4 className="mb-3 text-[17px] uppercase tracking-wide text-white font-normal">PERJALANAN</h4>
                <p className="text-[13px] leading-relaxed text-gray-300">
                  Bawa internet Anda saat bepergian ke mana saja di 150+ negara, wilayah, dan pasar lainnya di seluruh benua.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="relative aspect-video w-full mb-6">
                  <Image src="/kemah.webp" alt="Berkemah" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                </div>
                <h4 className="mb-3 text-[17px] uppercase tracking-wide text-white font-normal">BERKEMAH</h4>
                <p className="text-[13px] leading-relaxed text-gray-300">
                  Gunakan internet berkecepatan tinggi saat berkemah di wilayah paling terpencil di seluruh benua.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="relative aspect-video w-full mb-6">
                  <Image src="/berlayar.webp" alt="Berlayar" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                </div>
                <h4 className="mb-3 text-[17px] uppercase tracking-wide text-white font-normal">BERLAYAR</h4>
                <p className="text-[13px] leading-relaxed text-gray-300">
                  Terhubung di perairan teritorial dan jalur perairan di benua, dengan jangkauan opsional di lautan terbuka. *Di Indonesia, Layanan ini hanya tersedia di Paket Maritim.
                </p>
              </div>
            </div>
            <div className="mt-16 w-full max-w-[200px] h-[3px] bg-gray-800 rounded-full mx-0">
              <div className="w-1/3 h-full bg-gray-400 rounded-full"></div>
            </div>
          </div>

          <div className="mt-40 mb-10 flex w-full flex-col items-center text-center">
            <h2 className="mb-4 text-3xl font-bold uppercase tracking-tight text-white md:text-5xl">
              TERIMA PEMBARUAN EMAIL STARLINK
            </h2>
            <p className="mb-10 text-lg text-white">Daftar di bawah ini</p>
            <div className="flex w-full max-w-lg flex-col gap-4 sm:flex-row sm:gap-2">
              <input 
                type="email" 
                placeholder="EMAIL" 
                className="w-full flex-1 rounded-sm border border-gray-600 bg-transparent px-4 py-3 text-xs text-white outline-none focus:border-white placeholder:text-gray-400 uppercase"
              />
              <button className="w-full rounded-sm bg-[#222222] px-8 py-3 text-[10px] font-bold uppercase tracking-widest text-gray-400 transition-colors hover:bg-gray-800 hover:text-white sm:w-auto">
                DAFTAR
              </button>
            </div>
            <p className="mt-6 text-[10px] text-gray-400">
              Dengan mengeklik Daftar, Anda menyetujui <span className="font-bold text-white transition-opacity hover:opacity-70 cursor-pointer">Kebijakan Privasi</span> kami
            </p>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* MEGA WRAPPER UNTUK STICKY NAVBAR AGAR MENEMPEL SAMPAI AKHIR HALAMAN */}
      {/* ========================================================================= */}
      <div className="relative w-full">

        <div className="sticky top-0 z-[60] flex w-full items-center justify-between bg-[#111111]/80 backdrop-blur-md px-8 py-4 shadow-xl md:px-16 lg:px-24">
          <div className="text-xl font-bold uppercase tracking-widest text-white">
            JELAJAH
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#" className="text-[11px] font-bold uppercase tracking-widest text-white transition-opacity hover:opacity-70">
              Paket Layanan
            </a>
            <a href="#" className="text-[11px] font-bold uppercase tracking-widest text-white transition-opacity hover:opacity-70">
              Spesifikasi
            </a>
            <a href="#" className="text-[11px] font-bold uppercase tracking-widest text-white transition-opacity hover:opacity-70">
              Pertanyaan Umum
            </a>
            <button className="rounded-sm bg-white px-8 py-2.5 text-[10px] font-bold uppercase tracking-widest text-black transition-colors hover:bg-gray-200">
              MULAI
            </button>
          </div>
        </div>

        {/* --- SECTION 3 --- */}
        <section className="relative flex h-[90vh] min-h-[600px] w-full items-start justify-start overflow-hidden pt-25">
          <div className="absolute inset-0 z-0 h-full w-full">
            <Image 
              src="/starlink-mini.webp" 
              alt="Starlink Mini" 
              fill 
              sizes="100vw"
              className="object-cover object-center" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent w-full md:w-2/3"></div>
          </div>
          <div className="relative z-10 flex w-full max-w-2xl flex-col items-start px-8 text-left md:px-16 lg:px-24">
            <h2 className="mb-6 text-4xl font-bold uppercase leading-tight tracking-tight text-white drop-shadow-md md:text-5xl lg:text-[42px]">
              STARLINK MINI UNTUK<br />INTERNET SAAT SINGGAH
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-gray-200 drop-shadow-md md:text-[15px]">
              Starlink Mini adalah kit portabel yang ringkas dan dapat dengan mudah dimasukkan ke dalam ransel, dirancang untuk menyediakan internet berkecepatan tinggi dan latensi rendah saat singgah.
            </p>
            <p className="mb-10 text-sm leading-relaxed text-gray-200 drop-shadow-md md:text-[15px]">
              Kit mencakup router Wi-Fi bawaan, konsumsi daya yang lebih rendah, input daya DC, dan <span className="font-bold text-white">kecepatan unduhan maksimal lebih dari 200 Mbps.</span>
            </p>
            <button className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.1em] text-white transition-opacity hover:opacity-70">
              <span className="border-b border-transparent pb-0.5 group-hover:border-white transition-all duration-300">
                LIHAT SPESIFIKASI
              </span>
              <svg className="h-3 w-3 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </section>

        {/* --- SECTION 4 --- */}
        <section className="relative flex min-h-[90vh] w-full items-start justify-end overflow-hidden px-8 py-24 md:px-16 lg:px-24">
          <div className="absolute inset-0 z-0 h-full w-full">
            <Image 
              src="/malam.webp" 
              alt="Bekerja dan Bermain di Lokasi Terpencil" 
              fill 
              sizes="100vw"
              className="object-cover object-center" 
            />
            <div className="absolute inset-0 right-0 ml-auto w-full bg-gradient-to-l from-black/90 via-black/40 to-transparent md:w-3/4"></div>
          </div>
          <div className="relative z-10 flex w-full max-w-2xl flex-col items-start text-left">
            <h2 className="mb-6 text-4xl font-bold uppercase leading-tight tracking-tight text-white drop-shadow-md md:text-5xl lg:text-[42px]">
              BEKERJA DAN BERMAIN DI<br />LOKASI TERPENCIL
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-gray-200 drop-shadow-md md:text-[15px]">
              Starlink menawarkan internet berkecepatan tinggi hampir di semua tempat di seluruh benua. Dengan Jelajah, Anda dapat bepergian ke mana saja di negara Anda dan pada perjalanan internasional di 150+ negara, wilayah, dan pasar lain di seluruh benua.
            </p>
            <p className="text-sm leading-relaxed text-gray-200 drop-shadow-md md:text-[15px]">
              Starlink terhubung dalam hitungan menit dan dapat dikemas dengan cepat saat Anda harus berpindah ke tujuan berikutnya.
            </p>
          </div>
        </section>

        {/* --- WRAPPER SECTION 4, 5, & 6 --- */}
        <div className="relative w-full bg-black [clip-path:inset(0)]">
          <div className="fixed left-0 top-0 z-0 h-full w-full md:w-1/2 pointer-events-none">
            <Image
              src="/particle3.webp"
              alt="Particle Effect 3"
              fill
              sizes="100vw"
              className="object-cover object-left"
            />
          </div>

          <section className="relative z-10 flex w-full flex-col items-center justify-center px-8 py-32 mt-20 mb-40 text-center md:px-16 lg:px-24">
            <h2 className="mb-6 text-3xl font-bold uppercase tracking-tight text-white md:text-5xl">
              BAYAR SESUAI PEMAKAIAN
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-gray-200 drop-shadow-md md:text-base">
              Jeda dan lanjutkan layanan kapan saja dengan Mode Standby, yang memungkinkan pengiriman pesan darurat dan kemudahan untuk pengaktifan kembali di zona tanpa sinyal dengan biaya bulanan yang kecil. Penagihan dilakukan setiap bulan, jadi Anda dapat menyesuaikan layanan dengan setiap kebutuhan perjalanan.
            </p>
          </section>

          <section className="relative z-10 flex min-h-[80vh] w-full flex-col md:flex-row">
            <div className="relative h-[50vh] w-full md:h-auto md:flex-1">
              <Image
                src="/perahu.webp"
                alt="Starlink di Perairan"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center bg-transparent px-8 py-16 md:px-16 lg:px-24">
              <div className="max-w-lg text-left">
                <h2 className="mb-6 text-3xl font-bold uppercase tracking-tight text-white md:text-4xl lg:text-5xl">
                  STARLINK DI PERAIRAN
                </h2>
                <p className="mb-6 text-sm leading-relaxed text-gray-300 md:text-[15px]">
                  Tetap terhubung dengan Internet berkecepatan tinggi di kapal Anda menggunakan paket Starlink Jelajah di perairan pesisir dan di benua. Untuk jangkauan di perairan internasional, aktifkan Mode Laut.
                </p>
                <p className="mb-10 text-sm leading-relaxed text-gray-300 md:text-[15px]">
                  Untuk perjalanan laut yang sering dilakukan atau berlangsung dalam jangka waktu lama, pelajari tentang Starlink Maritim.
                </p>
                <button className="rounded-sm border border-white bg-transparent px-8 py-3 text-[10px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-black">
                  LIHAT MARITIM
                </button>
              </div>
            </div>
          </section>

          <section className="relative z-10 flex min-h-[80vh] w-full flex-col-reverse md:flex-row">
            <div className="flex flex-1 flex-col justify-center bg-transparent px-8 py-16 md:px-16 lg:px-24">
              <div className="max-w-xl text-left">
                <h2 className="mb-6 text-3xl font-bold uppercase tracking-tight text-white md:text-4xl lg:text-5xl">
                  ONLINE DALAM HITUNGAN MENIT
                </h2>
                <p className="mb-10 text-sm leading-relaxed text-gray-300 md:text-[15px]">
                  Atur Starlink hanya dengan dua langkah. Petunjuk dapat dijalankan dari urutan mana saja:
                </p>
                <div className="mb-12 flex flex-col gap-4">
                  <p className="text-xl font-bold uppercase tracking-widest text-white md:text-[22px]">
                    1 SAMBUNGKAN PERANGKAT KE LISTRIK
                  </p>
                  <p className="text-xl font-bold uppercase tracking-widest text-white md:text-[22px]">
                    2 ARAHKAN KE LANGIT
                  </p>
                </div>
                <p className="mb-8 text-sm leading-relaxed text-gray-300 md:text-[15px]">
                  Posisi Starlink harus bebas halangan dan mengarah langsung ke langit. Unduh aplikasi Starlink untuk menentukan lokasi pemasangan terbaik Anda.
                </p>
                <div className="flex flex-wrap items-center gap-6">
                  <button className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.1em] text-white transition-opacity hover:opacity-70">
                    <span className="border-b border-transparent pb-0.5 transition-all duration-300 group-hover:border-white">
                      UNDUH UNTUK ANDROID
                    </span>
                    <svg className="h-3 w-3 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <button className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.1em] text-white transition-opacity hover:opacity-70">
                    <span className="border-b border-transparent pb-0.5 transition-all duration-300 group-hover:border-white">
                      UNDUH UNTUK IOS
                    </span>
                    <svg className="h-3 w-3 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="relative h-[50vh] w-full md:h-auto md:flex-1">
              <Image
                src="/padang.webp"
                alt="Setup Starlink"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </section>
        </div>

        {/* --- SECTION 7 --- */}
        <section className="relative flex min-h-[80vh] w-full items-start justify-start overflow-hidden">
          <div className="absolute inset-0 z-0 h-full w-full">
            <Image 
              src="/tahan-cuaca.webp" 
              alt="Starlink Tahan Cuaca" 
              fill 
              sizes="100vw"
              className="object-cover object-center" 
            />
            <div className="absolute inset-0 left-0 w-full bg-gradient-to-r from-black/80 via-black/40 to-transparent md:w-2/3"></div>
          </div>
          <div className="relative z-10 flex w-full max-w-2xl flex-col items-start px-8 text-left md:px-16 lg:px-24 py-32">
            <h2 className="mb-6 text-4xl font-bold uppercase leading-tight tracking-tight text-white drop-shadow-md md:text-5xl lg:text-[42px]">
              TAHAN CUACA
            </h2>
            <p className="text-sm leading-relaxed text-gray-200 drop-shadow-md md:text-[15px]">
              Starlink dirancang untuk tahan dalam berbagai kondisi—perangkat ini dapat mencairkan salju dan tahan hujan es, hujan lebat, serta angin kencang yang ekstrem.
            </p>
          </div>
        </section>

        {/* --- WRAPPER SECTION 8 & 9 --- */}
        <div className="relative w-full bg-black [clip-path:inset(0)]">
          <div className="fixed right-0 top-0 z-0 h-full w-full md:w-1/2 pointer-events-none">
            <Image
              src="/particle4.webp"
              alt="Particle Effect 4"
              fill
              sizes="100vw"
              className="object-contain object-right"
            />
          </div>

          <section className="relative z-10 flex w-full flex-col justify-center px-8 py-32 md:px-16 lg:px-24">
            <div className="relative z-10 mx-auto w-full max-w-7xl">
              <h3 className="mb-16 text-xs font-bold uppercase tracking-[0.2em] text-white">
                KATA PELANGGAN KAMI
              </h3>
              <div className="flex w-full snap-x snap-mandatory gap-8 overflow-x-auto pb-8 scrollbar-hide md:grid md:grid-cols-3 md:gap-10 md:overflow-visible md:pb-0">
                <div className="flex min-w-[85vw] snap-start flex-col border-l-[3px] border-white pl-6 sm:min-w-[300px] md:min-w-0">
                  <h4 className="mb-4 text-xl font-bold uppercase tracking-wide text-white md:text-2xl">
                    BEKERJA DARI MANA SAJA
                  </h4>
                  <p className="mb-8 text-[13px] leading-relaxed text-gray-300 md:text-sm">
                    "Starlink adalah item yang wajib dimiliki jika Anda harus bekerja jarak jauh atau suka bepergian ke tempat tanpa listrik, tapi tetap ingin terhubung ke internet! Sangat efektif!"
                  </p>
                  <p className="mt-auto text-[13px] text-gray-400">
                    - Hoyung dari Amerika Serikat
                  </p>
                </div>
                <div className="flex min-w-[85vw] snap-start flex-col border-l border-gray-700 pl-6 sm:min-w-[300px] md:min-w-0">
                  <h4 className="mb-4 text-xl font-bold uppercase tracking-wide text-white md:text-2xl">
                    COCOK UNTUK RV
                  </h4>
                  <p className="mb-8 text-[13px] leading-relaxed text-gray-300 md:text-sm">
                    "Sebagai pelanggan yang tinggal di RV, Starlink sangat cocok untuk kami. Kami memiliki akses internet terbaik di mana pun kami berada."
                  </p>
                  <p className="mt-auto text-[13px] text-gray-400">
                    - Walter dari Amerika Serikat
                  </p>
                </div>
                <div className="flex min-w-[85vw] snap-start flex-col border-l border-gray-700 pl-6 sm:min-w-[300px] md:min-w-0">
                  <h4 className="mb-4 text-xl font-bold uppercase tracking-wide text-white md:text-2xl">
                    ANDAL DAN JARAK JAUH
                  </h4>
                  <p className="mb-8 text-[13px] leading-relaxed text-gray-300 md:text-sm">
                    "Starlink mendukung pekerjaan online saya, memungkinkan saya pergi ke berbagai tempat dengan sumber internet satelit yang andal dan membantu saya memutuskan untuk segera pindah dan tinggal di pedesaan."
                  </p>
                  <p className="mt-auto text-[13px] text-gray-400">
                    - Jeeve dari Filipina
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="relative z-10 flex min-h-[70vh] w-full flex-col items-center justify-center px-8 py-24 text-center md:px-16 lg:px-24">
            <h2 className="mb-6 text-4xl font-bold uppercase tracking-tight text-white md:text-5xl">
              UJI COBA 30 HARI
            </h2>
            <p className="mb-10 max-w-2xl text-base leading-relaxed text-gray-200 md:text-lg">
              Coba Starlink selama 30 hari. Jika tidak puas, Anda bisa mendapatkan pengembalian dana penuh.
            </p>
            <button className="rounded-sm bg-white px-12 py-3.5 text-[11px] font-bold uppercase tracking-widest text-black transition-colors hover:bg-gray-200">
              MULAI
            </button>
          </section>
        </div>

      {/* Akhir dari MEGA WRAPPER Sticky Navbar */}
      </div>

      <Footer />
    </main>
  );
}
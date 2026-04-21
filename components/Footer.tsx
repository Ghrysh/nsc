import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black px-8 py-12 md:px-16 lg:px-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
        
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          
          <div className="flex flex-wrap items-center gap-6 text-[13px] font-bold text-white">
            <Link href="#" className="transition-opacity hover:opacity-70">Karier</Link>
            <Link href="#" className="transition-opacity hover:opacity-70">Operator Satelit</Link>
            <Link href="#" className="transition-opacity hover:opacity-70">Reseller Resmi</Link>
            <Link href="#" className="transition-opacity hover:opacity-70">Privasi & Hukum</Link>
            <Link href="#" className="transition-opacity hover:opacity-70">Preferensi Privasi</Link>
          </div>

          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-4">
            <span className="text-[13px] font-bold text-white">
              Ingin terus menerima informasi terbaru NSC?
            </span>
            <div className="flex items-end gap-4">
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full border-b border-gray-500 bg-transparent pb-1 pt-2 text-[13px] text-white outline-none transition-colors focus:border-white lg:w-48"
              />
              <button className="group flex items-center gap-1 text-[12px] font-bold text-white transition-opacity hover:opacity-70">
                DAFTAR
                <svg className="h-3 w-3 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">

          <div className="flex flex-wrap items-center gap-4 text-[12px] text-gray-300">
            <span>© 2026 NSC, ALL RIGHTS RESERVED</span>
            <span>
              Internet Cepat Sampai Pelosok Negeri
            </span>
          </div>

          <div className="text-[12px] text-gray-300">
            Dengan mengeklik Daftar, Anda menyetujui{" "}
            <a href="#" className="font-bold text-white transition-opacity hover:opacity-70">
              Kebijakan Privasi
            </a>{" "}
            kami
          </div>

        </div>
      </div>
    </footer>
  );
}
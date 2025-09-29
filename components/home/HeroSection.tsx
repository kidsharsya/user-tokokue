'use client';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <video
        src="/video-banner.mp4" // taruh file video di folder public/
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay gelap biar teks lebih terbaca */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-semibold text-white">
          Mahakarya dalam <span className="text-gold">Setiap Potongan</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200">Diracik secara eksklusif menggunakan bahan-bahan premium pilihan</p>
        <div className="mt-6">
          <a href="/koleksi" className="inline-block px-6 py-3 rounded-md font-medium text-white bg-[var(--color-gold)] hover:bg-[var(--color-grey)] transition">
            Jelajahi Koleksi
          </a>
        </div>
      </div>
    </section>
  );
}

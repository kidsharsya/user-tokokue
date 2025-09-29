'use client';

import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="bg-[var(--color-gold)] py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Gambar */}
        <div className="w-full">
          <Image src="/about/about.png" alt="Seni Pembuatan Kue" width={600} height={600} className="rounded-xl object-cover shadow-lg" />
        </div>

        {/* Konten */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-grey)] mb-6 font-poppins">Seni di Balik Rasa</h2>
          <p className="text-[var(--color-grey)] leading-relaxed mb-4 font-poppins">
            Di Elysian Sweets, kami percaya bahwa kue adalah sebuah kanvas dan rasa adalah mahakaryanya. Filosofi ini kami wujudkan melalui dedikasi penuh pada seni pâtisserie dan pencarian tanpa henti akan bahan-bahan terbaik dunia. Mulai
            dari cokelat couverture dari Belgia hingga vanilla bean dari Polinesia Prancis, setiap elemen dipilih secara saksama untuk memastikan kualitas dan kemewahan yang otentik dalam setiap produk yang kami ciptakan.
          </p>
          <p className="text-[var(--color-grey)] leading-relaxed font-poppins">
            Dengan presisi dan hasrat, setiap kue kami racik bukan hanya sebagai panganan manis, tetapi sebagai sebuah persembahan. Kami tidak sekadar menjual kue; kami menghadirkan sebuah momen istimewa, sebuah perayaan kecil yang
            membangkitkan indera dan menciptakan kenangan. Inilah seni di balik rasa, sebuah sentuhan surgawi yang menjadi janji Elysian Sweets untuk Anda.
          </p>
        </div>
      </div>
    </section>
  );
}

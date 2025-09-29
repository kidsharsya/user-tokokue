'use client';

import Image from 'next/image';
import { Phone } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center">
      {/* Background image */}
      <Image
        src="/contact/contact.png" // ganti sesuai nama file di public/
        alt="Elysian Sweets Cakes"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay gelap biar teks lebih terbaca */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative max-w-6xl z-10 text-center px-4">
        <h1 className="text-2xl md:text-3xl font-semibold text-white">Wujudkan Kue Impian Anda</h1>
        <p className="mt-4 text-base md:text-base text-gray-200">
          Untuk setiap momen tak ternilai, sebuah mahakarya istimewa harus diciptakan. Jadikan kami bagian dari cerita Anda. Melalui sesi konsultasi personal, tim pastry chef ahli kami akan berkolaborasi dengan Anda untuk merancang dan
          mewujudkan kue impian yang sepenuhnya merefleksikan imajinasi Anda
        </p>
        <div className="mt-6">
          <a href="/kontak-kami" className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-medium text-white bg-[var(--color-gold)] hover:bg-[var(--color-grey)] transition">
            <Phone className="w-5 h-5" />
            Hubungi Kami
          </a>
        </div>
      </div>
    </section>
  );
}

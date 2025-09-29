// app/kontak/page.tsx
'use client';

import { Mail, Phone, MessageCircle } from 'lucide-react';

export default function KontakPage() {
  const whatsappNumber = '6281234567890'; // ganti dengan nomor WA toko

  return (
    <section
      className="relative min-h-screen flex mx-auto px-6 py-12 bg-cover bg-center"
      style={{
        backgroundImage: "url('/hero-image.jpg')", // simpan image di /public/images/contact-bg.jpg
      }}
    >
      {/* Overlay supaya teks lebih jelas */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-4xl mx-auto px-2 text-center py-8">
        {/* Judul */}
        <h1 className="text-2xl md:text-3xl font-bold text-[var(--color-gold)] mb-6 font-poppins">Hubungi Kami</h1>
        <p className="text-gray-200 mb-12 text-lg">
          Tim <span className="text-[var(--color-gold)] font-semibold">Elysian Sweets</span> siap membantu Anda.
        </p>

        {/* Card Kontak */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Email */}
          <a href="mailto:concierge@elysiansweets.id" className="group bg-white/20 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[var(--color-gold)] flex items-center justify-center mb-6 group-hover:scale-110 transition">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-xl font-semibold text-[var(--color-gold)]">Kirim Email</h2>
            <p className="text-white mt-2">concierge@elysiansweets.id</p>
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/20 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 p-8 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mb-6 group-hover:scale-110 transition">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-xl font-semibold text-[var(--color-gold)]">Chat WhatsApp</h2>
            <p className="text-white mt-2">+62 812-3456-7890</p>
          </a>
        </div>

        {/* Info tambahan */}
        <div className="mt-16 bg-white/20 backdrop-blur-md p-6 rounded-xl text-gray-200">
          <p className="mb-2">Atau hubungi kami melalui telepon:</p>
          <div className="flex items-center justify-center gap-2">
            <Phone className="w-5 h-5 text-[var(--color-gold)]" />
            <span>+62 812-3456-7890</span>
          </div>
        </div>
      </div>
    </section>
  );
}

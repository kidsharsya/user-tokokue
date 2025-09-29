'use client';

import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <section className="bg-[var(--color-grey)]">
      <footer className="max-w-6xl mx-auto text-gray-300 py-16 px-6">
        <div className="grid md:grid-cols-3 gap-8 md:gap-24 lg:gap-40">
          {/* Brand + Contact */}
          <div>
            <Image src="/logo_light.svg" alt="Icon Elysian" width={100} height={100} className="max-w-full h-auto mb-4" />
            <p className="mb-6 text-sm">Sebuah Mahakarya Rasa, Diracik dengan Hati dan Presisi</p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[var(--color-gold)]" />
                +62 1234 5678 9101
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[var(--color-gold)]" />
                concierge@elysiansweets.id
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-7 w-7 text-[var(--color-gold)]" />
                Butik Elysian Sweets, Jl. Senopati No. XX, Jakarta Selatan
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#home" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/produk" className="hover:text-white">
                  Produk
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="/kontak-kami" className="hover:text-white">
                  Kontak Kami
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms of use
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-xs text-gray-400">© 2025 Elysian Sweets. All Rights Reserved.</div>
      </footer>
    </section>
  );
}

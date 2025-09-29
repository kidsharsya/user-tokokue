'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link'; // ✅ pakai Link Next.js
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const linkClasses = (href: string) => `px-3 py-2 ${pathname === href ? 'border-b-2 border-[var(--color-gold)] text-[var(--color-gold)]' : 'text-white hover:border-b-2 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]'}`;

  return (
    <nav className="fixed top-0 left-0 w-full bg-[var(--color-grey)] border-b border-gray-500 shadow-md z-50">
      <div className="max-w-6xl flex justify-between items-center mx-auto px-4 py-1">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/logo_light.svg" alt="Elysian Logo" width={100} height={100} className="mr-3" />
        </div>

        {/* Menu desktop */}
        <ul className="hidden lg:flex space-x-6">
          <li>
            <Link href="/home" className={linkClasses('/home')}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/produk" className={linkClasses('/koleksi')}>
              Produk
            </Link>
          </li>
          <li>
            <Link href="/kontak-kami" className={linkClasses('/kontak-kami')}>
              Kontak Kami
            </Link>
          </li>
        </ul>

        {/* Actions desktop */}
        <div className="hidden lg:flex items-center space-x-4">
          <button className="px-4 py-2 border border-white text-white rounded-md hover:bg-[var(--color-gold)] hover:border-[var(--color-gold)] hover:text-white">Login</button>
          <button className="px-4 py-2 border border-white text-white rounded-md hover:bg-[var(--color-gold)] hover:border-[var(--color-gold)] hover:text-white">Daftar</button>
        </div>

        {/* Hamburger button */}
        <button className="lg:hidden p-2 text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden px-4 py-4 pb-4 space-y-2 bg-[var(--color-grey)]">
          <Link href="/home" className={pathname === '/home' ? 'block text-[var(--color-gold)] font-semibold' : 'block text-white hover:text-[var(--color-gold)]'} onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/produk" className={pathname === '/koleksi' ? 'block text-[var(--color-gold)] font-semibold' : 'block text-white hover:text-[var(--color-gold)]'} onClick={() => setIsOpen(false)}>
            Produk
          </Link>
          <Link href="/kontak-kami" className={pathname === '/kontak-kami' ? 'block text-[var(--color-gold)] font-semibold' : 'block text-white hover:text-[var(--color-gold)]'} onClick={() => setIsOpen(false)}>
            Kontak Kami
          </Link>
          <div className="pt-2 flex flex-col space-y-2">
            <button className="w-full text-white px-4 py-2 border border-white rounded-md hover:bg-[var(--color-gold)] hover:text-white hover:border-[var(--color-gold)]">Login</button>
            <button className="w-full text-white px-4 py-2 border border-white rounded-md hover:bg-[var(--color-gold)] hover:text-white hover:border-[var(--color-gold)]">Daftar</button>
          </div>
        </div>
      )}
    </nav>
  );
}

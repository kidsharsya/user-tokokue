// components/layout/Navbar.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ShoppingCart, User, Package, LogOut } from 'lucide-react';
import { getUser, logout } from '@/services/auth';
import { useCart } from '@/contexts/CartContext';
import type { User as UserType } from '@/types/user';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [user, setUser] = useState<UserType | null>(null);
  const { getTotalItems } = useCart();
  const cartCount = getTotalItems();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  // Get user data on mount
  useEffect(() => {
    const userData = getUser();
    setUser(userData);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const linkClasses = (href: string) => `px-3 py-2 ${pathname === href ? 'border-b-2 border-[var(--color-gold)] text-[var(--color-gold)]' : 'text-white hover:border-b-2 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]'}`;

  // Generate initials from name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((word) => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const handleLogout = () => {
    logout();
    setUser(null);
    setIsDropdownOpen(false);
    router.push('/login');
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[var(--color-grey)] border-b border-gray-500 shadow-md z-50">
      <div className="max-w-7xl flex justify-between items-center mx-auto px-4 py-1">
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
            <Link href="/produk" className={linkClasses('/produk')}>
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
          {user ? (
            <>
              {/* Shopping Cart */}
              <Link href="/keranjang" className="relative p-2 text-white hover:text-[var(--color-gold)] transition-colors">
                <ShoppingCart className="h-6 w-6" />
                {cartCount > 0 && <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold animate-pulse">{cartCount}</span>}
              </Link>

              {/* User Profile Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                  {/* Avatar */}
                  <div className="w-10 h-10 rounded-full bg-[var(--color-gold)] flex items-center justify-center text-white font-semibold">{getInitials(user.name)}</div>
                  <span className="text-white font-medium">{user.name}</span>
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 border border-gray-200">
                    <Link href="/profil" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors" onClick={() => setIsDropdownOpen(false)}>
                      <User className="h-4 w-4 mr-2" />
                      Profil Saya
                    </Link>
                    <Link href="/pesanan" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors" onClick={() => setIsDropdownOpen(false)}>
                      <Package className="h-4 w-4 mr-2" />
                      Pesanan Saya
                    </Link>
                    <hr className="my-1" />
                    <button onClick={handleLogout} className="flex items-center w-full px-4 py-2 text-red-600 hover:bg-gray-100 transition-colors">
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <Link href="/login">
                <button className="px-4 py-2 border border-white text-white rounded-md hover:bg-[var(--color-gold)] hover:border-[var(--color-gold)] hover:text-white transition-colors">Login</button>
              </Link>
              <Link href="/register">
                <button className="px-4 py-2 border border-white text-white rounded-md hover:bg-[var(--color-gold)] hover:border-[var(--color-gold)] hover:text-white transition-colors">Daftar</button>
              </Link>
            </>
          )}
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
          <Link href="/produk" className={pathname === '/produk' ? 'block text-[var(--color-gold)] font-semibold' : 'block text-white hover:text-[var(--color-gold)]'} onClick={() => setIsOpen(false)}>
            Produk
          </Link>
          <Link href="/kontak-kami" className={pathname === '/kontak-kami' ? 'block text-[var(--color-gold)] font-semibold' : 'block text-white hover:text-[var(--color-gold)]'} onClick={() => setIsOpen(false)}>
            Kontak Kami
          </Link>

          {user ? (
            <div className="pt-2 space-y-2 border-t border-gray-600">
              {/* User Info Mobile */}
              <div className="flex items-center space-x-3 py-2">
                <div className="w-10 h-10 rounded-full bg-[var(--color-gold)] flex items-center justify-center text-white font-semibold">{getInitials(user.name)}</div>
                <span className="text-white font-medium">{user.name}</span>
              </div>

              {/* Shopping Cart Mobile */}
              <Link href="/keranjang" className="flex items-center text-white hover:text-[var(--color-gold)] py-2" onClick={() => setIsOpen(false)}>
                <ShoppingCart className="h-5 w-5 mr-2" />
                Keranjang
                {cartCount > 0 && <span className="ml-1 bg-red-500 text-white text-xs rounded-full px-2 py-0.5 font-semibold">{cartCount}</span>}
              </Link>

              {/* Menu Items Mobile */}
              <Link href="/profil" className="flex items-center text-white hover:text-[var(--color-gold)] py-2" onClick={() => setIsOpen(false)}>
                <User className="h-5 w-5 mr-2" />
                Profil Saya
              </Link>
              <Link href="/pesanan" className="flex items-center text-white hover:text-[var(--color-gold)] py-2" onClick={() => setIsOpen(false)}>
                <Package className="h-5 w-5 mr-2" />
                Pesanan Saya
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="flex items-center w-full text-red-400 hover:text-red-300 py-2"
              >
                <LogOut className="h-5 w-5 mr-2" />
                Logout
              </button>
            </div>
          ) : (
            <div className="pt-2 flex flex-col space-y-2">
              <Link href="/login" onClick={() => setIsOpen(false)}>
                <button className="w-full text-white px-4 py-2 border border-white rounded-md hover:bg-[var(--color-gold)] hover:text-white hover:border-[var(--color-gold)] transition-colors">Login</button>
              </Link>
              <Link href="/register" onClick={() => setIsOpen(false)}>
                <button className="w-full text-white px-4 py-2 border border-white rounded-md hover:bg-[var(--color-gold)] hover:text-white hover:border-[var(--color-gold)] transition-colors">Daftar</button>
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { register } from '@/services/auth';

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const validateForm = () => {
    if (name.trim().length < 3) {
      setError('Nama minimal 3 karakter');
      return false;
    }
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError('Format email tidak valid');
      return false;
    }
    if (password.length < 6) {
      setError('Password minimal 6 karakter');
      return false;
    }
    if (password !== confirm) {
      setError('Konfirmasi password tidak cocok.');
      return;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) return;

    setLoading(true);
    try {
      await register({ name, email, password });
      router.push('/login');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Registrasi gagal');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center">
      {/* 1. Komponen Next.js Image sebagai Background */}
      <Image
        src="/hero-image.jpg" // GANTI DENGAN PATH GAMBAR ANDA
        alt="Background Toko Kue"
        layout="fill"
        objectFit="cover"
        quality={80} // Opsional: Mengoptimalkan kualitas gambar
        className="absolute z-0" // Pastikan berada di belakang konten
      />

      {/* 2. Overlay Gelap (Opsional, untuk meningkatkan keterbacaan form) */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      <div className="relative z-20 bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 w-full max-w-md text-center">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <Image src="/logo_light.svg" alt="Elysian Sweets" width={80} height={80} />
        </div>

        <h1 className="text-3xl font-bold text-white mb-2">Buat Akun Baru</h1>
        <p className="text-gray-300 mb-6">Daftar untuk mulai belanja</p>

        {error && <div className="mb-4 bg-red-500/20 text-red-300 p-3 rounded-md text-sm">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <input
            type="text"
            placeholder="Nama Lengkap"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-lg bg-white/80 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]"
          />

          <input
            type="email"
            placeholder="Alamat Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-lg bg-white/80 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]"
          />

          <input
            type="password"
            placeholder="Kata Sandi"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-lg bg-white/80 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]"
          />

          <input
            type="password"
            placeholder="Konfirmasi Kata Sandi"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-lg bg-white/80 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]"
          />

          <button type="submit" disabled={loading} className="w-full px-4 py-2 rounded-lg font-semibold text-white bg-[var(--color-gold)] hover:bg-[var(--color-grey)] transition disabled:opacity-50">
            {loading ? 'Memproses...' : 'Daftar'}
          </button>
        </form>

        <p className="mt-6 text-gray-400 text-sm">
          Sudah punya akun?{' '}
          <a href="/login" className="text-[var(--color-gold)] hover:underline">
            Masuk
          </a>
        </p>
      </div>
    </section>
  );
}

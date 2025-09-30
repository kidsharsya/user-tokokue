'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { login } from '@/services/auth';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await login({ email, password });
      router.push('/');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login gagal');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center">
      <Image src="/hero-image.jpg" alt="Background Toko Kue" layout="fill" objectFit="cover" quality={80} className="absolute z-0" />

      <div className="absolute inset-0 bg-black/50 z-10"></div>

      <div className="relative z-20 bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 w-full max-w-md text-center">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <Image src="/logo_light.svg" alt="Elysian Sweets" width={80} height={80} />
        </div>

        <h1 className="text-3xl font-bold text-white mb-2">Selamat Datang</h1>
        <p className="text-gray-300 mb-6">Masuk ke akun Anda</p>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-lg bg-white/80 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]"
          />

          <input
            type="password"
            placeholder="Kata sandi"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-lg bg-white/80 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]"
          />

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button type="submit" disabled={loading} className="w-full px-4 py-2 rounded-lg font-semibold text-white bg-[var(--color-gold)] hover:bg-[var(--color-grey)] transition disabled:opacity-50">
            {loading ? 'Memproses...' : 'Masuk'}
          </button>
        </form>

        <p className="mt-6 text-gray-400 text-sm">
          Belum punya akun?{' '}
          <a href="/register" className="text-[var(--color-gold)] hover:underline">
            Daftar
          </a>
        </p>
      </div>
    </section>
  );
}

// components/AddToCartButton.tsx
'use client';

import { ShoppingCart } from 'lucide-react';

export default function AddToCartButton() {
  return (
    <button className="flex items-center justify-center text-center gap-2 px-5 py-3 rounded-lg bg-[var(--color-gold)] text-white font-medium hover:bg-[var(--color-grey)] transition">
      <ShoppingCart size={20} />
      Tambahkan ke Keranjang
    </button>
  );
}

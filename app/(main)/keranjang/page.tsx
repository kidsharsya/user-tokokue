'use client';

import { useCart } from '@/contexts/CartContext';
import Image from 'next/image';
import { XCircle, Plus, Minus, Trash } from 'lucide-react';
import Link from 'next/link';

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, clearCart, getTotalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gray-50">
        <h1 className="text-3xl font-bold mb-4">Keranjang Belanja</h1>
        <p className="text-gray-600 mb-6">Keranjangmu masih kosong 😢</p>
        <Link href="/produk" className="px-6 py-3 bg-[var(--color-gold)] text-white rounded-lg shadow hover:bg-[var(--color-grey)] transition">
          Kembali ke Produk
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center text-[var(--color-gold)]">Keranjang Belanja</h1>

      <div className="grid gap-6">
        {items.map(({ product, quantity }) => {
          const imageUrl = product.images?.[0]?.imageUrl ? `http://localhost:5000${product.images[0].imageUrl}` : '/placeholder.png';

          return (
            <div key={product.id} className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-xl overflow-hidden transition hover:shadow-xl">
              {/* Gambar */}
              <div className="relative w-full md:w-48 h-48 flex-shrink-0">
                <Image src={imageUrl} alt={product.name} fill className="object-cover" />
              </div>

              {/* Info */}
              <div className="flex-1 p-6 flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                  <p className="text-gray-500 mt-1">Rp {parseInt(product.price).toLocaleString('id-ID')}</p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2">
                  <button onClick={() => updateQuantity(product.id, quantity - 1)} className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300 transition">
                    <Minus size={16} />
                  </button>
                  <span className="w-8 text-center">{quantity}</span>
                  <button onClick={() => updateQuantity(product.id, quantity + 1)} className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300 transition">
                    <Plus size={16} />
                  </button>
                </div>

                {/* Subtotal & Remove */}
                <div className="flex flex-col items-end gap-2">
                  <p className="font-semibold text-gray-800">Rp {(parseInt(product.price) * quantity).toLocaleString('id-ID')}</p>
                  <button onClick={() => removeFromCart(product.id)} className="text-red-500 hover:text-red-700 transition">
                    <Trash size={24} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary */}
      <div className="mt-8 bg-white p-6 rounded-xl shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-2xl font-semibold">
          Total: <span className="text-[var(--color-gold)]">Rp {getTotalPrice().toLocaleString('id-ID')}</span>
        </p>
        <div className="flex gap-4 flex-wrap">
          <button onClick={clearCart} className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition font-medium">
            Kosongkan Keranjang
          </button>
          <button className="px-6 py-2 bg-[var(--color-gold)] text-white rounded-lg hover:bg-[var(--color-grey)] transition font-medium">Checkout</button>
        </div>
      </div>
    </div>
  );
}

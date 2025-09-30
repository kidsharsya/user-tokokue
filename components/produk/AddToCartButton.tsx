// components/AddToCartButton.tsx
'use client';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart, Check } from 'lucide-react';
import { useState } from 'react';
import { Product } from '@/types/product';

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart, isInCart } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  return (
    <button
      onClick={handleAdd}
      disabled={!product.isAvailable}
      className={`flex items-center justify-center text-center gap-2 px-5 py-3 rounded-lg font-medium transition ${
        justAdded ? 'bg-green-500 text-white' : product.isAvailable ? 'bg-[var(--color-gold)] text-white hover:bg-[var(--color-grey)]' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
      }`}
    >
      {justAdded ? (
        <>
          <Check size={20} />
          Ditambahkan!
        </>
      ) : (
        <>
          <ShoppingCart size={20} />
          {isInCart(product.id) ? 'Tambah Lagi' : 'Tambahkan ke Keranjang'}
        </>
      )}
    </button>
  );
}

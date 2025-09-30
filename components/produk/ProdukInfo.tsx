// components/ProductInfo.tsx
'use client';

import AddToCartButton from './AddToCartButton';
import { Product } from '@/types/product';

export default function ProductInfo({ product }: { product: Product }) {
  return (
    <div className="flex flex-col justify-center space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-[var(--color-gold)] font-poppins">{product.name}</h1>
        <p className="text-gray-500 mt-1">Kategori: {product.category.name}</p>
      </div>

      <p className="text-gray-700 leading-relaxed">{product.description}</p>

      <div>
        <p className="text-xl font-semibold text-gray-800">Rp {parseInt(product.price).toLocaleString('id-ID')}</p>
        <p className={`mt-1 text-sm ${product.isAvailable ? 'text-green-600' : 'text-red-500'}`}>{product.isAvailable ? 'Tersedia' : 'Stok Habis'}</p>
      </div>

      <AddToCartButton product={product} />
    </div>
  );
}

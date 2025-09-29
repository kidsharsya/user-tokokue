'use client';

import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, XCircle, ShoppingCart } from 'lucide-react';

interface ProductImage {
  id: string;
  productId: string;
  imageUrl: string;
  isThumbnail: boolean;
}

interface Product {
  id: string;
  name: string;
  slug: string; // ✅ tambahkan slug biar bisa ke detail
  price: string;
  isAvailable: boolean;
  images: ProductImage[];
}

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const imageUrl = product.images[0]?.imageUrl ? `http://localhost:5000${product.images[0].imageUrl}` : '/placeholder.png';

        return (
          <div key={product.id} className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
            {/* Link ke detail produk */}
            <Link href={`/koleksi/${product.slug}`} className="flex-grow flex flex-col">
              {/* Gambar Produk */}
              <div className="relative w-full h-56 overflow-hidden">
                <Image src={imageUrl} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>

              {/* Detail Produk */}
              <div className="p-5 flex flex-col flex-grow">
                <h2 className="text-lg font-semibold text-gray-800 group-hover:text-[var(--color-gold)] transition">{product.name}</h2>
                <p className="text-gray-600 mt-1 text-sm">Rp {Number(product.price).toLocaleString('id-ID')}</p>

                {/* Status */}
                <div className="mt-3 flex items-center gap-2">
                  {product.isAvailable ? <CheckCircle className="text-green-500 w-5 h-5" /> : <XCircle className="text-red-500 w-5 h-5" />}
                  <span className="text-sm text-gray-600">{product.isAvailable ? 'Tersedia' : 'Tidak tersedia'}</span>
                </div>
              </div>
            </Link>

            {/* Tombol (tetap di luar Link biar tidak ikut redirect) */}
            <div className="px-5 pb-5">
              <button
                disabled={!product.isAvailable}
                className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition ${
                  product.isAvailable ? 'bg-[var(--color-gold)] text-white hover:bg-[var(--color-grey)]' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <ShoppingCart className="w-5 h-5" />
                Tambah ke Keranjang
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

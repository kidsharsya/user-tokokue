// app/produk/[slug]/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import ProductGallery from '@/components/produk/ProdukGaleri';
import ProductInfo from '@/components/produk/ProdukInfo';

interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: string;
  isAvailable: boolean;
  images: { id: string; productId?: string; imageUrl: string; isThumbnail: boolean }[];
  category: { id: string; name: string; slug: string; description: string };
}

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/products/${slug}`);
        if (!res.ok) throw new Error('Failed to fetch product');
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error('Error fetching product:', err);
      }
    };
    if (slug) fetchProduct();
  }, [slug]);

  if (!product) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-12 text-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Tombol Back */}
      <button onClick={() => router.back()} className="mb-8 flex items-center gap-2 text-gray-700 hover:text-[var(--color-gold)] transition">
        <ArrowLeft className="w-5 h-5" />
        <span>Kembali</span>
      </button>

      {/* Konten Detail */}
      <section className="grid md:grid-cols-2 gap-12">
        {/* Gallery */}
        <ProductGallery images={product.images} />

        {/* Info */}
        <ProductInfo product={product} />
      </section>
    </div>
  );
}

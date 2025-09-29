'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductImage {
  id: string;
  productId?: string;
  imageUrl: string;
  isThumbnail: boolean;
}

interface GalleryProps {
  images: ProductImage[];
}

export default function ProductGallery({ images }: GalleryProps) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:5000';
  const baseStaticUrl = baseUrl.replace('/api', '');

  const imgs = images ?? [];
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % imgs.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + imgs.length) % imgs.length);
  };

  if (imgs.length === 0) {
    return (
      <div className="rounded-lg overflow-hidden shadow-md">
        <Image src="/placeholder.png" alt="No product image" width={600} height={400} className="w-full h-[350px] object-cover" />
      </div>
    );
  }

  return (
    <div className="relative w-full">
      {/* Main image */}
      <div className="rounded-lg overflow-hidden shadow-md">
        <Image src={`${baseStaticUrl}${imgs[current].imageUrl}`} alt={`Product image ${imgs[current].id}`} width={600} height={400} className="w-full h-[350px] object-cover" />
      </div>

      {/* Prev / Next buttons */}
      {imgs.length > 1 && (
        <>
          <button onClick={prevSlide} className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={nextSlide} className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition">
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Thumbnail indicators */}
      {imgs.length > 1 && (
        <div className="flex justify-center mt-4 gap-2">
          {imgs.map((_, index) => (
            <button key={index} onClick={() => setCurrent(index)} className={`w-3 h-3 rounded-full ${index === current ? 'bg-[var(--color-gold)]' : 'bg-gray-400'} transition`} />
          ))}
        </div>
      )}
    </div>
  );
}

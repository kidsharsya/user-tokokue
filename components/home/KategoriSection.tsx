'use client';

import Image from 'next/image';

const collections = [
  {
    title: 'Signature Entremets',
    image: '/koleksi/signature.jpg',
  },
  {
    title: 'Celebration Cakes',
    image: '/koleksi/celebrations.jpg',
  },
  {
    title: 'Petit Gâteaux',
    image: '/koleksi/petit.jpg',
  },
  {
    title: 'Limited Edition',
    image: '/koleksi/limited.png',
  },
];

export default function ProdukSection() {
  return (
    <section className="bg-[var(--color-grey)] py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Judul */}
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-gold)] mb-12 font-poppins">Mahakarya Kami</h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {collections.map((item, idx) => (
            <div key={idx} className="relative rounded-xl overflow-hidden group shadow-lg">
              <Image src={item.image} alt={item.title} width={600} height={400} className="w-full h-[250px] md:h-[300px] object-cover group-hover:scale-105 transition-transform duration-500" />

              {/* Overlay */}
              <div className="absolute bottom-0 inset-x-0 h-[60px] bg-black/40 flex items-center justify-center">
                <p className="text-lg md:text-xl font-semibold text-[var(--color-gold)] font-poppins drop-shadow-md text-center">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

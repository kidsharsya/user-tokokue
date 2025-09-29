'use client';

import { useEffect, useState } from 'react';
import { Search } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  slug: string;
}

interface ProductFiltersProps {
  onSearch: (value: string) => void;
  onCategoryChange: (categoryId: string | null) => void;
}

export default function ProductFilters({ onSearch, onCategoryChange }: ProductFiltersProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/categories');
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="mb-8">
      {/* Search */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="relative w-full sm:w-1/2">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Cari produk..."
            onChange={(e) => onSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-[var(--color-gold)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-3 mt-6 justify-center sm:justify-start">
        <button
          onClick={() => {
            setActiveCategory(null);
            onCategoryChange(null);
          }}
          className={`px-4 py-2 rounded-full text-sm font-medium transition ${activeCategory === null ? 'bg-[var(--color-gold)] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
        >
          Semua
        </button>

        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              setActiveCategory(cat.id);
              onCategoryChange(cat.id);
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${activeCategory === cat.id ? 'bg-[var(--color-gold)] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            {cat.name}
          </button>
        ))}
      </div>
    </div>
  );
}

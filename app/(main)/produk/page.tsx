'use client';

import { useEffect, useState } from 'react';
import ProductFilters from '@/components/produk/ProdukFilter';
import ProductList from '@/components/produk/ProdukList';

interface ProductImage {
  id: string;
  productId: string;
  imageUrl: string;
  isThumbnail: boolean;
}

interface Product {
  id: string;
  name: string;
  slug: string;
  price: string;
  isAvailable: boolean;
  images: ProductImage[];
  categoryId: string;
}

export default function KoleksiPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/products');
        const data = await res.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  // Filter products whenever search/category changes
  useEffect(() => {
    let filtered = products;

    if (searchQuery) {
      filtered = filtered.filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    if (selectedCategory) {
      filtered = filtered.filter((p) => p.categoryId === selectedCategory);
    }

    setFilteredProducts(filtered);
  }, [searchQuery, selectedCategory, products]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Daftar Produk</h1>

      <ProductFilters onSearch={setSearchQuery} onCategoryChange={setSelectedCategory} />

      <ProductList products={filteredProducts} />
    </div>
  );
}

'use client';

import { useEffect, useState } from 'react';
import ProductFilters from '@/components/produk/ProdukFilter';
import ProductList from '@/components/produk/ProdukList';
import { Product } from '@/types/product';
import { getProducts } from '@/services/product';

export default function ProdukPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
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
      filtered = filtered.filter((p) => p.category.id === selectedCategory);
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

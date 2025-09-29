import axios from 'axios';
import type { Product } from '@/types/product';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Get all products
export async function getProducts(): Promise<Product[]> {
  const res = await axios.get(`${API_URL}/products`);
  return res.data;
}

// Get product by slug
export async function getProductBySlug(slug: string): Promise<Product> {
  const res = await axios.get(`${API_URL}/products/${slug}`);
  return res.data;
}

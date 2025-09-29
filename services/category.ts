import axios from 'axios';
import type { Category } from '@/types/category';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Get all categories
export async function getCategories(): Promise<Category[]> {
  const res = await axios.get(`${API_URL}/categories`);
  return res.data;
}

// Get category by slug
export async function getCategoryBySlug(slug: string): Promise<Category> {
  const res = await axios.get(`${API_URL}/categories/${slug}`);
  return res.data;
}

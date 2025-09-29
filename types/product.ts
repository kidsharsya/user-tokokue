import type { Category } from './category';

export interface ProductImage {
  id: string;
  productId?: string; // optional
  imageUrl: string;
  isThumbnail: boolean;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description?: string;
  price: string;
  isAvailable: boolean;
  images: ProductImage[];
  category: Category;
}

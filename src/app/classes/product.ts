import { Category } from './category';
import { Shop } from './shop';

// Product Colors
export type ProductColor = 'white' | 'black' | 'red' | 'green' | 'purple' | 'yellow' | 'blue' | 'gray' | 'orange' | 'pink';

// Product Size
export type ProductSize = 'M' | 'L' | 'XL';

// Product Tag
export type ProductTags = 'nike' | 'puma' | 'lifestyle' | 'caprese';

// Product
export interface Product {
  id?: number;
  name?: string;
  price?: number;
  salePrice?: number;
  discount?: number;
  pictureUrl?: string;
  shortDetails?: string;
  description?: string;
  stock?: number;
  new?: boolean;
  sale?: boolean;
  category?: Category;
  shop?: Shop;
  isActive?: boolean;
  creationDate?: Date;
  colors?: ProductColor[];
  size?: ProductTags[];
  tags?: ProductSize[];
  variants?: any[];
}

// Color Filter
export interface ColorFilter {
  color?: ProductColor;
}

// Tag Filter
export interface TagFilter {
  tag?: ProductTags;
}

import { Category } from './category';
import { Shop } from './shop';
import { Tag } from './tag';

// Product Colors
export type ProductColor = 'white' | 'black' | 'red' | 'green' | 'purple' | 'yellow' | 'blue' | 'gray' | 'orange' | 'pink';

// Product Size
export type ProductSize = 'M' | 'L' | 'XL';

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
  priceWithoutTaxes?: number;
  taxRate?: number;
  new?: boolean;
  sale?: boolean;
  category?: Category;
  shop?: Shop;
  isActive?: boolean;
  creationDate?: Date;
  colors?: ProductColor[];
  size?: ProductSize[];
  variants?: any[];
  tags?: Tag[];
  inventoryCode?: string;
}

// Color Filter
export interface ColorFilter {
  color?: ProductColor;
}

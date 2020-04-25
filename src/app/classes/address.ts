import { Product } from './product';

export type Role = 'Admin' | 'Employee';

// Product
export interface Address {
  id?: number;
  addressline?: string;
  city?: string;
  country?: string;
  postalcode?: string;
}

import { Shop } from './shop';
import { Address } from './address';

export type Role = 'Admin' | 'Employee';

// Product
export interface Seller {
  id?: number;
  username?: string;
  firstname?: string;
  lastname?: string,
  role?: Role;
  shop?: Shop;
  address?: Address
}

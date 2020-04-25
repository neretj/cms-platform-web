import { Store } from './store';

export type Role = 'Admin' | 'Employee';

// Product
export interface Seller {
  id?: number;
  username?: string;
  firstname?: string;
  lastname?: string,
  role?: Role;
  store?: Store;
}

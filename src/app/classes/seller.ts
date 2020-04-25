<<<<<<< HEAD
import { Shop } from './shop';
import { Address } from './address';
=======
import { Store } from './store';
>>>>>>> f913468... new branch develop

export type Role = 'Admin' | 'Employee';

// Product
export interface Seller {
  id?: number;
  username?: string;
  firstname?: string;
  lastname?: string,
  role?: Role;
<<<<<<< HEAD
  shop?: Shop;
  address?: Address
=======
  store?: Store;
>>>>>>> f913468... new branch develop
}

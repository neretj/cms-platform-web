import { Address } from './address';

export type Role = 'Admin' | 'Employee';

// Product
export interface Shop {
	id?: number;
	name?: string;
	address?: Address;
}

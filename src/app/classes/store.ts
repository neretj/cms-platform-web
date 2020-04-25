import { Address } from './address';

export type Role = 'Admin' | 'Employee';

// Product
export interface Store {
	id?: number;
	name?: string;
	address?: Address;
}

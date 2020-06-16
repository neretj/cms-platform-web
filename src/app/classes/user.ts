import { Address } from './address';
import { Shop } from './shop';

export class User {
    id: string;
    username: string;
    email: string;
    roles: any[];
    primaryAddress: Address;
    shop: Shop;
}

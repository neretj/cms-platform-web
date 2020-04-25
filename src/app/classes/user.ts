import { Address } from './address';
import { Store } from './store';

export class User {
    id: string;
    username: string;
    email: string;
    roles: any[];
    primaryAddress: Address;
    storecom: Store;
}

import { Shop } from './shop';
import { User } from './user';

export class Notification {
    id?: string;
    description?: string;
    type?: any;
    status?: any;
    store?: Shop;
    user?: User;
    creationDate?: Date;
}

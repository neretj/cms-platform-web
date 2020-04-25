import { Store } from './store';
import { User } from './user';

export class Notification {
    id?: string;
    description?: string;
    type?: any;
    status?: any;
    store?: Store;
    user?: User;
    creationDate?: Date;
}

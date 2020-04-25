<<<<<<< HEAD
import { Shop } from './shop';
=======
import { Store } from './store';
>>>>>>> f913468... new branch develop
import { User } from './user';

export class Notification {
    id?: string;
    description?: string;
    type?: any;
    status?: any;
<<<<<<< HEAD
    store?: Shop;
=======
    store?: Store;
>>>>>>> f913468... new branch develop
    user?: User;
    creationDate?: Date;
}

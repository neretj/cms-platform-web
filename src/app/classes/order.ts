import { CartItem } from './cart-item';
import { Product } from './product';
import { Customer } from './customer';

export type Status = 'CANCELED' | 'PENDING' | 'COMPLETE';

// Order
export interface Order {
    orderDate?: any;
    status?: Status;
    products?: Product[];
    customer?: Customer;
    totalAmount?: any;
}

import { Injectable } from '@angular/core';
import { Product } from '../classes/product';

@Injectable({
    providedIn: 'root'
})
export class ProductUtil {

    constructor() {
    }

    public getProductById(products: Product[], id: number) {
        const product = products.find((p) => {
            return p.id === id;
        });
        return product;
    }

    public setStatus(products: Product[], product: Product) {
        products.forEach((p) => {

        })
    }
}

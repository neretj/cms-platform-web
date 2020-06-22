import { Product } from 'src/app/classes/product';
import { BehaviorSubject, of } from "rxjs";
import { ProductService } from 'src/app/services/product/product.service';
import { catchError, finalize } from "rxjs/operators";
import { MatTableDataSource } from '@angular/material';
 
export class ProductDataSource extends MatTableDataSource<Product> { 
 
    private productsSubject = new BehaviorSubject<Product[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);
    private countSubject = new BehaviorSubject<number>(0);
    public counter$ = this.countSubject.asObservable();

    constructor(private productService: ProductService) { 
        super();
    }
 
    disconnect(): void {
        this.loadingSubject.complete();
        this.countSubject.complete();
    }
 
    loadProducts(pageNumber = 0, pageSize = 10) {
        this.loadingSubject.next(true);
        this.productService.getAllProducts(pageNumber, pageSize)
            .pipe(
                catchError(() => of([])),
                finalize(() => this.loadingSubject.next(false))
            )
            .subscribe((data: any) => {
                this.countSubject.next(data.totalElements);
                this.data = data.content;
            }
            );
    }
 
}
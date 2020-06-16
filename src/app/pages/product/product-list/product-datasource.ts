import { DataSource } from '@angular/cdk/table';
import { Product } from 'src/app/classes/product';
import { CollectionViewer } from '@angular/cdk/collections';
import { Observable, BehaviorSubject, of } from "rxjs";
import { ProductService } from 'src/app/services/product/product.service';
import { catchError, finalize } from "rxjs/operators";
 
export class ProductDataSource implements DataSource<Product>{
 
    private todoSubject = new BehaviorSubject<Product[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);
    private countSubject = new BehaviorSubject<number>(0);
    public counter$ = this.countSubject.asObservable();
 
    constructor(private todoService: ProductService) { }
 
    connect(collectionViewer: CollectionViewer): Observable<Product[]> {
        return this.todoSubject.asObservable();
    }
 
    disconnect(collectionViewer: CollectionViewer): void {
        this.todoSubject.complete();
        this.loadingSubject.complete();
        this.countSubject.complete();
    }
 
    loadTodos(pageNumber = 0, pageSize = 10) {
        this.loadingSubject.next(true);
        this.todoService.getAllProducts(pageNumber, pageSize)
            .pipe(
                catchError(() => of([])),
                finalize(() => this.loadingSubject.next(false))
            )
            .subscribe((data: any) => {
                this.todoSubject.next(data.content);
                this.countSubject.next(data.totalElements);
            }
            );
    }
 
}
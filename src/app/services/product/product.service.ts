import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/classes/product';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

const API_URL = 'http://localhost:8888/api/products/';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements Resolve<any> {

  products = [];
  onProductsChanged: BehaviorSubject<any>;

  constructor(
    private _httpClient: HttpClient
  ) {
    // Set the defaults
    this.onProductsChanged = new BehaviorSubject({});
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {

      Promise.all([
        this.getProducts()
      ]).then(
        () => {
          resolve();
        },
        reject
      );
    });
  }

  getProducts(): Promise<any> {
    return new Promise((resolve, reject) => {
      this._httpClient.get(API_URL + 'all', {
        params: new HttpParams()
          .set('page', "0")
          .set('size', "20")
      })
        .subscribe((response: any) => {
          this.products = response;
          this.onProductsChanged.next(this.products);
          resolve(response);
        }, reject);
    });
  }

  getAllProducts(page: number, size: number) {
    return this._httpClient.get(API_URL + 'all', {
      params: new HttpParams()
        .set('page', page.toString())
        .set('size', size.toString())
    }).pipe(
      map(res => res)
    );
  }

  findById(id: number) {
    return this._httpClient.get(API_URL + 'find/id', {
      params: new HttpParams()
        .set('id', id.toString())
    }).pipe(
      map(res => res['content'])
    );
  }

  findOne(id: number) {
    return this._httpClient.get(API_URL + 'find/id', {
      params: new HttpParams()
        .set('id', id.toString())
    }).pipe(
      map(res => res['content'])
    );
  }


  delete(id: number) {
    return this._httpClient.delete(API_URL + 'delete', {
      params: new HttpParams()
        .set('username', id.toString())
    }).pipe(
      map(res => res['content'])
    );
  }

  updateProduct(product: Product) {
    return this._httpClient.put(API_URL + 'update/id', {
      params: new HttpParams()
        .set('product', product.toString())
    }).pipe(
      map(res => res['content'])
    );
  }

  save(product: Product) {
    return this._httpClient.post(API_URL + 'create', {
      params: new HttpParams()
        .set('product', product.toString())
    }).pipe(
      map(res => res['content'])
    );
  }

}

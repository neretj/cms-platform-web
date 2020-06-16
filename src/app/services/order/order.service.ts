import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

const API_URL = 'http://localhost:8888/api/orders/';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orders = [];

  constructor(private _httpClient: HttpClient) {
  }

  getLastOrders() {
    return this._httpClient.get(API_URL + 'last')
      .pipe(
        map(res => res)
      );
  }
}

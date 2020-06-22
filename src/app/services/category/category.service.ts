import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

const API_URL = 'http://localhost:8888/api/category/';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  orders = [];

  constructor(private _httpClient: HttpClient) {
  }

  getAllCategories() {
    return this._httpClient.get(API_URL + 'all')
      .pipe(
        map(res => res)
      );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/classes/customer';
import { map } from 'rxjs/operators';

const API_URL = 'http://localhost:8888/api/customers/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  users = [];

  public sendGetRequest() {
    return this.http.get(API_URL);
  }

  getAllCustomers(page: number, size: number) {
    return this.http.get(API_URL + 'find/all', {
      params: new HttpParams()
        .set('page', page.toString())
        .set('size', size.toString())
    }).pipe(
      map(res => res)
    );
  }

  findByUsername(username: string) {
    return this.http.get(API_URL + 'find/username', {
      params: new HttpParams()
        .set('username', username.toString())
    }).pipe(
      map(res => res['content'])
    );
  }

  findOne(id: number) {
    return this.http.get(API_URL + 'find/id', {
      params: new HttpParams()
        .set('id', id.toString())
    }).pipe(
      map(res => res['content'])
    );
  }


  delete(id: number) {
    return this.http.delete(API_URL + 'delete', {
      params: new HttpParams()
        .set('username', id.toString())
    }).pipe(
      map(res => res['content'])
    );
  }

  updateCustomer(customer: Customer) {
    return this.http.put(API_URL + 'update/id', {
      params: new HttpParams()
        .set('customer', customer.toString())
    }).pipe(
      map(res => res['content'])
    );
  }

  save(customer: Customer) {
    return this.http.post(API_URL + 'create', {
      params: new HttpParams()
        .set('customer', customer.toString())
    }).pipe(
      map(res => res['content'])
    );
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
}

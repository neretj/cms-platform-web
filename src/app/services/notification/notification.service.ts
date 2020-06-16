import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

const API_URL = 'http://localhost:8888/api/notifications/';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private _httpClient: HttpClient) {
  }

  getOpenNotifications(storeId: number) {
    return this._httpClient.get(API_URL + 'all', {
      params: new HttpParams()
        .set('storeId', storeId.toString())
    })
      .pipe(
        map(res => res)
      );
  }
}

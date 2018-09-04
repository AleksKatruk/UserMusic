import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public url: string = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http:  HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(this.url);
  }
  getAlbum(id): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/albums?userId='+ id);
  }
}

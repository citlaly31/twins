import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  private apiUrl1 = 'https://jsonplaceholder.typicode.com/posts';
  private apiUrl2 = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  // Petición para obtener posts
  getPosts(): Observable<any> {
    return this.http.get(this.apiUrl1);
  }

  // Petición para obtener usuarios
  getUsers(): Observable<any> {
    return this.http.get(this.apiUrl2);
  }

  deleteUsers(): Observable<any> {
    return this.http.delete(this.apiUrl2);
  }
}

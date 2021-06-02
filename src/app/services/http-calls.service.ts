import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class HttpCallsService {

  httpOptions = {
    headers: new HttpHeaders().set('Content-type', 'application/json, charset=utf-8')
  }

  constructor(private http: HttpClient) {  }

  getUser(id: number): Observable<User[]> {
    let params = new HttpParams().set('id', id.toString());
    let headers = new HttpHeaders().set('Authorization', 'secretToken')

    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users', {params, headers}).pipe(
      tap( x => console.log(x) )
    );
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users').pipe(
      // map( x => x.filter(u => u.id == 1) ),
      tap( x => console.log(x) )
    );
  }
 
  setUser(user: User) {
    return this.http.post<User>('https://jsonplaceholder.typicode.com/users', user, this.httpOptions).pipe(
      // map(x => x.id),
      // tap(x => console.log(x))
    );
  }
}

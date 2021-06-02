import { Injectable } from '@angular/core';
import { SimpleUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(user: SimpleUser) {
    if(user.username === 'admin' || user.password === 'admin') {
      localStorage.setItem('user', user.username);
      return true;
    }
  }

  logout() {
    localStorage.removeItem('user');
  }

  getUser(): string {
    return localStorage.getItem('user');
  }

  isLoggedIn(): boolean {
    return this.getUser() != null;
  }
}

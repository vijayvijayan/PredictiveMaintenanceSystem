import { Injectable, signal } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { userModel } from '../Interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedInUser = signal<userModel | null>(null);

  constructor() {
    this.loadUserFromToken();
  }

  setLoggedInUser(user: userModel) {
    this.loggedInUser.set(user);
  }

  getLoggedInUser() {
    return this.loggedInUser();
  }

  logout() {
    this.loggedInUser.set(null);
    localStorage.removeItem('token');
  }

  private loadUserFromToken() {

    const localToken = localStorage.getItem('token');

    if (localToken) {

      const user = jwtDecode<userModel>(localToken);

      this.setLoggedInUser({
        fullName: user.fullName,
        id: user.id,
        email: user.email,
        role: user.role
      });
    }
  }
}
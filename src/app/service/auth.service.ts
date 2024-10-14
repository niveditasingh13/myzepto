import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // constructor() { }
  private users: { username:
    string
    ; password:
    string
    }[] = [];
  login(username: string, password: string): boolean {
    const user = this.users.find(user => user.username === username && user.password === password);
    if (user) {
      const fakeToken = '1000'; // Set token
      localStorage.setItem('token', fakeToken);
      return true; // Successful login
    }
    return false; // Failed login
  }
}

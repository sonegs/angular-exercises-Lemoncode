import { Injectable } from '@angular/core';
import { LoginEntity } from '../interfaces/login-entity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login({username, password}: LoginEntity): boolean{

    //if (username == 'master8@lemoncode.net' && password=='12345678') return true;
    if (username == 'sonegs@hotmail.com' && password=='12345678') {
      localStorage.setItem('user', JSON.stringify({username, password}));
      return true;
    }
    else {
      return false;
    }

  }

  logout(): void{
    localStorage.removeItem('user');
  }

  isLogged(): boolean {
    const getUser = JSON.parse(localStorage.getItem('user')!);
    if (getUser) return true; else return false;
  }

  getUsername(): string{
    const getUser = JSON.parse(localStorage.getItem('user')!);
    return getUser.username;
  }

}

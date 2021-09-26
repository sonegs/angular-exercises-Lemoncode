import { Injectable } from '@angular/core';
import { LoginEntity } from '../interfaces/login-entity';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  login({username, password}: LoginEntity): Observable<boolean>{

    if (username == 'master8@lemoncode.net' && password=='12345678') {

      localStorage.setItem('user', JSON.stringify({username, password}));

      return of(true).pipe( delay(2000) )
    }
    else {
      return of(false).pipe( delay(2000) );
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
    if(getUser) {

      return getUser.username;
    } else {
      return '';
    }
  }

}

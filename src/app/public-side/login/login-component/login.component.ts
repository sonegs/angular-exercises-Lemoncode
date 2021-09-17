import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { LoginEntity } from '../../../interfaces/login-entity';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  newLogin: LoginEntity;

  constructor(private router: Router) {
    this.newLogin = {
      username: '',
      password: ''
    }
  }

  ngOnInit(): void {
  }

  goLogin(){ // Va hacia el servicio Login
    const auth = new AuthService();
    const username: string = this.newLogin.username;
    const password: string = this.newLogin.password;

    auth.login({username, password});
    if (auth.login({username, password})) {
      auth.isLogged();
      this.goToDashboard();
    }
  }

  goToDashboard(){
    this.router.navigate(['/dashboard']);
  }
}

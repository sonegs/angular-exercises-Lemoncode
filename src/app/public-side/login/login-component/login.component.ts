import { Component, OnInit} from '@angular/core';
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
  username: string = '';
  password: string = '';
  loginResponse: boolean = false;
  loading: boolean = false;
  loginInvalid: boolean = false;

  constructor(private router: Router){
    this.newLogin = {
      username: '',
      password: ''
    }
  }

  ngOnInit(): void {
  }

  goLogin(){ // Va hacia el servicio Login
    const auth = new AuthService();
    this.username = this.newLogin.username;
    this.password = this.newLogin.password;
    this.loading = true; // activamos el gif

    auth.login(this.newLogin).subscribe({
      next: (data) => {

        this.loading = false; // quitamos el gif

        if(data){
          this.router.navigate(['/dashboard']);
          auth.isLogged();
        } else {
          this.loginInvalid = true
        }
      }

    });

  };





}

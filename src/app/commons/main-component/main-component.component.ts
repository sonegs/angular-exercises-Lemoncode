import { Component, OnInit } from '@angular/core';
import { LoginEntity } from '../../interfaces/login-entity';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss']
})
export class MainComponentComponent implements OnInit {

  constructor() { }

  //dato: Storage;
  ngOnInit(): void {
  }

  // auth = new AuthService();
  // isLogin = this.auth.isLogged();

  user:LoginEntity = {
    username: '',
    password: ''
  };

  // setLogin(){

  //   console.log('main-component');
  //   this.isLogin = true;
  //   //this.dato = JSON.parse();

  //   //console.log(localStorage.getItem('user'));
  //   //return this.isLogin;

  // }
}

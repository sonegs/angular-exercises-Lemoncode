import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  auth = new AuthService();
  logged: boolean = false;

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  ifLogged() { // Va hacia el servicio isLogged

    if(this.auth.isLogged()) {
      return true;
    } else {
      return false;
    }
  };


  isLogOut = () => {
    this.auth.logout();
    this.router.navigate(['/home']);
    };


  }

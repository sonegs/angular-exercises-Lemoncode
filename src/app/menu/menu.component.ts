import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  auth = new AuthService();
  constructor() {

  }

  ngOnInit(): void { }


}

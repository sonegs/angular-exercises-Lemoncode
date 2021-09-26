import { Component, OnInit } from '@angular/core';
import { LoginEntity } from '../../interfaces/login-entity';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss']
})
export class MainComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  user:LoginEntity = {
    username: '',
    password: ''
  };

}

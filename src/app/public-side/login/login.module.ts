import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login-component/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }

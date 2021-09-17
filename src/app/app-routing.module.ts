import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './public-side/home/home.component';
import { LoginComponent } from './public-side/login/login-component/login.component';
import { AboutComponent } from './public-side/about/about.component';
import { DashboardComponent } from './private-side/dashboard/dashboard.component';
import { GalleryComponent } from './private-side/gallery/gallery.component';
import { CrudComponent } from './private-side/crud/crud.component';
import { ProfileComponent } from './private-side/profile/profile.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'crud', component: CrudComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './public-side/home/home.component';
import { LoginModule } from './public-side/login/login.module';
import { AboutComponent } from './public-side/about/about.component';
import { DashboardComponent } from './private-side/dashboard/dashboard.component';
import { ProfileComponent } from './private-side/profile/profile.component';
import { FooterComponent } from './commons/footer/footer.component';
import { CrudComponent } from './private-side/crud/crud.component';
import { GalleryComponent } from './private-side/gallery/gallery.component';
import { MainComponentComponent } from './commons/main-component/main-component.component';
import { RotateDirective } from './directives/rotate.directive';
import { GallerySlicePipe } from './private-side/gallery/pipe/gallery-slice.pipe';
import { ReweModule } from './public-side/rewe/rewe.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    DashboardComponent,
    ProfileComponent,
    FooterComponent,
    CrudComponent,
    GalleryComponent,
    MainComponentComponent,
    RotateDirective,
    GallerySlicePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    LoginModule,
    ReweModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

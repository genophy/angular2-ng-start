import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdCardModule, MdMenuModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from '../component/menu/menu.component';

import { AuthGuard } from '../service/auth/auth-guard.service';
import { AuthService } from '../service/auth/auth.service';
import { AboutComponent } from './about/about.component';
import { MeComponent } from './about/me/me.component';
import { UsComponent } from './about/us/us.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiscussComponent } from './discuss/discuss.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PhotoComponent } from './photo/photo.component';

@NgModule({
  declarations: [
    MeComponent,
    AboutComponent,
    AppComponent,
    DiscussComponent,
    HomeComponent,
    UsComponent,
    LoginComponent,
    MenuComponent,
    PhotoComponent,
  ],
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MdCardModule,
    MdMenuModule,
    BrowserAnimationsModule,
  ],
  providers:    [AuthService, AuthGuard],
  bootstrap:    [AppComponent],
})
export class AppModule {
}

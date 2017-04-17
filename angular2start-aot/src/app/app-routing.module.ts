import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MenuComponent } from '../component/menu/menu.component';
import { AuthGuard } from '../service/auth/auth-guard.service';
import { AboutComponent } from './about/about.component';
import { MeComponent } from './about/me/me.component';
import { UsComponent } from './about/us/us.component';
import { DiscussComponent } from './discuss/discuss.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PhotoComponent } from './photo/photo.component';

const routes: Routes = [
  {
    path:     'about', component: AboutComponent,
    children: [
      {path: 'me', component: MeComponent, canActivate: [AuthGuard]},
      {path: 'us', component: UsComponent},
    ],
  },
  {path: 'discuss', component: DiscussComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'photo', component: PhotoComponent},
  {path: '', children: []},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

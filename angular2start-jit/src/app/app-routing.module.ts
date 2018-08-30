import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {SelectivePreloadingStrategyServiceService} from '../service/selective-preloading-strategy-service.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', children: []},
  {path: 'about', loadChildren: './about#AboutModule'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, preloadingStrategy: SelectivePreloadingStrategyServiceService})],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

/**
 * Created by eno on 2017/04/09.
 */

import { Routes } from '@angular/router';
import { AuthGuard } from '../../service/auth/auth-guard.service';
import { AboutComponent } from './about.component';


// 定义常量 嵌套自路由
const childRoutes: Routes = [
  {path: 'me', loadChildren: './me#MeModule', canActivate: [AuthGuard]},
  {path: 'us', loadChildren: './us#UsModule'},
];


export const routes = [
  {
    path:      '',
    component: AboutComponent,
    children:  childRoutes,
  },
];

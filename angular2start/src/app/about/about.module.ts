/**
 * Created by eno on 2017/04/09.
 */


import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';
import { routes } from './about.routes';
@NgModule({
  declarations: [
    AboutComponent,
  ],
  imports:      [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class AboutModule {
  public static routes = routes;
}

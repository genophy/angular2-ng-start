/**
 * Created by eno on 2017/04/09.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { UsComponent } from './us.component';
import { routes } from './us.routes';


@NgModule({
  declarations: [
    UsComponent,
  ],
  imports:      [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class UsModule {
  public static routes = routes;
}

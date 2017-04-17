/**
 * Created by eno on 2017/04/09.
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MeComponent } from './me.component';
import { routes } from './me.routes';


@NgModule({
  declarations: [
    MeComponent,
  ],
  imports:      [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class MeModule {
  public static routes = routes;
}

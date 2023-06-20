import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PagesModule } from '../pages.module';
import { HomePageComponent } from './home-page.component';



@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
    //HomePageRoutingModule,
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule { }

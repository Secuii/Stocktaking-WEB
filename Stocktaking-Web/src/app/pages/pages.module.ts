import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { MainPageModule } from './main-page/main-page.module';



@NgModule({
  declarations: 
  [
  ],
  imports: 
  [
    CommonModule,
    MainPageModule
  ]
})
export class PagesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypePageRoutingModule } from './type-page-routing.module';
import { PagesModule } from '../pages.module';
import { TypePageComponent } from './type-page.component';
import { AppModule } from 'src/app/app.module';


@NgModule({
  declarations: [
    TypePageComponent
  ],
  imports: [
    //CommonModule,
    //TypePageRoutingModule,
    AppModule
  ],
  exports: [
    TypePageComponent
  ]
})
export class TypePageModule { }

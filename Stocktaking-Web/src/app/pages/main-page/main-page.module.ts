import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { PagesModule } from '../pages.module';
import { MainPageComponent } from './main-page.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { AppModule } from 'src/app/app.module';


@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    //CommonModule,
    //MainPageRoutingModule,
    AppModule
    //ComponentsModule,
    //PagesModule,
  ],
  exports: [
    //MainPageComponent
  ]
})
export class MainPageModule { }

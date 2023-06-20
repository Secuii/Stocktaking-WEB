import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphicsPageRoutingModule } from './graphics-page-routing.module';
import { PagesModule } from '../pages.module';
import { GraphicsPageComponent } from './graphics-page.component';
import { AppModule } from 'src/app/app.module';


@NgModule({
  declarations: [
    GraphicsPageComponent
  ],
  imports: [
    //CommonModule,
    //GraphicsPageRoutingModule,
    AppModule
  ],
  exports: [
    GraphicsPageComponent
  ]
})
export class GraphicsPageModule { }

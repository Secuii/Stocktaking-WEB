import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientPageRoutingModule } from './client-page-routing.module';
import { PagesModule } from '../pages.module';
import { AppModule } from 'src/app/app.module';
import { ClientPageComponent } from './client-page.component';


@NgModule({
  declarations: [
    ClientPageComponent
  ],
  imports: [
    //CommonModule,
    //ClientPageRoutingModule,
    AppModule
  ],
  exports: [
    ClientPageComponent
  ]
})
export class ClientPageModule { }

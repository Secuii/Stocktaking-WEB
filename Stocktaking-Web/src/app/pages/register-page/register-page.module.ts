import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterPageRoutingModule } from './register-page-routing.module';
import { PagesModule } from '../pages.module';
import { RegisterPageComponent } from './register-page.component';
import { AppModule } from 'src/app/app.module';


@NgModule({
  declarations: [
    RegisterPageComponent
  ],
  imports: [
    //CommonModule,
    //RegisterPageRoutingModule,
    AppModule
  ],
  exports: [
    RegisterPageComponent
  ]
})
export class RegisterPageModule { }

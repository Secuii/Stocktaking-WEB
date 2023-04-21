import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesModule } from '../pages.module';
import { AppModule } from 'src/app/app.module';
import { LoginPageComponent } from './login-page.component';


@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    //CommonModule,
    //LoginPageRoutingModule,
    AppModule
  ],
  exports: [
    LoginPageComponent
  ]
})
export class LoginPageModule { }

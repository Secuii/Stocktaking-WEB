import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import { LoginComponentModule } from 'src/app/components/LoginRegister/login-component/login-component.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    LoginComponentModule,
    RouterModule
  ],
  exports: [

  ]
})
export class LoginPageModule { }

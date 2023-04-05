import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponentComponent } from './login-component.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LoginComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LoginComponentModule { }

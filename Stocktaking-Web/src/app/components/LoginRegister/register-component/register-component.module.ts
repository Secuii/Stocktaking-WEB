import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { RegisterComponentComponent } from './register-component.component';


@NgModule({
  declarations: [
    RegisterComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class RegisterComponentModule { }

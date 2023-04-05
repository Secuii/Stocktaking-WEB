import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardUserComponentComponent } from './card-user-component.component';


@NgModule({
  declarations: [
    CardUserComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CardUserComponentComponent
  ]
})
export class CardUserComponentModule { }

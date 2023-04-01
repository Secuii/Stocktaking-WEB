import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardMembershipComponentComponent } from './card-membership-component.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CardMembershipComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    CardMembershipComponentComponent
  ]
})
export class CardMembershipComponentModule { }

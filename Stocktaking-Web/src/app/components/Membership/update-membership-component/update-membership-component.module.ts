import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateMembershipComponentComponent } from './update-membership-component.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    UpdateMembershipComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    UpdateMembershipComponentComponent
  ]
})
export class UpdateMembershipComponentModule { }

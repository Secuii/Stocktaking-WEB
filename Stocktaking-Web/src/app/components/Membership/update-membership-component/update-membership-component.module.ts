import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateMembershipComponentComponent } from './update-membership-component.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: 
  [
    UpdateMembershipComponentComponent
  ],
  imports: 
  [
    FormsModule,
    CommonModule,
    RouterModule,
  ],
  exports: 
  [
    UpdateMembershipComponentComponent
  ]
})
export class UpdateMembershipComponentModule { }

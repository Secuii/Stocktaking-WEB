import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListMembershipComponentComponent } from './list-membership-component.component';


@NgModule({
  declarations: [
    ListMembershipComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ListMembershipComponentComponent
  ]
})
export class ListMembershipComponentModule { }

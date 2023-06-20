import { NgModule } from '@angular/core';
import { MembershipPageComponent } from './membership-page.component';
import { ListMembershipComponentModule } from 'src/app/components/Membership/list-membership-component/list-membership-component.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardMembershipComponentModule } from 'src/app/components/Membership/card-membership-component/card-membership-component.module';
import { UpdateMembershipComponentModule } from 'src/app/components/Membership/update-membership-component/update-membership-component.module';




@NgModule({
  declarations: 
  [
    MembershipPageComponent
  ],
  imports: 
  [
    ListMembershipComponentModule,
    RouterModule,
    CommonModule,
    ListMembershipComponentModule,
    CardMembershipComponentModule,
    UpdateMembershipComponentModule
  ],
  exports: 
  [
    MembershipPageComponent
  ]
})
export class MembershipPageModule { }

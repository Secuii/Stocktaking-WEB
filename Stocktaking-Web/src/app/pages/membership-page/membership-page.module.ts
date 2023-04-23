import { NgModule } from '@angular/core';
import { MembershipPageComponent } from './membership-page.component';
import { ListMembershipComponentModule } from 'src/app/components/Membership/list-membership-component/list-membership-component.module';




@NgModule({
  declarations: 
  [
    MembershipPageComponent
  ],
  imports: 
  [
    ListMembershipComponentModule,
  ],
  exports: 
  [
    MembershipPageComponent
  ]
})
export class MembershipPageModule { }

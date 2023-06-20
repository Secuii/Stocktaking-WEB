import { NgModule } from '@angular/core';
import { CardMembershipComponentModule } from './card-membership-component/card-membership-component.module';
import { ListMembershipComponentModule } from './list-membership-component/list-membership-component.module';
import { UpdateMembershipComponentModule } from './update-membership-component/update-membership-component.module';

@NgModule({
    declarations: 
    [
        
    ],
    imports: 
    [
        CardMembershipComponentModule,
        ListMembershipComponentModule,
        UpdateMembershipComponentModule
    ],
    exports: 
    [
        CardMembershipComponentModule,
        ListMembershipComponentModule,
        UpdateMembershipComponentModule
    ]
  })
  export class MembershipComponentModule { }
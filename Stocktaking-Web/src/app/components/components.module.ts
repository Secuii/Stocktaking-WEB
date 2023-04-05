import { SuppliersComponentModule } from './Suppliers/suppliers.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ClientComponentModule } from './Clients/client.module';
import { AttributesComponentModule } from './Attributes/attributes.module';
import { LoginRegisterComponentModule } from './LoginRegister/login-register.module';
import { MembershipComponentModule } from './Membership/membership.module';
import { OtherModule } from './other/other.module';
import { OutRoutingComponentModule } from './OutRouting/out-routing.module';
import { PermissionComponentModule } from './Permission/permission.module';
import { ProductsComponentModule } from './Products/products.module';
import { TypesComponentModule } from './Types/types.module';
import { UserComponentModule } from './User/user.module';
import { ListClientComponentModule } from './Clients/list-client-component/list-client-component.module';
import { ListClientComponentComponent } from './Clients/list-client-component/list-client-component.component';


@NgModule({
  declarations: [  ],
  imports: [
    //CommonModule,
    ComponentsRoutingModule,
    AttributesComponentModule,
    ClientComponentModule,
    LoginRegisterComponentModule,
    MembershipComponentModule,
    OtherModule,
    OutRoutingComponentModule,
    PermissionComponentModule,
    ProductsComponentModule,
    SuppliersComponentModule,
    TypesComponentModule,
    UserComponentModule,
    ListClientComponentModule    
  ],
  exports: [
    //CommonModule,
    ComponentsRoutingModule,
    AttributesComponentModule,
    ClientComponentModule,
    LoginRegisterComponentModule,
    MembershipComponentModule,
    OtherModule,
    OutRoutingComponentModule,
    PermissionComponentModule,
    ProductsComponentModule,
    SuppliersComponentModule,
    TypesComponentModule,
    UserComponentModule,
    ListClientComponentModule
  ]
})
export class ComponentsModule { }

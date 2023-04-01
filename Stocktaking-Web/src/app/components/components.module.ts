import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
//import { CardClientComponentComponent } from './Clients/card-client-component/card-client-component.component';
//import { ListClientComponentComponent } from './Clients/list-client-component/list-client-component.component';
//import { UpdateClientComponentComponent } from './Clients/update-client-component/update-client-component.component';
import { CardProductsComponentComponent } from './Products/card-products-component/card-products-component.component';
import { ListProductsComponentComponent } from './Products/list-products-component/list-products-component.component';
import { UpdateProductsComponentComponent } from './Products/update-products-component/update-products-component.component';
import { ListSuppliersComponentComponent } from './Suppliers/list-suppliers-component/list-suppliers-component.component';
import { CardSuppliersComponentComponent } from './Suppliers/card-suppliers-component/card-suppliers-component.component';
import { UpdateSuppliersComponentComponent } from './Suppliers/update-suppliers-component/update-suppliers-component.component';
import { CardTypesComponentComponent } from './Types/card-types-component/card-types-component.component';
import { ListTypesComponentComponent } from './Types/list-types-component/list-types-component.component';
import { UpdateTypesComponentComponent } from './Types/update-types-component/update-types-component.component';
import { LoginComponentComponent } from './LoginRegister/login-component/login-component.component';
import { RegisterComponentComponent } from './LoginRegister/register-component/register-component.component';
import { CardAttributesComponentComponent } from './Attributes/card-attributes-component/card-attributes-component.component';
import { ListAttributesComponentComponent } from './Attributes/list-attributes-component/list-attributes-component.component';
import { UpdateAttributesComponentComponent } from './Attributes/update-attributes-component/update-attributes-component.component';
import { CardMembershipComponentComponent } from './Membership/card-membership-component/card-membership-component.component';
import { ListMembershipComponentComponent } from './Membership/list-membership-component/list-membership-component.component';
import { UpdateMembershipComponentComponent } from './Membership/update-membership-component/update-membership-component.component';
import { CardPermissionComponentComponent } from './Permission/card-permission-component/card-permission-component.component';
import { ListPermissionComponentComponent } from './Permission/list-permission-component/list-permission-component.component';
import { UpdatePermissionComponentComponent } from './Permission/update-permission-component/update-permission-component.component';
import { CardUserComponentComponent } from './User/card-user-component/card-user-component.component';
import { ListUserComponentComponent } from './User/list-user-component/list-user-component.component';
import { UpdateUserComponentComponent } from './User/update-user-component/update-user-component.component';
import { ClientComponentModule } from './Clients/Client.module';


@NgModule({
  declarations: [
    //CardClientComponentComponent,
    //ListClientComponentComponent,
    //UpdateClientComponentComponent,
    //ClientComponentModule,
    CardProductsComponentComponent,
    ListProductsComponentComponent,
    UpdateProductsComponentComponent,
    ListSuppliersComponentComponent,
    CardSuppliersComponentComponent,
    UpdateSuppliersComponentComponent,
    CardTypesComponentComponent,
    ListTypesComponentComponent,
    UpdateTypesComponentComponent,
    LoginComponentComponent,
    RegisterComponentComponent,
    CardAttributesComponentComponent,
    ListAttributesComponentComponent,
    UpdateAttributesComponentComponent,
    CardMembershipComponentComponent,
    ListMembershipComponentComponent,
    UpdateMembershipComponentComponent,
    CardPermissionComponentComponent,
    ListPermissionComponentComponent,
    UpdatePermissionComponentComponent,
    CardUserComponentComponent,
    ListUserComponentComponent,
    UpdateUserComponentComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    ClientComponentModule
  ]
})
export class ComponentsModule { }

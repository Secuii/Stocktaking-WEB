import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { CardClientComponentComponent } from './Clients/card-client-component/card-client-component.component';
import { ListClientComponentComponent } from './Clients/list-client-component/list-client-component.component';
import { UpdateClientComponentComponent } from './Clients/update-client-component/update-client-component.component';
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


@NgModule({
  declarations: [
    CardClientComponentComponent,
    ListClientComponentComponent,
    UpdateClientComponentComponent,
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
    RegisterComponentComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }

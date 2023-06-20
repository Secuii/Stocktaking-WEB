import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MainPageModule } from './main-page/main-page.module';
import { TypePageModule } from './type-page/type-page.module';
import { AttributePageModule } from './attribute-page/attribute-page.module';
import { ProductPageModule } from './product-page/product-page.module';
import { ClientPageModule } from './client-page/client-page.module';
import { UserPageModule } from './user-page/user-page.module';
import { MembershipPageModule } from './membership-page/membership-page.module';
import { PermissionPageModule } from './permission-page/permission-page.module';
import { SupplierPageModule } from './supplier-page/supplier-page.module';
import { LoginPageModule } from './login-page/login-page.module';




@NgModule({
  declarations:
    [
    ],
  imports:
    [
      MainPageModule,
      TypePageModule,
      AttributePageModule,
      ProductPageModule,
      ClientPageModule,
      UserPageModule,
      MembershipPageModule,
      PermissionPageModule,
      SupplierPageModule,
      HttpClientModule,
      LoginPageModule
    ]
})
export class PagesModule { }

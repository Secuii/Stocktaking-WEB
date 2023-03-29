import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ClientPageComponent } from './client-page/client-page.component';
import { GraphicsPageComponent } from './graphics-page/graphics-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { SupplierPageComponent } from './supplier-page/supplier-page.component';
import { TypePageComponent } from './type-page/type-page.component';


@NgModule({
  declarations: [
    ClientPageComponent,
    GraphicsPageComponent,
    LoginPageComponent,
    MainPageComponent,
    ProductPageComponent,
    RegisterPageComponent,
    SearchPageComponent,
    SupplierPageComponent,
    TypePageComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }

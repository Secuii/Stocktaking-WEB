import { TypePageComponent } from './type-page/type-page.component';
import { SupplierPageComponent } from './supplier-page/supplier-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { GraphicsPageComponent } from './graphics-page/graphics-page.component';
import { ClientPageComponent } from './client-page/client-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', children: [
    {path: 'client-page', component: ClientPageComponent},
    {path: 'graphics-page', component: GraphicsPageComponent},
    {path: 'login-page', component: LoginPageComponent},
    {path: 'main-page', component: MainPageComponent},
    {path: 'product-page', component: ProductPageComponent},
    {path: 'register-page', component: RegisterPageComponent},
    {path: 'search-page', component: SearchPageComponent},
    {path: 'supplier-page', component: SupplierPageComponent},
    {path: 'type-page', component: TypePageComponent},
    {path: '**', redirectTo: 'main-page'}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { TypePageComponent } from './pages/type-page/type-page.component';
import { AttributePageComponent } from './pages/attribute-page/attribute-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ClientPageComponent } from './pages/client-page/client-page.component';
import { SupplierPageComponent } from './pages/supplier-page/supplier-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { MembershipPageComponent } from './pages/membership-page/membership-page.component';
import { PermissionPageComponent } from './pages/permission-page/permission-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes =
  [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },

    {
      path: 'home',
      component: HomePageComponent
    },

    {
      path: 'login',
      component: LoginPageComponent
    },

    {
      path: 'type',
      component: TypePageComponent
    },

    {
      path: 'attribute',
      component: AttributePageComponent
    },

    {
      path: 'product',
      component: ProductPageComponent
    },

    {
      path: 'client',
      component: ClientPageComponent
    },

    {
      path: 'supplier',
      component: SupplierPageComponent
    },

    {
      path: 'user',
      component: UserPageComponent
    },

    {
      path: 'membership',
      component: MembershipPageComponent
    },

    {
      path: 'permission',
      component: PermissionPageComponent
    }

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

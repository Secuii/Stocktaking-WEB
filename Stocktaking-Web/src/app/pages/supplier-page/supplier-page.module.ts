import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesModule } from '../pages.module';
import { SupplierPageComponent } from './supplier-page.component';
import { AppModule } from 'src/app/app.module';
import { ListSuppliersComponentModule } from 'src/app/components/Suppliers/list-suppliers-component/list-suppliers-component.module';


@NgModule({
  declarations: [
    SupplierPageComponent
  ],
  imports: [
    //CommonModule,
    //SupplierPageRoutingModule,
    ListSuppliersComponentModule
  ],
  exports: [
    SupplierPageComponent
  ]
})
export class SupplierPageModule { }

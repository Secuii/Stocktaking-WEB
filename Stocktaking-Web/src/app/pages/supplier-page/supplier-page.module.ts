import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesModule } from '../pages.module';
import { SupplierPageComponent } from './supplier-page.component';
import { AppModule } from 'src/app/app.module';
import { ListSuppliersComponentModule } from 'src/app/components/Suppliers/list-suppliers-component/list-suppliers-component.module';
import { RouterModule } from '@angular/router';
import { CardSuppliersComponentModule } from 'src/app/components/Suppliers/card-suppliers-component/card-suppliers-component.module';
import { UpdateSuppliersComponentModule } from 'src/app/components/Suppliers/update-suppliers-component/update-suppliers-component.module';


@NgModule({
  declarations: [
    SupplierPageComponent
  ],
  imports: [
    //CommonModule,
    //SupplierPageRoutingModule,
    RouterModule,
    CommonModule,
    ListSuppliersComponentModule,
    CardSuppliersComponentModule,
    UpdateSuppliersComponentModule
  ],
  exports: [
    SupplierPageComponent
  ]
})
export class SupplierPageModule { }

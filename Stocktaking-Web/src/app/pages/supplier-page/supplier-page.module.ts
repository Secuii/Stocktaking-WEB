import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesModule } from '../pages.module';
import { SupplierPageComponent } from './supplier-page.component';
import { AppModule } from 'src/app/app.module';


@NgModule({
  declarations: [
    SupplierPageComponent
  ],
  imports: [
    //CommonModule,
    //SupplierPageRoutingModule,
    AppModule
  ],
  exports: [
    SupplierPageComponent
  ]
})
export class SupplierPageModule { }

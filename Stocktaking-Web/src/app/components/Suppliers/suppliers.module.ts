import { NgModule } from '@angular/core';
import { CardSuppliersComponentModule } from './card-suppliers-component/card-suppliers-component.module';
import { ListSuppliersComponentModule } from './list-suppliers-component/list-suppliers-component.module';
import { UpdateSuppliersComponentModule } from './update-suppliers-component/update-suppliers-component.module';



@NgModule({
    declarations: [],
    imports: [
        CardSuppliersComponentModule,
        ListSuppliersComponentModule,
        UpdateSuppliersComponentModule
    ],
    exports: [
        CardSuppliersComponentModule,
        ListSuppliersComponentModule,
        UpdateSuppliersComponentModule
    ]
  })
  export class SuppliersComponentModule { }
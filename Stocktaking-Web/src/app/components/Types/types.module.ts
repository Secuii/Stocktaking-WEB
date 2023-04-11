import { NgModule } from '@angular/core';
import { CardTypesComponentModule } from './card-types-component/card-types-component.module';
import { ListTypesComponentModule } from './list-types-component/list-types-component.module';
import { UpdateTypesComponentModule } from './update-types-component/update-types-component.module';

@NgModule({
    declarations: [],
    imports: [
        CardTypesComponentModule,
        ListTypesComponentModule,
        UpdateTypesComponentModule

    ],
    exports: [
        CardTypesComponentModule,
        ListTypesComponentModule,
        UpdateTypesComponentModule
    ]
  })
  export class TypesComponentModule { }
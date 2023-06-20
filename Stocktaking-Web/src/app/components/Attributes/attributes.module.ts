import { NgModule } from '@angular/core';
import { UpdateAttributesComponentModule } from './update-attributes-component/update-attributes-component.module';
import { ListAttributesComponentModule } from './list-attributes-component/list-attributes-component.module';
import { CardAttributesComponentModule } from "./card-attributes-component/card-attributes-component.module";

@NgModule({
    declarations: [],
    imports: [
        CardAttributesComponentModule,
        ListAttributesComponentModule,
        UpdateAttributesComponentModule
    ],
    exports: [
        CardAttributesComponentModule,
        ListAttributesComponentModule,
        UpdateAttributesComponentModule
    ]
  })
  export class AttributesComponentModule { }
import { NgModule } from '@angular/core';
import { AttributePageComponent } from './attribute-page.component';
import { ListAttributesComponentModule } from 'src/app/components/Attributes/list-attributes-component/list-attributes-component.module';
import { CardAttributesComponentModule } from 'src/app/components/Attributes/card-attributes-component/card-attributes-component.module';
import { UpdateAttributesComponentModule } from 'src/app/components/Attributes/update-attributes-component/update-attributes-component.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations:
    [
      AttributePageComponent
    ],
  imports:
    [
      RouterModule,
      CommonModule,
      ListAttributesComponentModule,
      CardAttributesComponentModule,
      UpdateAttributesComponentModule
    ],
  exports:
    [
      AttributePageComponent
    ]
})
export class AttributePageModule { }

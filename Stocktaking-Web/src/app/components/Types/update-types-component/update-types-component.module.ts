import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UpdateTypesComponentComponent } from './update-types-component.component';
import { FormsModule } from '@angular/forms';


@NgModule
(
  {
    declarations: 
    [
      UpdateTypesComponentComponent
    ],
    imports: 
    [
      FormsModule,
      CommonModule,
      RouterModule
    ],
    exports: 
    [
      UpdateTypesComponentComponent
    ]
  }
)
export class UpdateTypesComponentModule 
{ 
  
}

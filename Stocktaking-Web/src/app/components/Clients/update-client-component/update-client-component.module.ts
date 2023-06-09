import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateClientComponentComponent } from './update-client-component.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UpdateClientComponentComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    UpdateClientComponentComponent
  ]
})
export class UpdateClientComponentModule { }

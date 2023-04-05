import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearchComponentComponent } from './search-component.component';


@NgModule({
  declarations: [
    SearchComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SearchComponentComponent
  ]
})
export class SearchComponentModule { }

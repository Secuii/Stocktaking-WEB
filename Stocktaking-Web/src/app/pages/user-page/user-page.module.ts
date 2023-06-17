import { NgModule } from '@angular/core';
import { UserPageComponent } from './user-page.component';
import { ListUserComponentModule } from 'src/app/components/User/list-user-component/list-user-component.module';
import { CardUserComponentModule } from 'src/app/components/User/card-user-component/card-user-component.module';
import { UpdateUserComponentModule } from 'src/app/components/User/update-user-component/update-user-component.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations:
    [
      UserPageComponent
    ],
  imports:
    [
      RouterModule,
      CommonModule,
      ListUserComponentModule,
      CardUserComponentModule,
      UpdateUserComponentModule
    ],
  exports:
    [
      UserPageComponent
    ]
})
export class UserPageModule { }
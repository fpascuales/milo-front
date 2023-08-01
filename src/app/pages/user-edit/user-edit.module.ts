import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserEditRoutingModule } from './user-edit-routing.module';
import { UserEditComponent } from './user-edit.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    UserEditComponent
  ],
  imports: [
    CommonModule,
    UserEditRoutingModule,
    SharedModule
  ]
})
export class UserEditModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarMenuComponent } from './side-bar-menu.component';

@NgModule({
  declarations: [
    SideBarMenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SideBarMenuComponent
  ]
})
export class SideBarMenuModule { }

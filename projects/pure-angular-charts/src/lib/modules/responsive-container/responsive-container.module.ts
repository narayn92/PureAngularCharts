import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveContainerComponent } from '../../responsive-container/responsive-container.component';



@NgModule({
  declarations: [
    ResponsiveContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ResponsiveContainerComponent
  ]
})
export class ResponsiveContainerModule { }

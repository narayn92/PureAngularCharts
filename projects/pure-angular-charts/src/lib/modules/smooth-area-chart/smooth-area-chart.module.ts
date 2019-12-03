import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicChartModule } from '../basic-chart/basic-chart.module';
import { SmoothAreaChartComponent } from '../../smooth-area-chart/smooth-area-chart.component';



@NgModule({
  declarations: [
    SmoothAreaChartComponent
  ],
  imports: [
    CommonModule,
    BasicChartModule
  ],
  exports: [
    SmoothAreaChartComponent
  ]
})
export class SmoothAreaChartModule { }

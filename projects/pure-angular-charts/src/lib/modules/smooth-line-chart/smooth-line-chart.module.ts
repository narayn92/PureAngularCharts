import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicChartModule } from '../basic-chart/basic-chart.module';
import { SmoothLineChartComponent } from '../../smooth-line-chart/smooth-line-chart.component';



@NgModule({
  declarations: [
    SmoothLineChartComponent
  ],
  imports: [
    CommonModule,
    BasicChartModule
  ],
  exports: [
    SmoothLineChartComponent
  ]
})
export class SmoothLineChartModule { }

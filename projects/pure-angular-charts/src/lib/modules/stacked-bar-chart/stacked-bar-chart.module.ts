import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackedBarChartComponent } from '../../stacked-bar-chart/stacked-bar-chart.component';
import { BasicChartModule } from '../basic-chart/basic-chart.module';



@NgModule({
  declarations: [
    StackedBarChartComponent
  ],
  imports: [
    CommonModule,
    BasicChartModule
  ],
  exports: [
    StackedBarChartComponent
  ]
})
export class StackedBarChartModule { }

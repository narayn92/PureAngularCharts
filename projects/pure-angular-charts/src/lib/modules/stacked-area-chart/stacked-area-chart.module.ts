import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackedAreaChartComponent } from '../../stacked-area-chart/stacked-area-chart.component';
import { BasicChartModule } from '../basic-chart/basic-chart.module';



@NgModule({
  declarations: [StackedAreaChartComponent],
  imports: [
    CommonModule,
    BasicChartModule
  ],
  exports: [
    StackedAreaChartComponent
  ]
})
export class StackedAreaChartModule { }

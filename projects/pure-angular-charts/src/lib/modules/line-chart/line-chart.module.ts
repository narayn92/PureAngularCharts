import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicChartModule } from '../basic-chart/basic-chart.module';
import { LineChartComponent } from '../../line-chart/line-chart.component';



@NgModule({
  declarations: [
    LineChartComponent
  ],
  imports: [
    CommonModule,
    BasicChartModule
  ],
  exports: [
    LineChartComponent
  ]
})
export class LineChartModule { }

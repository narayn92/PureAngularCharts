import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from '../../bar-chart/bar-chart.component';
import { BasicChartModule } from '../basic-chart/basic-chart.module';



@NgModule({
  declarations: [
    BarChartComponent
  ],
  imports: [
    CommonModule,
    BasicChartModule
  ],
  exports: [BarChartComponent]
})
export class BarChartModule { }

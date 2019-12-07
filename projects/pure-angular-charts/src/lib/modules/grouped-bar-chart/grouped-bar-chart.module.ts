import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupedBarChartComponent } from '../../grouped-bar-chart/grouped-bar-chart.component';
import { BasicChartModule } from '../basic-chart/basic-chart.module';

@NgModule({
  declarations: [
    GroupedBarChartComponent
  ],
  imports: [
    CommonModule,
    BasicChartModule
  ],
  exports: [
    GroupedBarChartComponent
  ]
})
export class GroupedBarChartModule { }

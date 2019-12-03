import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicChartModule } from '../basic-chart/basic-chart.module';
import { MultiTypeChartComponent } from '../../multi-type-chart/multi-type-chart.component';



@NgModule({
  declarations: [
    MultiTypeChartComponent
  ],
  imports: [
    CommonModule,
    BasicChartModule
  ],
  exports: [
    MultiTypeChartComponent
  ]
})
export class MultiTypeChartModule { }

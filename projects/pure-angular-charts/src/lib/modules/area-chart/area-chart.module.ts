import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicChartModule } from '../basic-chart/basic-chart.module';
import { AreaChartComponent } from '../../area-chart/area-chart.component';



@NgModule({
  declarations: [
    AreaChartComponent
  ],
  imports: [
    CommonModule,
    BasicChartModule
  ],
  exports: [
    AreaChartComponent
  ]
})
export class AreaChartModule { }

import { NgModule } from '@angular/core';
import { PureAngularChartsComponent } from './pure-angular-charts.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [PureAngularChartsComponent, BarChartComponent],
  imports: [
    CommonModule
  ],
  exports: [PureAngularChartsComponent, BarChartComponent]
})
export class PureAngularChartsModule { }

import { NgModule } from '@angular/core';
import { PureAngularChartsComponent } from './pure-angular-charts.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';



@NgModule({
  declarations: [PureAngularChartsComponent, BarChartComponent],
  imports: [
  ],
  exports: [PureAngularChartsComponent, BarChartComponent]
})
export class PureAngularChartsModule { }

import { NgModule } from '@angular/core';
import { PureAngularChartsComponent } from './pure-angular-charts.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { CommonModule } from '@angular/common';
import { BarComponent } from './components/bar/bar.component';
import { XaxisComponent } from './components/xaxis/xaxis.component';
import { YaxisComponent } from './components/yaxis/yaxis.component';
import { LineComponent } from './components/line/line.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { SmoothLineComponent } from './components/smooth-line/smooth-line.component';
import { SmoothLineChartComponent } from './smooth-line-chart/smooth-line-chart.component';
import { AreaComponent } from './components/area/area.component';
import { SmoothAreaComponent } from './components/smooth-area/smooth-area.component';
import { SmoothAreaChartComponent } from './smooth-area-chart/smooth-area-chart.component';
import { AreaChartComponent } from './area-chart/area-chart.component';



@NgModule({
  declarations: [
    PureAngularChartsComponent,
    BarComponent,
    XaxisComponent,
    YaxisComponent,
    LineComponent,
    BarChartComponent,
    LineChartComponent,
    SmoothLineComponent,
    SmoothLineChartComponent,
    AreaComponent,
    SmoothAreaComponent,
    SmoothAreaChartComponent,
    AreaChartComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PureAngularChartsComponent,
    BarChartComponent,
    LineChartComponent,
    AreaChartComponent,
    SmoothLineChartComponent,
    SmoothAreaChartComponent
  ]
})
export class PureAngularChartsModule { }

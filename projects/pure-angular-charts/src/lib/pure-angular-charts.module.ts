import { NgModule } from '@angular/core';
import { PureAngularChartsComponent } from './pure-angular-charts.component';
import { CommonModule } from '@angular/common';
import { BarChartModule } from './modules/bar-chart/bar-chart.module';
import { LineChartModule } from './modules/line-chart/line-chart.module';
import { AreaChartModule } from './modules/area-chart/area-chart.module';
import { SmoothLineChartModule } from './modules/smooth-line-chart/smooth-line-chart.module';
import { MultiTypeChartModule } from './modules/multi-type-chart/multi-type-chart.module';
import { SmoothAreaChartModule } from './modules/smooth-area-chart/smooth-area-chart.module';

@NgModule({
  declarations: [
    PureAngularChartsComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PureAngularChartsComponent,
    BarChartModule,
    LineChartModule,
    AreaChartModule,
    SmoothLineChartModule,
    SmoothAreaChartModule,
    MultiTypeChartModule
  ]
})
export class PureAngularChartsModule { }

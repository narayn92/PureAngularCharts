import { NgModule } from '@angular/core';
import { PureAngularChartsComponent } from './pure-angular-charts.component';
import { CommonModule } from '@angular/common';
import { BarChartModule } from './modules/bar-chart/bar-chart.module';
import { LineChartModule } from './modules/line-chart/line-chart.module';
import { AreaChartModule } from './modules/area-chart/area-chart.module';
import { SmoothLineChartModule } from './modules/smooth-line-chart/smooth-line-chart.module';
import { MultiTypeChartModule } from './modules/multi-type-chart/multi-type-chart.module';
import { SmoothAreaChartModule } from './modules/smooth-area-chart/smooth-area-chart.module';
import { ResponsiveContainerModule } from './modules/responsive-container/responsive-container.module';
import { GroupedBarChartModule } from './modules/grouped-bar-chart/grouped-bar-chart.module';
import { StackedBarChartModule } from './modules/stacked-bar-chart/stacked-bar-chart.module';

@NgModule({
  declarations: [
    PureAngularChartsComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PureAngularChartsComponent,
    ResponsiveContainerModule,
    BarChartModule,
    LineChartModule,
    AreaChartModule,
    SmoothLineChartModule,
    SmoothAreaChartModule,
    MultiTypeChartModule,
    GroupedBarChartModule,
    StackedBarChartModule
  ]
})
export class PureAngularChartsModule { }

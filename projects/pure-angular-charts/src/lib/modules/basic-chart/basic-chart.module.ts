import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarComponent } from '../../components/bar/bar.component';
import { XaxisComponent } from '../../components/xaxis/xaxis.component';
import { YaxisComponent } from '../../components/yaxis/yaxis.component';
import { LineComponent } from '../../components/line/line.component';
import { AreaComponent } from '../../components/area/area.component';
import { SmoothAreaComponent } from '../../components/smooth-area/smooth-area.component';
import { LineChartComponent } from '../../line-chart/line-chart.component';
import { SmoothLineChartComponent } from '../../smooth-line-chart/smooth-line-chart.component';
import { SmoothAreaChartComponent } from '../../smooth-area-chart/smooth-area-chart.component';
import { AreaChartComponent } from '../../area-chart/area-chart.component';
import { MultiTypeChartComponent } from '../../multi-type-chart/multi-type-chart.component';
import { SmoothLineComponent } from '../../components/smooth-line/smooth-line.component';



@NgModule({
  declarations: [
    BarComponent,
    XaxisComponent,
    YaxisComponent,
    LineComponent,
    SmoothLineComponent,
    AreaComponent,
    SmoothAreaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BarComponent,
    XaxisComponent,
    YaxisComponent,
    LineComponent,
    SmoothLineComponent,
    AreaComponent,
    SmoothAreaComponent
  ]
})
export class BasicChartModule { }

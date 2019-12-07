import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarComponent } from '../../components/bar/bar.component';
import { XaxisComponent } from '../../components/xaxis/xaxis.component';
import { YaxisComponent } from '../../components/yaxis/yaxis.component';
import { LineComponent } from '../../components/line/line.component';
import { AreaComponent } from '../../components/area/area.component';
import { SmoothAreaComponent } from '../../components/smooth-area/smooth-area.component';
import { SmoothLineComponent } from '../../components/smooth-line/smooth-line.component';
import { AxisComponent } from '../../components/axis/axis.component';



@NgModule({
  declarations: [
    BarComponent,
    XaxisComponent,
    YaxisComponent,
    AxisComponent,
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
    AxisComponent,
    LineComponent,
    SmoothLineComponent,
    AreaComponent,
    SmoothAreaComponent
  ]
})
export class BasicChartModule { }

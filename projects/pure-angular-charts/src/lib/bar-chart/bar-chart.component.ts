import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, Xaxis, Yaxis } from '../pure-angular-charts.models';
import { BasicChart } from '../basic-chart';
import { Defaults } from '../defaults';

@Component({
  selector: 'pac-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent extends BasicChart implements OnInit {
  constructor() {
    const defaultOptions: ChartOptions = Defaults.getdefaultOptions();
    super(defaultOptions);
  }

}

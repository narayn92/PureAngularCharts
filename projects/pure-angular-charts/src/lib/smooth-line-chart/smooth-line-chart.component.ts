import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, Xaxis, Yaxis } from '../pure-angular-charts.models';
import { BasicChart } from '../basic-chart';
import { Defaults } from '../defaults';

@Component({
  selector: 'pac-smooth-line-chart',
  templateUrl: './smooth-line-chart.component.html',
  styleUrls: ['./smooth-line-chart.component.scss']
})
export class SmoothLineChartComponent extends BasicChart implements OnInit {
  constructor() {
    super();
  }
}

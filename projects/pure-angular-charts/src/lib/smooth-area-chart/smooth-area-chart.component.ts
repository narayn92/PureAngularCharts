import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, Xaxis, Yaxis } from '../pure-angular-charts.models';
import { BasicChart } from '../basic-chart';
import { Defaults } from '../defaults';

@Component({
  selector: 'pac-smooth-area-chart',
  templateUrl: './smooth-area-chart.component.html',
  styleUrls: ['./smooth-area-chart.component.scss']
})
export class SmoothAreaChartComponent extends BasicChart implements OnInit {
  constructor() {
    super();
  }
}


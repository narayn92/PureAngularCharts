import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, Xaxis, Yaxis } from '../pure-angular-charts.models';
import { BasicChart } from '../basic-chart';
import { Defaults } from '../defaults';

@Component({
  selector: 'pac-multi-type-chart',
  templateUrl: './multi-type-chart.component.html',
  styleUrls: ['./multi-type-chart.component.scss']
})
export class MultiTypeChartComponent extends BasicChart implements OnInit {
  constructor() {
    super();
  }
}


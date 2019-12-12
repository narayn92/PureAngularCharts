import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, Xaxis, Yaxis } from '../pure-angular-charts.models';
import { BasicChart } from '../basic-chart';
import { Defaults } from '../defaults';

@Component({
  selector: 'pac-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.scss']
})
export class AreaChartComponent extends BasicChart implements OnInit {
  constructor() {
    super();
  }

}

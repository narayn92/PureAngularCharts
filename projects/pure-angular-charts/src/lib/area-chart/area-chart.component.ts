import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, Xaxis, Yaxis } from '../pure-angular-charts.models';
import { BasicChart } from '../basic-chart';

@Component({
  selector: 'pac-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.scss']
})
export class AreaChartComponent extends BasicChart implements OnInit {
  constructor() {
    const defaultOptions: ChartOptions = {
      title: 'PAC Chart',
      xaxis: {
        type: 'numeric',
        show: true,
        labels: [],
        min: 0,
        max: 0,
        title: 'xaxis',
        ticks: {
          show: true,
          count: 6,
          length: 5
        },
        grid: {
          show: true
        },
        minMax: 'auto',
        paddingBottom: 40,
        paddingTop: 20
      },
      yaxis: {
        type: 'numeric',
        show: true,
        labels: [],
        min: 0,
        max: 0,
        title: 'yaxis',
        ticks: {
          show: true,
          count: 6,
          length: 5
        },
        grid: {
          show: true
        },
        minMax: 'auto',
        paddingLeft: 40,
        paddingRight: 40
      },
      series: [
        // { name: 'Series1' }
      ],
      bar: {
        width: 30
      },
      innerPaddingBottom: 10
    };
    super(defaultOptions);
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, Xaxis, Yaxis } from '../pure-angular-charts.models';
import { BasicChart } from '../basic-chart';

@Component({
  selector: 'pac-smooth-line-chart',
  templateUrl: './smooth-line-chart.component.html',
  styleUrls: ['./smooth-line-chart.component.scss']
})
export class SmoothLineChartComponent extends BasicChart implements OnInit {
  constructor() {
    const defaultOptions: ChartOptions = {
      title: 'PAC Chart',
      xaxis: {
        type: 'numeric',
        show: true,
        labels: [],
        showLabels: true,
        showAxisLine: true,
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
        axisHeight: 40,
      },
      yaxis: {
        type: 'numeric',
        show: true,
        labels: [],
        showLabels: true,
        showAxisLine: true,
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
        axisWidth: 40,
        paddingRight: 40
      },
      series: [
        // { name: 'Series1' }
      ],
      bar: {
        width: 30
      },
      innerPaddingTop: 20,
      innerPaddingBottom: 10
    };
    super(defaultOptions);
  }
}

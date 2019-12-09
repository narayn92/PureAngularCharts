import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, Xaxis, Yaxis } from '../pure-angular-charts.models';
import { BasicChart } from '../basic-chart';

@Component({
  selector: 'pac-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent extends BasicChart implements OnInit {
  constructor() {
    const defaultOptions: ChartOptions = {
      title: '',
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
        axisHeight: 20
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
        axisWidth: 50,
        paddingRight: 0
      },
      series: [
        // { name: 'Series1' }
      ],
      bar: {
        width: 30,
        spacing: 5
      },
     dataLabels: {
        show: true
      },
      legends: {
        show: true
      },
      innerPaddingTop: 20,
      innerPaddingBottom: 10
    };
    super(defaultOptions);
  }

}

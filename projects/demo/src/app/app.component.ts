import { Component } from '@angular/core';
import { ChartOptions } from 'pure-angular-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';
  chartWidth = 428;
  chartHeight = 250;
  barChartData = [
    [{ x: -1, y: 25 }, { x: 1, y: 5 }, { x: 2, y: 20 }, { x: 3, y: 30 }, { x: 4, y: -40 }, { x: 5, y: 50 }],
    // [{ x: -1, y: 20 }, { x: 1, y: 10 }, { x: 2, y: 15 }, { x: 3, y: 35 }, { x: 4, y: -35 }, { x: 5, y: 45 }]
  ];
  barChartOptions: ChartOptions = {
    title : 'Simple Bar Chart',
    xaxis : {
      type: 'numeric',
      show: true,
      labels: [],
      min: 0,
      max: 6,
      title: 'xaxis',
      ticks: {
        show: true,
        count: 6,
        length: 5
      },
      grid : {
        show: true
      },
      paddingBottom: 20,
      paddingTop: 30,
      minMax: 'auto'
    },
    yaxis : {
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
      grid : {
        show: true
      },
      paddingLeft: 50,
      paddingRight: 0,
      minMax: 'auto'
    },
    series : [
      { name: 'Series1', color: '#619eff', type: 'bar' },
      // { name: 'Series2', color: '#ff6161', type: 'line' }
    ],
    bar : {
      width: 30
    },
    innerPaddingBottom: 10
  };
  lineChartData = [
    [{ x: -1, y: 25 }, { x: 1, y: 5 }, { x: 2, y: 20 }, { x: 3, y: 30 }, { x: 4, y: -40 }, { x: 5, y: 50 }],
    // [{ x: -1, y: 20 }, { x: 1, y: 10 }, { x: 2, y: 15 }, { x: 3, y: 35 }, { x: 4, y: -35 }, { x: 5, y: 45 }]
  ];
  lineChartOptions: ChartOptions = {
    title : 'Simple Line Chart',
    xaxis : {
      type: 'numeric',
      show: true,
      labels: [],
      min: 0,
      max: 6,
      title: 'xaxis',
      ticks: {
        show: true,
        count: 6,
        length: 5
      },
      grid : {
        show: true
      },
      paddingBottom: 20,
      paddingTop: 30,
      minMax: 'auto'
    },
    yaxis : {
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
      grid : {
        show: true
      },
      paddingLeft: 50,
      paddingRight: 0,
      minMax: 'auto'
    },
    series : [
      { name: 'Series1', color: '#619eff', type: 'line' },
      // { name: 'Series2', color: '#ff6161', type: 'line' }
    ],
    bar : {
      width: 30
    },
    innerPaddingBottom: 10
  };
  smoothLineChartData = [
    [{ x: -1, y: 25 }, { x: 1, y: 5 }, { x: 2, y: 7 }, { x: 3, y: 30 }, { x: 4, y: -40 }, { x: 5, y: 50 }],
    // [{ x: -1, y: 20 }, { x: 1, y: 10 }, { x: 2, y: 15 }, { x: 3, y: 35 }, { x: 4, y: -35 }, { x: 5, y: 45 }]
  ];
  smoothLineChartOptions: ChartOptions = {
    title : 'Smooth Line Chart',
    xaxis : {
      type: 'numeric',
      show: true,
      labels: [],
      min: 0,
      max: 6,
      title: 'xaxis',
      ticks: {
        show: true,
        count: 6,
        length: 5
      },
      grid : {
        show: true
      },
      paddingBottom: 20,
      paddingTop: 30,
      minMax: 'auto'
    },
    yaxis : {
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
      grid : {
        show: true
      },
      paddingLeft: 50,
      paddingRight: 0,
      minMax: 'auto'
    },
    series : [
      { name: 'Series1', color: '#619eff', type: 'smooth-line' },
      // { name: 'Series2', color: '#ff6161', type: 'line' }
    ],
    bar : {
      width: 30
    },
    innerPaddingBottom: 10
  };

  areaChartData = [
    [{ x: -1, y: 25 }, { x: 1, y: 5 }, { x: 2, y: 20 }, { x: 3, y: 30 }, { x: 4, y: -40 }, { x: 5, y: 50 }],
    // [{ x: -1, y: 20 }, { x: 1, y: 10 }, { x: 2, y: 15 }, { x: 3, y: 35 }, { x: 4, y: -35 }, { x: 5, y: 45 }]
  ];
  areaChartOptions: ChartOptions = {
    title : 'Simple Area Chart',
    xaxis : {
      type: 'numeric',
      show: true,
      labels: [],
      min: 0,
      max: 6,
      title: 'xaxis',
      ticks: {
        show: true,
        count: 6,
        length: 5
      },
      grid : {
        show: true
      },
      paddingBottom: 20,
      paddingTop: 30,
      minMax: 'auto'
    },
    yaxis : {
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
      grid : {
        show: true
      },
      paddingLeft: 50,
      paddingRight: 0,
      minMax: 'auto'
    },
    series : [
      { name: 'Series1', color: '#619eff', type: 'area' },
      // { name: 'Series2', color: '#ff6161', type: 'line' }
    ],
    bar : {
      width: 30
    },
    innerPaddingBottom: 10
  };
}

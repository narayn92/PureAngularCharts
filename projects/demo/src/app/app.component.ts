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

  smoothAreaChartData = [
    [{ x: -1, y: 25 }, { x: 1, y: 5 }, { x: 2, y: 20 }, { x: 3, y: 30 }, { x: 4, y: -40 }, { x: 5, y: 50 }],
    // [{ x: -1, y: 20 }, { x: 1, y: 10 }, { x: 2, y: 15 }, { x: 3, y: 35 }, { x: 4, y: -35 }, { x: 5, y: 45 }]
  ];
  smoothAreaChartOptions: ChartOptions = {
    title : 'Smooth Area Chart',
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
      { name: 'Series1', color: '#619eff', type: 'smooth-area' },
      // { name: 'Series2', color: '#ff6161', type: 'line' }
    ],
    bar : {
      width: 30
    },
    innerPaddingBottom: 10
  };

  multiTypeChartData = [
    [{ x: -1, y: 25 }, { x: 1, y: 35 }, { x: 2, y: 30 }, { x: 3, y: 40 }, { x: 4, y: 30 }, { x: 5, y: 45 }],
    [{ x: -1, y: 20 }, { x: 1, y: 28 }, { x: 2, y: 24 }, { x: 3, y: 32 }, { x: 4, y: 24 }, { x: 5, y: 36 }],
    [{ x: -1, y: 15 }, { x: 1, y: 21 }, { x: 2, y: 18 }, { x: 3, y: 24 }, { x: 4, y: 18 }, { x: 5, y: 27 }],
    [{ x: -1, y: 10 }, { x: 1, y: 14 }, { x: 2, y: 12 }, { x: 3, y: 16 }, { x: 4, y: 12 }, { x: 5, y: 18 }],
    [{ x: -1, y: 5 }, { x: 1, y: 7 }, { x: 2, y: 6 }, { x: 3, y: 8 }, { x: 4, y: 6 }, { x: 5, y: 9}]
  ];
  multiTypeChartOptions: ChartOptions = {
    title : 'Multi Type Chart',
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
      { name: 'Series1', color: '#bb78ff', type: 'bar' },
      { name: 'Series2', color: '#fff766', type: 'line' },
      { name: 'Series4', color: '#66ffed', type: 'smooth-line' },
      { name: 'Series3', color: '#82ff66', type: 'area' },
      { name: 'Series5', color: '#6670ff', type: 'smooth-area' }
    ],
    bar : {
      width: 30
    },
    innerPaddingBottom: 10
  };
}

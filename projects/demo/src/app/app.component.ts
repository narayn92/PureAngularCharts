import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';
  chartWidth = 600;
  chartHeight = 400;
  chartData = [
    [{ x: -1, y: 25 }, { x: 1, y: 5 }, { x: 2, y: 20 }, { x: 3, y: 30 }, { x: 4, y: -40 }, { x: 5, y: 50 }]
  ];
  chartOptions = {
    title : 'Simple Bar Chart',
    xaxis : {
      type: 'numeric',
      show: true,
      // labels: ['0', '1', '2', '3', '4', '5'],
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
      // labels: ['0', '1', '2', '3', '4', '5'],
      min: 0,
      max: 'ss',
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
      { name: 'Series1', color: '#ababab' }
    ],
    bar : {
      width: 30
    }
  };
}

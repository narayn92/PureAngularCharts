import { Component, OnInit } from '@angular/core';
import { ChartOptions } from '../pure-angular-charts.models';
import { BasicChart } from '../basic-chart';

@Component({
  selector: 'pac-stacked-bar-chart',
  templateUrl: './stacked-bar-chart.component.html',
  styleUrls: ['./stacked-bar-chart.component.scss']
})
export class StackedBarChartComponent extends BasicChart implements OnInit {

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
        axisHeight: 40
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
        width: 30,
        spacing: 5
      },
      innerPaddingTop: 20,
      innerPaddingBottom: 10
    };
    super(defaultOptions);
  }

  ngOnInit() {
  }

  // loadChart(changes: SimpleChanges) {
  //   // super.loadChart(changes);
  //   console.log('loadchart - grouped bar');
  // }

  plotDataPoints() {
    console.log('plotDataPoints');
    // this.pData = this.data.map((series, si) => {
    //   return {
    //     series: this.options.series[si],
    //     data: series.map((item, indx) => {
    //       // tslint:disable-next-line:max-line-length
    // tslint:disable-next-line:max-line-length
    //       const distanceFromXAxis = (((this.pYaxis.min < 0) ? item.y : (item.y - this.pYaxis.min)) / this.pPerUnitY) * this.pPerUnitHeight;
    //       let distanceFromYAxis = 0;

    //       const microSpacing = 4;
    //       const microUnit = this.options.bar.width + microSpacing;
    //       const offset = (this.pPerUnitWidth - (microUnit * this.data.length)) / 2;
    //       distanceFromYAxis = (indx * this.pPerUnitWidth) + offset + (((si + 1) * microUnit)) - (microUnit / 2);

    //       // working version
    //       // const microUnit = this.pPerUnitWidth / ((this.data.length * 2) + 1);
    //       // distanceFromYAxis = (indx * this.pPerUnitWidth) + (((si + 1) * 2 * microUnit)) - (microUnit / 2);
    //       // working version - end
    //       return {
    //         x: item.x,
    //         y: item.y,
    //         height: Math.abs(distanceFromXAxis),
    //         px: this.pyaxisLocation + distanceFromYAxis,
    //         py: this.pxaxisLocation - distanceFromXAxis// + this.pXaxis.innerPaddingTop
    //       };
    //     })
    //   };
    // });
    // console.log(this.width + '-' + this.pYaxis.axisWidth + '-' + this.pPerUnitWidth);
    // console.log(this.pXaxis.labels);
    // console.log(this.pData);
  }

}

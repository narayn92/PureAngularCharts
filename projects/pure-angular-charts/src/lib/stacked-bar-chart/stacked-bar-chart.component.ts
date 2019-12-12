import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ChartOptions } from '../pure-angular-charts.models';
import { BasicChart } from '../basic-chart';
import { Defaults } from '../defaults';

@Component({
  selector: 'pac-stacked-bar-chart',
  templateUrl: './stacked-bar-chart.component.html',
  styleUrls: ['./stacked-bar-chart.component.scss']
})
export class StackedBarChartComponent extends BasicChart implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

  loadChart(changes: SimpleChanges) {
    console.log('loadChart - stacked', changes);
    let categories = [];

    let autoDetectedAxisType = '';
    if (this.data && this.data.length > 0 && this.data[0].length > 0) {
      if (typeof this.data[0][0].x === 'number' || !isNaN(this.data[0][0].x)) {
        autoDetectedAxisType = 'numeric';
      } else if (typeof this.data[0][0].x === 'string') {
        autoDetectedAxisType = 'category';
      }
    }
    if (this.options.xaxis.type !== autoDetectedAxisType) {
      this.options.xaxis.type = autoDetectedAxisType;
    }

    if (changes.options || changes.data) {

      this.pActualBarWidth = this.options.bar.width;
      this.pActualBarSpacing = this.options.bar.spacing;

      this.pXaxis = Object.assign({}, this.options.xaxis);
      this.pYaxis = Object.assign({}, this.options.yaxis);

      if (this.pXaxis.type === 'category') {
        const catData = {};
        categories = [];
        this.data.forEach((series, si) => {
          series.forEach((item, indx) => {
            if (!catData[item.x]) {
              catData[item.x] = {};
            }
            catData[item.x][si] = item;
          });
        });
        if (this.pXaxis.labels && this.pXaxis.labels.length > 0) {
          categories = this.pXaxis.labels;
        } else {
          categories = Object.keys(catData);
        }

        this.data = this.data.map((series, si) => {
          return categories.map((item, indx) => {
            // tslint:disable-next-line:max-line-length
            let point;
            if (catData[item] && catData[item][si]) {
              point = catData[item][si];
            } else {
              point = { x: item, y: 0 };
            }
            return point;
          });
        });
      }

      if (this.pXaxis.type === 'category') {

        this.pXaxis.min = 0;
        this.pXaxis.max = this.data[0].length;
        this.pXaxis.ticks.count = this.pXaxis.max;
        this.pPerUnitX = 1;
      }
      // tslint:disable-next-line:max-line-length
      if (this.pYaxis.minMax !== 'fixed' || (this.pYaxis.minMax === 'fixed' && ((!this.pYaxis.max && isNaN(this.pYaxis.max)) || isNaN(this.pYaxis.max)))) {
        this.pYaxis.max = this.data.reduce((pd, cd, i) => {
          const cMax = (cd.reduce((prev, current) => {
            return (prev.y > current.y) ? prev : current;
          }, '')).y;
          this.options.series[i].max = cMax;
          return pd + cMax;
        }, 0);
      }

      // tslint:disable-next-line:max-line-length
      if (this.pYaxis.minMax !== 'fixed' || (this.pYaxis.minMax === 'fixed' && ((!this.pYaxis.min && isNaN(this.pYaxis.min)) || isNaN(this.pYaxis.min)))) {

        const fMin = (this.data[0].reduce((prev, current) => {
          return (prev.y < current.y) ? prev : current;
        })).y;

        if (this.data.length > 1) {
          this.pYaxis.min = this.data.reduce((pd, cd, i) => {
            let cMin = 0;
            if (i === 0) {
              if (pd < 0) {
                cMin = pd;
              }
              this.options.series[i].min = cMin;
            } else {
              cMin = (cd.reduce((prev, current) => {
                return (prev.y < current.y) ? prev : current;
              }, '')).y;
              this.options.series[i].min = cMin;
              cMin = (cMin < 0) ? cMin : 0;
              cMin += pd;
            }
            return cMin;
          }, fMin);
        } else {
          this.pYaxis.min = fMin;
        }

        this.pYaxis.min = (this.pYaxis.min > 0) ? 0 : this.pYaxis.min;
      }
      this.pPerUnitY = (this.pYaxis.max - this.pYaxis.min) / this.pYaxis.ticks.count;
    }

    if (changes.width || changes.height || changes.options || changes.data) {
      this.calculateLabels();
    }
  }

  calculateLabels() {
    const xlabels = [];
    if (this.pXaxis.type === 'category') {
      this.pPerUnitWidth = (this.width - this.pYaxis.axisWidth - this.pYaxis.paddingRight) / this.pXaxis.ticks.count;
      for (let i = 0; i < this.pXaxis.ticks.count; i++) {
        xlabels.push({
          text: this.data[0][i].x,
          px: this.pYaxis.axisWidth + (i * this.pPerUnitWidth) + (this.pPerUnitWidth / 2),
          py: this.height
        });
      }
      this.pXaxis.labels = xlabels;

      this.pyaxisLocation = this.pYaxis.axisWidth;
    }
    // tslint:disable-next-line:max-line-length
    this.pPerUnitHeight = (this.height - this.options.innerPaddingTop - this.pXaxis.axisHeight - this.options.innerPaddingBottom) / this.pYaxis.ticks.count;

    const ylabels = [];
    for (let i = 0; i <= this.pYaxis.ticks.count; i++) {
      ylabels.push({
        text: (this.pYaxis.min + (i * this.pPerUnitY)).toFixed(2),
        px: 0,
        // tslint:disable-next-line:max-line-length
        py: this.height - (i * this.pPerUnitHeight) - this.pXaxis.axisHeight - this.options.innerPaddingBottom // + this.pXaxis.innerPaddingTop,
      });
    }
    this.pYaxis.labels = ylabels;
    // tslint:disable-next-line:max-line-length
    this.pxaxisLocation = this.height - this.pXaxis.axisHeight - this.options.innerPaddingBottom + ((this.pYaxis.min <= 0) ? ((this.pYaxis.min / this.pPerUnitY) * this.pPerUnitHeight) : 0);

    this.plotDataPoints();
  }

  plotDataPoints() {
    console.log('plotDataPoints');

    let stackedBarSeriesCount = 0;
    this.options.series.forEach((item, si) => {
      if (item.type === 'stacked-bar') {
        if (!this.pIsLegendFiltered || (this.pIsLegendFiltered && this.pSelectedLegends.indexOf(si) !== -1)) {
          stackedBarSeriesCount++;
        }
      }
    });
    const hasStackedBar = (stackedBarSeriesCount > 1) ? true : false;
    if (stackedBarSeriesCount > 0) {
      const spaceAvailable = this.pPerUnitWidth * 0.8;
      this.pActualBarWidth = (this.options.bar.width > spaceAvailable) ? spaceAvailable : this.options.bar.width;
    }

    this.pData = [];
    this.data.forEach((series, si) => {
      if (!this.pIsLegendFiltered || (this.pIsLegendFiltered && this.pSelectedLegends.indexOf(si) !== -1)) {
        const sData = {
          seriesIndex: si,
          series: this.options.series[si],
          data: series.map((item, indx) => {
            // tslint:disable-next-line:max-line-length
            const distanceFromXAxis = (((this.pYaxis.min < 0) ? item.y : (item.y - this.pYaxis.min)) / this.pPerUnitY) * this.pPerUnitHeight;
            const distanceFromYAxis = indx * this.pPerUnitWidth + (this.pPerUnitWidth / 2);

            return {
              x: item.x,
              y: item.y,
              total: (this.pData.length > 0) ? (item.y + this.pData[this.pData.length - 1].data[indx].total) : item.y,
              height: Math.abs(distanceFromXAxis),
              px: this.pyaxisLocation + distanceFromYAxis,
              // tslint:disable-next-line:max-line-length
              py: (this.pData.length > 0) ? this.pData[this.pData.length - 1].data[indx].py - distanceFromXAxis : this.pxaxisLocation - distanceFromXAxis// + this.pXaxis.innerPaddingTop
            };
          })
        };
        this.pData.push(sData);
      } else {
        // this.pData.push(null);
      }
    });
    console.log(this.height + '-' + this.pXaxis.axisHeight + '-' + this.pPerUnitHeight);
    console.log(this.pXaxis.labels);
    console.log(this.pData);
  }

  resetMinMax() {

    this.pYaxis.max = this.options.series.reduce((pd, cd, si) => {
      if (!this.pIsLegendFiltered || this.pSelectedLegends.indexOf(si) !== -1) {
        return pd + cd.max;
      } else {
        return pd;
      }
    }, 0);

    this.pYaxis.min = this.options.series.reduce((pd, cd, si) => {
      if (!this.pIsLegendFiltered || this.pSelectedLegends.indexOf(si) !== -1) {
        return pd + ((cd.min < 0) ? cd.min : 0);
      } else {
        return pd;
      }
    }, 0);

    this.pPerUnitY = (this.pYaxis.max - this.pYaxis.min) / this.pYaxis.ticks.count;
  }
}

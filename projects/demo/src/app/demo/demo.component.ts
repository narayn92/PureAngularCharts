import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartOptions } from 'pure-angular-charts';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  @ViewChild(JsonEditorComponent, { static: true }) editor: JsonEditorComponent;

  jeoptions = new JsonEditorOptions();
  jebarChartOptions;

  chartType;
  barChartData = [
    [{ x: -1, y: 25 }, { x: 1, y: 5 }, { x: 2, y: 20 }, { x: 3, y: 30 }, { x: 4, y: -40 }, { x: 5, y: 50 }],
    // [{ x: -1, y: 20 }, { x: 1, y: 10 }, { x: 2, y: 15 }, { x: 3, y: 35 }, { x: 4, y: -35 }, { x: 5, y: 45 }]
  ];
  barChartOptions: ChartOptions = {
    title: '',
    xaxis: {
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
      grid: {
        show: true
      },
      paddingBottom: 20,
      paddingTop: 30,
      minMax: 'auto'
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
      paddingLeft: 50,
      paddingRight: 0,
      minMax: 'auto'
    },
    series: [
      { name: 'Series1', color: '#619eff', type: 'bar' },
      // { name: 'Series2', color: '#ff6161', type: 'line' }
    ],
    bar: {
      width: 30
    },
    innerPaddingBottom: 10
  };

  constructor(private route: ActivatedRoute, private _ngZone: NgZone) {
    this.chartType = this.route.snapshot.params.type;
  }

  ngOnInit() {

    this.jebarChartOptions = Object.assign({}, this.barChartOptions);
    this.jeoptions.mode = 'tree';
    this.jeoptions.modes = ['code', 'text', 'tree', 'view'];
    // this.jeoptions.schema = schema;
    // this.jeoptions.statusBar = false;
    // let ref = this;
    // this.jeoptions.onChange = () => {
    //   console.log(this.editor.get());
    //   const ch = this.editor.get();
    //   ref._ngZone.run(() => {
    //     ref.barChartOptions = ch;
    //   });
    // };
  }

  getData(event) {
    // console.log('getData', event);
    // this._ngZone.run(() => {
    this.barChartOptions = event;
    // });
  }

}

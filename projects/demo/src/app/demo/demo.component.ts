import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';
import { SampleData } from '../sample-data';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  Pagetitle;
  sd = new SampleData();
  chartType;
  templateType;

  @ViewChild('BarChartRef', { static: true }) BarChartRef: TemplateRef<any>;
  @ViewChild('LineChartRef', { static: true }) LineChartRef: TemplateRef<any>;
  @ViewChild('AreaChartRef', { static: true }) AreaChartRef: TemplateRef<any>;
  @ViewChild('SmoothLineChartRef', { static: true }) SmoothLineChartRef: TemplateRef<any>;
  @ViewChild('SmoothAreaChartRef', { static: true }) SmoothAreaChartRef: TemplateRef<any>;
  @ViewChild('MutiTypeChartRef', { static: true }) MutiTypeChartRef: TemplateRef<any>;

  chartOptions;
  chartData;

  showData = false;

  @ViewChild(JsonEditorComponent, { static: true }) editor: JsonEditorComponent;
  chartOptionsEditorOptions = new JsonEditorOptions();
  jeChartOptions;
  chartDataEditorOptions = new JsonEditorOptions();
  jeChartData;

  constructor(private route: ActivatedRoute) {
    route.params.subscribe(p => {
      console.log(p.type);
      this.chartType = p.type;
      if (this.chartType) {
        this.setChartOptions();
      }
    });
    // this.chartType = this.route.snapshot.params.type;
  }

  ngOnInit() {

    this.chartOptionsEditorOptions.mode = 'tree';
    this.chartOptionsEditorOptions.modes = ['code', 'text', 'tree', 'view'];
    this.chartDataEditorOptions.mode = 'tree';
    this.chartDataEditorOptions.modes = ['code', 'text', 'tree', 'view'];
    // this.jeoptions.schema = schema;
    // this.jeoptions.statusBar = false;
    // this.jeoptions.onChange = () => {
    //   console.log(this.editor.get());
    // };
    // if (this.chartType) {
    //   this.setChartOptions();
    // }
    if (this.chartType) {
      this.setChartOptions();
    }
  }

  setChartOptions() {
    switch (this.chartType) {
      case 'simple-bar-chart':
        this.Pagetitle = 'Simple Bar Chart';
        this.chartOptions = this.sd.barChartOptions;
        this.chartData = this.sd.barChartData;
        this.templateType = this.BarChartRef;
        break;
      case 'simple-line-chart':
        this.Pagetitle = 'Simple Line Chart';
        this.chartOptions = this.sd.lineChartOptions;
        this.chartData = this.sd.lineChartData;
        this.templateType = this.LineChartRef;
        break;
      case 'simple-area-chart':
        this.Pagetitle = 'Simple Area Chart';
        this.chartOptions = this.sd.areaChartOptions;
        this.chartData = this.sd.areaChartData;
        this.templateType = this.AreaChartRef;
        break;
      case 'smooth-line-chart':
        this.Pagetitle = 'Smooth Line Chart';
        this.chartOptions = this.sd.smoothLineChartOptions;
        this.chartData = this.sd.smoothLineChartData;
        this.templateType = this.SmoothLineChartRef;
        break;
      case 'smooth-area-chart':
        this.Pagetitle = 'Smooth Area Chart';
        this.chartOptions = this.sd.smoothAreaChartOptions;
        this.chartData = this.sd.smoothAreaChartData;
        this.templateType = this.SmoothAreaChartRef;
        break;
      case 'multi-type-chart':
        this.Pagetitle = 'Multi Type Chart';
        this.chartOptions = this.sd.multiTypeChartOptions;
        this.chartData = this.sd.multiTypeChartData;
        this.templateType = this.MutiTypeChartRef;
        break;
    }

    if (this.chartOptions && this.chartData) {
      this.jeChartOptions = Object.assign({}, this.chartOptions);
      this.jeChartData = this.chartData.slice(0);
    }
  }
  OnOptionsChange(event) {
    // console.log('getData', event);
    this.chartOptions = event;
  }

  OnDataChange(event) {
    // console.log('getData', event);
    this.chartData = event;
  }

}

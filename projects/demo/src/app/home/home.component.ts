import { Component, OnInit } from '@angular/core';
import { ChartOptions } from 'pure-angular-charts';
import { SampleData } from '../sample-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  sd = new SampleData();
  
  constructor() { }

  ngOnInit() {
  }

}

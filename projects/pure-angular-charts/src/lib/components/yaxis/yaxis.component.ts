import { Component, OnInit, Input } from '@angular/core';
import { Yaxis } from '../../pure-angular-charts.models';

@Component({
  selector: '[pac-yaxis]',
  templateUrl: './yaxis.component.html',
  styleUrls: ['./yaxis.component.css']
})
export class YaxisComponent implements OnInit {

  @Input() pYaxis: Yaxis;
  @Input() width;

  constructor() { }

  ngOnInit() {
  }

}

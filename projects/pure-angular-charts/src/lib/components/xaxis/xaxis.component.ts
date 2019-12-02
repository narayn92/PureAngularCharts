import { Component, OnInit, Input } from '@angular/core';
import { Xaxis } from '../../pure-angular-charts.models';

@Component({
  selector: '[pac-xaxis]',
  templateUrl: './xaxis.component.html',
  styleUrls: ['./xaxis.component.css']
})
export class XaxisComponent implements OnInit {

  @Input() pXaxis: Xaxis;

  constructor() { }

  ngOnInit() {
  }

}

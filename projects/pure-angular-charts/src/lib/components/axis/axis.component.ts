import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[pac-axis]',
  templateUrl: './axis.component.html',
  styleUrls: ['./axis.component.scss']
})
export class AxisComponent implements OnInit {

  @Input() pXaxis;
  @Input() pYaxis;
  @Input() pxaxisLocation;
  @Input() pyaxisLocation;
  @Input() width;
  @Input() height;

  constructor() { }

  ngOnInit() {
  }

}

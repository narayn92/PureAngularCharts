import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '[pac-bar]',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

  @Input() series;
  @Input() options;
  @Input() pxaxisLocation;
  @Input() pYaxis;
  @Input() showTotal = false;
  @Input() pActualBarWidth = 0;

  // @Output() tooltipEvents = new EventEmitter();
  @Output() tmouseEnter = new EventEmitter();
  @Output() tmouseOver = new EventEmitter();
  @Output() tmouseLeave = new EventEmitter();

  math = Math;

  constructor() { }

  ngOnInit() {
  }

  OnMouseEnter(event, point, series) {
    this.tmouseEnter.emit({event, point, series});
  }
  OnMouseOver(event) {
    this.tmouseOver.emit(event);
  }

  OnMouseLeave(event) {
    this.tmouseLeave.emit(event);
  }

}

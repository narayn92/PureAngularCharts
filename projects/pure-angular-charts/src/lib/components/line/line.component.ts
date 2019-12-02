import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '[pac-line]',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {

  @Input() series;
  @Input() options;
  @Input() pxaxisLocation;
  // @Input() pPerUnitWidth;
  @Input() pYaxis;

  // @Output() tooltipEvents = new EventEmitter();
  @Output() tmouseEnter = new EventEmitter();
  @Output() tmouseOver = new EventEmitter();
  @Output() tmouseLeave = new EventEmitter();

  plinePath;

  math = Math;

  constructor() { }

  ngOnInit() {
    this.plinePath = this.getSvgPath(this.series.data);
  }

  getSvgPath(data) {
    return data.reduce((total, currentValue, currentIndex, arr) => {
      if (currentIndex === 0) {
        return total + `M ${currentValue.px} ${currentValue.py}`;
      } else {
        return total + `L ${currentValue.px} ${currentValue.py}`;
      }

    }, '');
  }
  OnMouseEnter(event, point, series) {
    this.tmouseEnter.emit({ event, point, series });
  }
  OnMouseOver(event) {
    this.tmouseOver.emit(event);
  }

  OnMouseLeave(event) {
    this.tmouseLeave.emit(event);
  }

}

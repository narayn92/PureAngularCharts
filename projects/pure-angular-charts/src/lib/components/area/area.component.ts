import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '[pac-area]',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

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
    this.plinePath = (this.series && this.series.path) ? this.series.path : this.getSvgPath(this.series.data);
  }

  getSvgPath(data) {
    return data.reduce((total, currentValue, currentIndex, arr) => {
      if (currentIndex === 0) {
        return `M${currentValue.px} ${this.pxaxisLocation} L${currentValue.px} ${currentValue.py}`;
      } else if (currentIndex === arr.length - 1) {
        return total + `L${currentValue.px} ${currentValue.py} L${currentValue.px} ${this.pxaxisLocation}`;
      } else {
        return total + `L${currentValue.px} ${currentValue.py}`;
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

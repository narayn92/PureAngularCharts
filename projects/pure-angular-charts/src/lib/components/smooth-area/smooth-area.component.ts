import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '[pac-smooth-area]',
  templateUrl: './smooth-area.component.html',
  styleUrls: ['./smooth-area.component.scss']
})
export class SmoothAreaComponent implements OnInit {

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

  // getSvgPath(data) {
  //   return data.reduce((total, currentValue, currentIndex, arr) => {
  //     if (currentIndex === 0) {
  //       return total + `M ${currentValue.px} ${currentValue.py}`;
  //     } else {
  //       return total + `L ${currentValue.px} ${currentValue.py}`;
  //     }

  //   }, '');
  // }
  OnMouseEnter(event, point, series) {
    this.tmouseEnter.emit({ event, point, series });
  }
  OnMouseOver(event) {
    this.tmouseOver.emit(event);
  }

  OnMouseLeave(event) {
    this.tmouseLeave.emit(event);
  }

  // Render the svg <path> element 
  // I:  - points (array): points coordinates
  //     - command (function)
  //       I:  - point (array) [x,y]: current point coordinates
  //           - i (integer): index of 'point' in the array 'a'
  //           - a (array): complete array of points coordinates
  //       O:  - (string) a svg path command
  // O:  - (string): a Svg <path> element
  getSvgPath(points) {
    // build the d attributes by looping over the points
    const d = points.reduce((acc, point, i, a) => {
      if (i === 0) {
        return `M${point.px} ${this.pxaxisLocation} L ${point.px},${point.py}`;
      } else {
        if (i === a.length - 1) {
          return `${acc} ${this.bezierCommand(point, i, a)} L${point.px} ${this.pxaxisLocation}`;
        } else {
          return `${acc} ${this.bezierCommand(point, i, a)}`;
        }
      }
    }
      , '');
    return d;
  }



  // Properties of a line
  // I:  - pointA (array) [x,y]: coordinates
  //     - pointB (array) [x,y]: coordinates
  // O:  - (object) { length: l, angle: a }: properties of the line
  line(pointA, pointB) {
    const lengthX = pointB.px - pointA.px;
    const lengthY = pointB.py - pointA.py;
    return {
      length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
      angle: Math.atan2(lengthY, lengthX)
    };
  }

  // Position of a control point
  // I:  - current (array) [x, y]: current point coordinates
  //     - previous (array) [x, y]: previous point coordinates
  //     - next (array) [x, y]: next point coordinates
  //     - reverse (boolean, optional): sets the direction
  // O:  - (array) [x,y]: a tuple of coordinates
  controlPoint(current, previous, next, reverse) {
    // When 'current' is the first or last point of the array
    // 'previous' or 'next' don't exist.
    // Replace with 'current'
    const p = previous || current;
    const n = next || current;
    // The smoothing ratio
    const smoothing = 0.2;
    // Properties of the opposed-line
    const o = this.line(p, n);
    // If is end-control-point, add PI to the angle to go backward
    const angle = o.angle + (reverse ? Math.PI : 0);
    const length = o.length * smoothing;
    // The control point position is relative to the current point
    const x = current.px + Math.cos(angle) * length;
    const y = current.py + Math.sin(angle) * length;
    return [x, y];
  }
  // Create the bezier curve command
  // I:  - point (array) [x,y]: current point coordinates
  //     - i (integer): index of 'point' in the array 'a'
  //     - a (array): complete array of points coordinates
  // O:  - (string) 'C x2,y2 x1,y1 x,y': SVG cubic bezier C command
  bezierCommand(point, i, a) {
    // start control point
    const [cpsX, cpsY] = this.controlPoint(a[i - 1], a[i - 2], point, false);
    // end control point
    const [cpeX, cpeY] = this.controlPoint(point, a[i - 1], a[i + 1], true);
    return `C ${cpsX},${cpsY} ${cpeX},${cpeY} ${point.px},${point.py}`;
  }

}

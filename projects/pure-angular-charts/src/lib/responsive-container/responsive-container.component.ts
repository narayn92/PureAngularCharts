// tslint:disable-next-line:max-line-length
import { Component, OnInit, Input, ElementRef, AfterViewInit, TemplateRef, ChangeDetectorRef, HostListener, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'pac-responsive-container',
  templateUrl: './responsive-container.component.html',
  styleUrls: ['./responsive-container.component.scss']
})
export class ResponsiveContainerComponent implements OnInit, AfterViewInit {

  // @Input() data;
  // @Input() options;
  @Input() templateRef: TemplateRef<any>;

  isElementLoaded = false;

  chartDimention = {
    width: 0,
    height: 0
    // data: null,
    // options: null
  };

  constructor(public el: ElementRef, public cdref: ChangeDetectorRef) { }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('resp', changes);
  //   if (this.isElementLoaded) {
  //     const newOpt = Object.assign({}, this.chartDimention);
  //     if (changes.options) {
  //       newOpt.options = this.options;
  //       this.chartDimention = newOpt;
  //     }
  //     // this.chartDimention = {
  //     //   width: element.offsetWidth - paddingX - borderX - 12,
  //     //   height: element.offsetHeight - paddingY - borderY - 72,
  //     //   data: this.data,
  //     //   options: this.options
  //     // };
  //   }

  // }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngAfterViewInit() {
    this.getChartDimension();
    this.cdref.detectChanges();
  }



  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.getChartDimension();
  }

  getChartDimension() {
    if (this.el && this.el.nativeElement) {
      const element = this.el.nativeElement.parentElement;
      const cs = getComputedStyle(element);

      const paddingX = parseFloat(cs.paddingLeft) + parseFloat(cs.paddingRight);
      const paddingY = parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom);

      const borderX = parseFloat(cs.borderLeftWidth) + parseFloat(cs.borderRightWidth);
      const borderY = parseFloat(cs.borderTopWidth) + parseFloat(cs.borderBottomWidth);

      this.chartDimention = {
        width: element.offsetWidth - paddingX - borderX,
        height: element.offsetHeight - paddingY - borderY
        // data: this.data,
        // options: this.options
      };
      this.isElementLoaded = true;
    }
    console.log('this.chartDimention', this.chartDimention);
  }

}

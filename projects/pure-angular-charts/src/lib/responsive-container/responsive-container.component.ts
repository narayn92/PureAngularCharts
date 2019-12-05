import { Component, OnInit, Input, ElementRef, AfterViewInit, TemplateRef, ChangeDetectorRef, HostListener } from '@angular/core';

@Component({
  selector: 'pac-responsive-container',
  templateUrl: './responsive-container.component.html',
  styleUrls: ['./responsive-container.component.scss']
})
export class ResponsiveContainerComponent implements OnInit, AfterViewInit {

  @Input() templateRef: TemplateRef<any>;

  @Input() data;
  @Input() options;
  isElementLoaded = false;

  chartDimention = {
    width: 0,
    height: 0
  };

  constructor(public el: ElementRef, public cdref: ChangeDetectorRef) { }

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
        width: element.offsetWidth - paddingX - borderX - 12,
        height: element.offsetHeight - paddingY - borderY - 72
      };
      this.isElementLoaded = true;
    }
    console.log('this.chartDimention', this.chartDimention);
  }

}

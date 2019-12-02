import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmoothLineChartComponent } from './smooth-line-chart.component';

describe('SmoothLineChartComponent', () => {
  let component: SmoothLineChartComponent;
  let fixture: ComponentFixture<SmoothLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmoothLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmoothLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
